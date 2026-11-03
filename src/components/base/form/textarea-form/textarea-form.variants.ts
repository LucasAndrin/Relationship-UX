import { createVariants } from '@lib/utils'
import { inputFormBaseClasses, inputFormVariantFillledClasses, inputFormVariantGhostClasses, inputFormVariantOutlinedClasses } from '../form.variants';

export const textareaFormVariants = createVariants({
  base: [
		...inputFormBaseClasses,
		'resize-y',
  ],

  variants: {
		variant: {
			filled: inputFormVariantFillledClasses,

			outlined: inputFormVariantOutlinedClasses,

			ghost: inputFormVariantGhostClasses,
		},

		size: {
			sm: [
				'min-h-16',
				'px-3',
				'py-2',
				'text-sm',
			],

			md: [
				'min-h-24',
				'px-3',
				'py-2',
				'text-sm',
			],

			lg: [
				'min-h-32',
				'px-4',
				'py-3',
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
