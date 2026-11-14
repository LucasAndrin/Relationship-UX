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

	async resolveComponent(context) {
		const module = await import('@/components/ResponsiblesList.vue');
		return module.default;
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
