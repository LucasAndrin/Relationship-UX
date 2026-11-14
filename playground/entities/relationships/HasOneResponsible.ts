import { omit } from 'lodash';
import { defineRelationship } from '@lib/core/relationships';

import type { Responsible } from '../Responsible'

export default defineRelationship<Responsible>({
	name: 'Responsible',
	cardinality: 'one',

	async resolveEntity() {
		const module = await import('../Responsible');
		return module.Responsible;
	},

	resolveComponent(context) {
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
