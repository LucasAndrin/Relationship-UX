import { createVariants } from '@lib/utils'

export const checkboxVariants = createVariants({
    base: [
        'relative',
        'shrink-0',
        'appearance-none',
        'cursor-pointer',
        'border',
        'border-slate-300',
        'bg-white',
        'transition-colors',
        'duration-150',

        'checked:border-slate-900',
        'checked:bg-slate-900',

        'indeterminate:border-slate-900',
        'indeterminate:bg-slate-900',

        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-slate-900/10',

        'disabled:cursor-not-allowed',
        'disabled:opacity-50',

        'dark:border-slate-600',
        'dark:bg-slate-900',

        'dark:checked:border-slate-100',
        'dark:checked:bg-slate-100',

        'dark:indeterminate:border-slate-100',
        'dark:indeterminate:bg-slate-100',

        'dark:focus-visible:ring-white/10',
    ],

    variants: {
        type: {
            checkbox: 'rounded-sm',
            radio: 'rounded-full',
        },

        size: {
            sm: 'size-3.5',
            md: 'size-4',
            lg: 'size-5',
        },
    },

    defaultVariants: {
        type: 'checkbox',
        size: 'md',
    },
})