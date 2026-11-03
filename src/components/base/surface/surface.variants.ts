import { createVariants } from '@lib/utils'

export const surfaceVariants = createVariants({
	base: 'transition-all duration-200',

	variants: {
		variant: {
			filled: 'bg-white dark:bg-slate-900',
			outlined: 'border border-slate-200 dark:border-slate-700 bg-transparent',
			ghost: 'bg-transparent',
		},

		rounded: {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			full: 'rounded-full',
		},

		shadow: {
			none: '',
			sm: 'shadow-sm dark:shadow-slate-200/20',
			md: 'shadow dark:shadow-slate-200/25',
			lg: 'shadow-lg dark:shadow-slate-200/30',
			xl: 'shadow-xl dark:shadow-slate-200/40',
		},
	},

	defaultVariants: {
		variant: 'filled',
		rounded: 'md',
		shadow: 'sm',
	},
})
