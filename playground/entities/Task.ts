import type { Responsible } from './Responsible'

export class Task {
	static relationships = {
		responsible: () => import('./relationships/HasOneResponsible'),
	}

	constructor(
		public id: string,
		public title: string,
		public description = '',
	) {}
}
