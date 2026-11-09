import { createVariants } from '@lib/utils'

export const tabPanelVariants = createVariants({
    base: [
        'min-w-0',
        'outline-none',
    ],

    variants: {
        variant: {
            filled: [
                'pt-4',
                'text-slate-700',

                'dark:text-slate-200',
            ],

            outlined: [
                'mt-3',
                'rounded-lg',
                'border',
                'border-slate-200',
                'bg-white',
                'p-4',

                'dark:border-slate-700',
                'dark:bg-slate-900',
                'dark:text-slate-200',
            ],

            ghost: [
                'pt-2',
                'bg-transparent',
                'text-slate-700',

                'dark:text-slate-200',
            ],
        },
    },

    defaultVariants: {
        variant: 'filled',
    },
})