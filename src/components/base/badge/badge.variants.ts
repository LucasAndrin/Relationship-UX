import { createVariants } from '@lib/utils'

export const badgeVariants = createVariants({
	base: [
		'inline-flex',
		'items-center',
		'justify-center',
		'whitespace-nowrap',
		'font-medium',
		'select-none',
	],

	variants: {
		variant: {
			default: [
				'bg-slate-900',
				'text-white',
				'dark:bg-slate-100',
				'dark:text-slate-900',
			],

			secondary: [
				'bg-slate-100',
				'text-slate-900',
				'dark:bg-slate-800',
				'dark:text-slate-200',
			],

			success: [
				'bg-emerald-100',
				'text-emerald-800',
				'dark:bg-emerald-950',
				'dark:text-emerald-300',
			],

			warning: [
				'bg-amber-100',
				'text-amber-800',
				'dark:bg-amber-950',
				'dark:text-amber-300',
			],

			danger: [
				'bg-red-100',
				'text-red-800',
				'dark:bg-red-950',
				'dark:text-red-300',
			],

			info: [
				'bg-blue-100',
				'text-blue-800',
				'dark:bg-blue-950',
				'dark:text-blue-300',
			],

			outline: [
				'border',
				'border-slate-300',
				'text-slate-700',
				'dark:border-slate-700',
				'dark:text-slate-300',
			],
		},

		size: {
			sm: [
				'h-5',
				'px-2',
				'text-xs',
				'rounded',
			],

			md: [
				'h-6',
				'px-2.5',
				'text-xs',
				'rounded-md',
			],

			lg: [
				'h-7',
				'px-3',
				'text-sm',
				'rounded-md',
			],
		},
	},

	defaultVariants: {
		variant: 'default',
		size: 'md',
	},
})