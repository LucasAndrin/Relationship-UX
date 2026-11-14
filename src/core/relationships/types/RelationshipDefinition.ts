import type { Component } from 'vue';
import type { WindowOverlayOptions } from '../../window-manager';

export type RelationshipCardinality = 'one' | 'many';

export type EntityConstructor<TEntity = unknown> = abstract new (...args: never[]) => TEntity;

export type AsyncEntityResolver<TEntity = unknown> = () => Promise<EntityConstructor<TEntity>>;

export type RelationshipMode = undefined|null|string

export type ComponentModule = {
  	default: Component
}

export type RelationshipPresentationContext<TTarget = unknown> = {
	mode: RelationshipMode
	props: Record<string, unknown>
	source: unknown
	definition: RelationshipDefinition<TTarget>
	targetEntity: EntityConstructor<TTarget>
}

export type RelationshipDefinition<TTarget = unknown> = {
	name: string
	cardinality: RelationshipCardinality
	resolveEntity: AsyncEntityResolver<TTarget>

	resolveComponent(context: RelationshipPresentationContext<TTarget>): Promise<ComponentModule>,

	getProps?: (
		context: RelationshipPresentationContext<TTarget>,
	) => Record<string, unknown>
}

export type RelationshipOpenOptions = {
	mode?: RelationshipMode
	props?: Record<string, unknown>
	overlay?: WindowOverlayOptions
}
