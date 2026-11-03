import type { Component } from 'vue';
import type { WindowOverlayOptions } from '../../window-manager';

export type RelationshipCardinality = 'one' | 'many';

export type EntityConstructor<TEntity = unknown> = abstract new (...args: never[]) => TEntity;

export type AsyncEntityResolver<TEntity = unknown> = () => Promise<EntityConstructor<TEntity>>;

export type RelationshipMode = 'select' | 'view' | 'edit'

export type ComponentModule = {
  	default: Component
}

export type AsyncComponentResolver = () => Promise<ComponentModule>

// export type RelationshipPresentationContext<TSource = unknown, TTarget = unknown> = {
export type RelationshipPresentationContext<TTarget = unknown> = {
	// source: TSource
	// definition: RelationshipDefinition<TSource, TTarget>
	source: unknown
	definition: RelationshipDefinition<TTarget>
	targetEntity: EntityConstructor<TTarget>
	mode: RelationshipMode
	props: Record<string, unknown>
}

// export type RelationshipDefinition<TSource = unknown, TTarget = unknown> = {
export type RelationshipDefinition<TTarget = unknown> = {
	name: string
	cardinality: RelationshipCardinality
	resolveEntity: AsyncEntityResolver<TTarget>
	// getValue?: (source: TSource) => unknown

	resolveComponent: AsyncComponentResolver,

	getProps?: (
		// context: RelationshipPresentationContext<TSource, TTarget>,
		context: RelationshipPresentationContext<TTarget>,
	) => Record<string, unknown>
}

export type RelationshipOpenOptions = {
	mode?: RelationshipMode
	props?: Record<string, unknown>
	overlay?: WindowOverlayOptions
}
