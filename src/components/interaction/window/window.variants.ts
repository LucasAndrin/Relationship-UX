import { createVariants } from '@lib/utils'

export const windowVariants = createVariants({
    base: [
        'absolute',
        'flex',
        'flex-col',
        'overflow-hidden',
        'transition-colors',
        'duration-200',
    ],

    variants: {
        variant: {
            filled: [
                'border',
                'border-slate-200',
                'bg-white',

                'dark:border-slate-700',
                'dark:bg-slate-900',
                'shadow-xl'
            ],

            outlined: [
                'border',
                'border-slate-200',
                'bg-white',

                'dark:border-slate-700',
                'dark:bg-slate-900',
            ],

            ghost: [
                'border',
                'border-transparent',
                'bg-transparent',
            ],
        },

        rounded: {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            full: 'rounded-2xl',
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
        shadow: 'md',
    },
});