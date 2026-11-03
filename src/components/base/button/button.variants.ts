import { createVariants } from '@lib/utils'

export const buttonVariants = createVariants({
    base: [
        'inline-flex',
        'items-center',
        'justify-center',
        'gap-2',

        'font-medium',
        'select-none',

        'transition-colors',
        'outline-none',
        'cursor-pointer',

        'focus-visible:ring-2',
        'focus-visible:ring-offset-2',
        'focus-visible:ring-slate-500',
        'focus-visible:ring-offset-white',
        'dark:focus-visible:ring-slate-400',
        'dark:focus-visible:ring-offset-slate-950',

        'disabled:pointer-events-none',
        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
    ],

    variants: {
        variant: {
            filled: [
                'bg-slate-900',
                'text-white',

                'hover:bg-slate-800',
                'active:bg-slate-950',

                'dark:bg-slate-100',
                'dark:text-slate-900',
                'dark:hover:bg-slate-200',
                'dark:active:bg-slate-300',
            ],

            outlined: [
                'border',
                'border-slate-300',
                'bg-transparent',
                'text-slate-900',

                'hover:bg-slate-50',
                'active:bg-slate-100',

                'dark:border-slate-700',
                'dark:text-slate-100',
                'dark:hover:bg-slate-800',
                'dark:active:bg-slate-700',
            ],

            ghost: [
                'bg-transparent',
                'text-slate-900',

                'hover:bg-slate-100',
                'active:bg-slate-200',

                'dark:text-slate-100',
                'dark:hover:bg-slate-800',
                'dark:active:bg-slate-700',
            ],
        },

        size: {
            sm: [
                'h-8',
                'px-3',
                'text-sm',
            ],

            md: [
                'h-10',
                'px-4',
                'text-sm',
            ],

            lg: [
                'h-12',
                'px-6',
                'text-base',
            ],
        },

        rounded: {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            full: 'rounded-full',
        },
    },

    defaultVariants: {
        variant: 'filled',
        size: 'md',
        rounded: 'md',
    },
})