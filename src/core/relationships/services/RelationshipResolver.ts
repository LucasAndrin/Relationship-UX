import type { EntityConstructor, RelationshipDefinition, RelationshipReference } from '../types';

export class RelationshipResolver {
	private readonly definitions = new WeakMap<
		Function,
		Promise<unknown>
	>()

	private readonly entities = new WeakMap<
		RelationshipDefinition<unknown>,
		Promise<unknown>
	>()

	async resolve<TTarget = unknown>(
		reference: RelationshipReference<TTarget>,
	): Promise<RelationshipDefinition<TTarget>> {
		const cached = this.definitions.get(reference)
		if (cached) {
			return cached as Promise<RelationshipDefinition<TTarget>>
		}

		const pending = reference().then(module => {
			return module.default;
		}).catch((error: unknown) => {
			this.definitions.delete(reference)
			throw error
		});

		this.definitions.set(reference, pending)
		return pending;
  }

	async resolveEntity<TTarget = unknown>(
		definition: RelationshipDefinition<TTarget>,
	): Promise<EntityConstructor<TTarget>> {
		const key = definition as RelationshipDefinition<unknown>
		const cached = this.entities.get(key)
		if (cached) {
			return cached as Promise<EntityConstructor<TTarget>>
		}

		const pending = definition.resolveEntity().catch((error: unknown) => {
			this.entities.delete(key);
			throw error;
		})

		this.entities.set(key, pending);
		return pending;
	}
}