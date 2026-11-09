import { createVariants } from '@lib/utils'

export const tabListVariants = createVariants({
    base: [
        'flex',
        'gap-1',
    ],

    variants: {
        orientation: {
            horizontal: 'flex-row',
            vertical: 'flex-col',
        },

        variant: {
            filled: [
                'rounded-lg',
                'bg-slate-100',
                'p-1',

                'dark:bg-slate-800',
            ],

            outlined: [
                'border-b',
                'border-slate-200',

                'dark:border-slate-700',
            ],

            ghost: [
                'bg-transparent',
            ],
        },
    },

    defaultVariants: {
        orientation: 'horizontal',
        variant: 'filled',
    },
})