export abstract class BaseEntity {
	static create<T extends BaseEntity>(
		this: new () => T,
		attributes?: Partial<T>
	): T {
		const instance = new this();
		if (attributes) {
			instance.hydrate(attributes);
		}
		return instance;
	}

	static createMany<T extends BaseEntity>(
		this: new () => T,
		properties: Partial<T>[]
	): T[] {
		return properties.map(item => {
			const instance = new this();
			instance.hydrate(item);
			return instance;
		});
	}

	hydrate<T extends BaseEntity>(attributes: Partial<T>): void {
        Object.assign(this, attributes);
    }
}
