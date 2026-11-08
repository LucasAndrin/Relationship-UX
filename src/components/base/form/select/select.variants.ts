import { createVariants } from '@lib/utils'

import {
    formControlBaseClasses,
    inputVariantFilledClasses,
    inputVariantGhostClasses,
    inputVariantOutlinedClasses,
} from '../form.variants'

export const selectVariants = createVariants({
    base: [
        ...formControlBaseClasses,

        'flex',
        'items-center',
        'justify-between',
        'gap-2',

        'text-left',
        'cursor-pointer',
    ],

    variants: {
        variant: {
            filled: inputVariantFilledClasses,
            outlined: inputVariantOutlinedClasses,
            ghost: inputVariantGhostClasses,
        },

        size: {
            sm: [
                'min-h-8',
                'px-3',
                'text-sm',
            ],

            md: [
                'min-h-10',
                'px-3',
                'text-sm',
            ],

            lg: [
                'min-h-12',
                'px-4',
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
        variant: 'outlined',
        size: 'md',
        rounded: 'md',
    },
})