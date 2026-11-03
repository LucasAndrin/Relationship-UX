import { createVariants } from '@lib/utils'

export const overlayVariants = createVariants({
	base: [
		'fixed',
		'inset-0',
		'z-40',
		'bg-black',
	],

	variants: {
		opacity: {
			light: 'opacity-25',
			medium: 'opacity-50',
			dark: 'opacity-75',
		},

		blur: {
			none: '',
			sm: 'backdrop-blur-sm',
			md: 'backdrop-blur-md',
			lg: 'backdrop-blur-lg',
		},
	},

	defaultVariants: {
		opacity: 'medium',
		blur: 'none',
	},
})
