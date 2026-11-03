import { createVariants } from '@lib/utils'

export const cardVariants = createVariants({
	base: [
		'rounded-lg',
		'p-6',
	],

	variants: {
		variant: {
			default: [
				'bg-white',
				'shadow-sm',
				'dark:bg-slate-900',
				'dark:shadow-slate-200/20'
			],

			outlined: [
				'border',
				'border-slate-200',
				'bg-white',
				'dark:border-slate-700',
				'dark:bg-slate-900'
			],

			ghost: [
				'bg-transparent',
			],
		},
	},

	defaultVariants: {
		variant: 'default',
	},
})
