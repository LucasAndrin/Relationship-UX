import { omit } from 'lodash';
import { defineRelationship } from '@lib/core/relationships';

import type { Responsible } from '../Responsible'

export default defineRelationship<Responsible>({
	name: 'Responsáveis',
	cardinality: 'one',

	async resolveEntity() {
		const module = await import('../Responsible');
		return module.Responsible;
	},

	// getValue(task) {
	// 	return task.responsible;
	// },

	resolveComponent() {
		return import('@/components/ResponsiblesList.vue');
	},

	getProps(context) {
		return {
			...context.props,
			...omit(context, [
				'props',
			]),
		}
	},
})
