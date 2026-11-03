import type { Responsible } from './Responsible'

export class Task {
	static relationships = {
		responsible: () => import('./relationships/TaskResponsibleRelationship'),
	}

	constructor(
		public id: string,
		public title: string,
		public description = '',
		public responsible: Responsible | null = null,
	) {}
}
