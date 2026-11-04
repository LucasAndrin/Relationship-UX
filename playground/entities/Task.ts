import { BaseEntity } from '@lib/core/relationships';

export class Task extends BaseEntity {
	static relationships = {
		responsible: () => import('./relationships/HasOneResponsible'),
	}
	public id?: string;
	public title?: string;
	public description?: string;

	constructor(
		properties?: Partial<Task>
	) {
		super();
		if (properties) {
			super.hydrate(properties);
		}
	}
}
