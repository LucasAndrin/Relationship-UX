import { createVariants } from '@lib/utils'

export const textVariants = createVariants({
	base: 'm-0',

	variants: {
		variant: {
			body: 'text-base',
			title: 'text-2xl font-semibold',
			subtitle: 'text-lg font-medium',
			caption: 'text-sm',
			label: 'text-sm font-medium',
			overline: 'text-xs font-semibold uppercase tracking-wide',
		},

		weight: {
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},

		color: {
			default: 'text-gray-900 dark:text-gray-100',
			muted: 'text-gray-500 dark:text-gray-400',
			primary: 'text-blue-600 dark:text-blue-400',
			danger: 'text-red-600 dark:text-red-400',
			success: 'text-green-600 dark:text-green-400',
		},

		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
			justify: 'text-justify',
		},
	},

	defaultVariants: {
		variant: 'body',
		weight: 'normal',
		color: 'default',
		align: 'left',
	},
})
