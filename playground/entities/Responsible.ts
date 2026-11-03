import BaseEntity from '@lib/core/relationships/types/BaseEntity';

export class Responsible extends BaseEntity {
	public id?: string;
	public name?: string;
	public email?: string;

	constructor(properties?: Partial<Responsible>) {
		super();
		if (properties) {
			super.hydrate(properties);
		}
	}
}
