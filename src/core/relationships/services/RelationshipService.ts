import type { Component } from 'vue'

import type { EntityConstructor, RelationshipOpenOptions, RelationshipReference } from '../types'

import { RelationshipResolver } from './RelationshipResolver'
import type { WindowId, WindowManagerService } from '../../window-manager';

type RelationshipOwner<TSource extends object> = EntityConstructor<TSource> & {
	relationships: Record<
		string,
		RelationshipReference<TSource, unknown>
	>
}

export class RelationshipService {
	constructor(
		private readonly windowManager: WindowManagerService,
		private readonly resolver = new RelationshipResolver(),
	) {}

	async open<TSource extends object>(
		source: TSource,
		relationshipName: string,
		options: RelationshipOpenOptions = {},
	): Promise<WindowId> {
		const owner = source.constructor as RelationshipOwner<TSource>
		const reference = owner.relationships?.[relationshipName]

		if (!reference) {
			throw new Error(
				`Relationship "${relationshipName}" is not defined.`,
			)
		}

		const definition = await this.resolver.resolve(reference)
		const targetEntity = await this.resolver.resolveEntity(definition)
		const componentModule = await definition.resolveComponent()
		const component: Component = componentModule.default

		const mode = options.mode ?? 'select'
		const customProps = options.props ?? {}

		const presentationProps = definition.getProps?.({
			source,
			definition,
			targetEntity,
			mode,
			props: customProps,
		}) ?? {}

		return this.windowManager.open({
			title: definition.name,
			component,
			props: {
				...presentationProps,
				...customProps,
				source,
				relationship: definition,
				targetEntity,
				mode,
			},
			overlay: options.overlay,
		});
	}
}
