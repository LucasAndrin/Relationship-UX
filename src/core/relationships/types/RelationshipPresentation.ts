import type { Component } from 'vue';
// import type { RelationshipDefinition } from './RelationshipDefinition';
import type { RelationshipPresentationContext } from './RelationshipDefinition';

export type RelationshipComponentModule = {
	default: Component;
}

export type RelationshipComponentLoader = () => Promise<RelationshipComponentModule>;

// export type RelationshipPresentationContext<TSource = unknown, TTarget = unknown> = {
// 	source: TSource;
// 	definition: RelationshipDefinition<TTarget>;
// }

export type RelationshipPresentation<TSource = unknown, TTarget = unknown> = {
	title?: string;
	resolveComponent: RelationshipComponentLoader;
	getProps?: (context: RelationshipPresentationContext<TTarget>) => Record<string, unknown>;
	// getProps?: (context: RelationshipPresentationContext<TSource, TTarget>) => Record<string, unknown>;
}
