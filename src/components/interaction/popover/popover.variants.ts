
import { createVariants } from '@lib/utils'

export const popoverVariants = createVariants({
    base: [
        'z-50',
        'overflow-auto',
        'outline-none',
        'bg-white',
        'text-slate-900',
        'shadow-lg',

        'dark:bg-slate-900',
        'dark:text-slate-100',
    ],

    variants: {
        variant: {
            filled: [
                'border',
                'border-slate-200',

                'dark:border-slate-800',
            ],
            outlined: [
                'border',
                'border-slate-300',
                'bg-white',

                'dark:border-slate-700',
                'dark:bg-slate-950',
            ],
            ghost: [
                'border-transparent',
                'bg-transparent',
                'shadow-none',
            ],
        },
        size: {
            sm: ['p-2', 'text-sm'],
            md: ['p-3','text-sm'],
            lg: ['p-4', 'text-base'],
        },
        rounded: {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            full: 'rounded-2xl',
        },
    },

    defaultVariants: {
        variant: 'filled',
        size: 'md',
        rounded: 'md',
    },
})
