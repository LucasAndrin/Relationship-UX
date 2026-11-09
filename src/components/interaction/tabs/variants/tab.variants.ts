import { createVariants } from '@lib/utils'

export const tabVariants = createVariants({
    base: [
        'inline-flex',
        'items-center',
        'justify-center',
        'gap-2',
        'whitespace-nowrap',
        'text-sm',
        'font-medium',
        'transition-colors',
        'outline-none',

        'focus-visible:ring-2',
        'focus-visible:ring-slate-400',
        'focus-visible:ring-offset-2',
        'dark:focus-visible:ring-slate-500',
        'dark:focus-visible:ring-offset-slate-900',

        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
    ],

    variants: {
        variant: {
            filled: [
                'rounded-md',
                'px-3',
                'py-2',
            ],

            outlined: [
                'border-b-2',
                'border-transparent',
                'px-4',
                'py-2',
            ],

            ghost: [
                'rounded-md',
                'px-3',
                'py-2',
            ],
        },

        active: {
            true: [],
            false: [],
        },
    },

    defaultVariants: {
        variant: 'filled',
        active: 'false',
    },
})