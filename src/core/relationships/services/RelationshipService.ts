import type { Component } from 'vue'

import type { EntityConstructor, RelationshipOpenOptions, RelationshipPresentationContext, RelationshipReference } from '../types'

import { RelationshipResolver } from './RelationshipResolver'
import type { WindowId, WindowManagerService } from '../../window-manager';

type RelationshipOwner<TSource extends object> = EntityConstructor<TSource> & {
	relationships: Record<
		string,
		RelationshipReference<unknown>
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

		const customProps = options.props ?? {}
		const definition = await this.resolver.resolve(reference)
		const targetEntity = await this.resolver.resolveEntity(definition)

		const context: RelationshipPresentationContext = {
			source,
			definition,
			targetEntity,
			mode: options.mode,
			props: customProps,
		}

		const presentationProps = definition.getProps?.(context) ?? {};
		const component = await definition.resolveComponent(context);

		return this.windowManager.open({
			title: definition.name,
			component,
			props: {
				...customProps,
				...presentationProps,
				mode: context.mode,
				source: context.source,
				relationship: definition,
				targetEntity: context.targetEntity,
			},
			overlay: options.overlay,
		});
	}
}
