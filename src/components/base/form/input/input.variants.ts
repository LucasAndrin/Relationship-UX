import { createVariants } from '@lib/utils'
import { inputBaseClasses, inputVariantFillledClasses, inputVariantGhostClasses, inputVariantOutlinedClasses } from '../form.variants'

export const inputVariants = createVariants({
	base: inputBaseClasses,

	variants: {
		variant: {
			filled: inputVariantFillledClasses,
			outlined: inputVariantOutlinedClasses,
			ghost: inputVariantGhostClasses,
		},

		size: {
			sm: [
				'h-8',
				'px-3',
				'text-sm',
			],

			md: [
				'h-10',
				'px-3',
				'text-sm',
			],

			lg: [
				'h-12',
				'px-4',
				'text-base',
			],
		},

		rounded: {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			full: 'rounded-full',
		},
	},

	defaultVariants: {
		variant: 'outlined',
		size: 'md',
		rounded: 'md',
	},
})
