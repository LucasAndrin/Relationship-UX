import { createVariants } from '@lib/utils'
import { inputFormBaseClasses, inputFormVariantFillledClasses, inputFormVariantGhostClasses, inputFormVariantOutlinedClasses } from '../form.variants'

export const inputFormVariants = createVariants({
	base: inputFormBaseClasses,

	variants: {
		variant: {
			filled: inputFormVariantFillledClasses,
			outlined: inputFormVariantOutlinedClasses,
			ghost: inputFormVariantGhostClasses,
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
