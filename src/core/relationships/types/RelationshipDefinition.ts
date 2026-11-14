import type { Component } from 'vue';
import type { WindowOverlayOptions } from '../../window-manager';

export type RelationshipCardinality = 'one' | 'many';

export type EntityConstructor<TEntity = unknown> = abstract new (...args: never[]) => TEntity;

export type AsyncEntityResolver<TEntity = unknown> = () => Promise<EntityConstructor<TEntity>>;

export type RelationshipPresentationContext<TTarget = unknown> = {
	props: Record<string, unknown>
	source: unknown
	definition: RelationshipDefinition<TTarget>
	targetEntity: EntityConstructor<TTarget>
}

export type RelationshipDefinition<TTarget = unknown> = {
	name: string
	cardinality: RelationshipCardinality
	resolveEntity: AsyncEntityResolver<TTarget>

	resolveComponent(context: RelationshipPresentationContext<TTarget>): Promise<Component>,

	getProps?: (
		context: RelationshipPresentationContext<TTarget>,
	) => Record<string, unknown>
}
