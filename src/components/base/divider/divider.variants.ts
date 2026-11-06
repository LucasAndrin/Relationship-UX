import { createVariants } from '@lib/utils'

export const dividerVariants = createVariants({
	base: 'shrink-0 bg-slate-200',

	variants: {
		orientation: {
			horizontal: 'h-px w-full',

			vertical: 'h-full w-px self-stretch',
		},
	},

	defaultVariants: {
		orientation: 'horizontal',
	},
})
