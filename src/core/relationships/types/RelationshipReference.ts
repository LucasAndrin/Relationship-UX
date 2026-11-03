import type { RelationshipDefinition } from './RelationshipDefinition'

export type RelationshipDefinitionModule<TTarget = unknown> = {
  	default: RelationshipDefinition<TTarget>
}

export type RelationshipDefinitionLoader<TTarget = unknown> = () => Promise<RelationshipDefinitionModule<TTarget>>

export type RelationshipReference<TTarget = unknown> = RelationshipDefinitionLoader<TTarget>
