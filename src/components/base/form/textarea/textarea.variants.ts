import { createVariants } from '@lib/utils';
import { inputBaseClasses, inputVariantFilledClasses, inputVariantGhostClasses, inputVariantOutlinedClasses } from '../form.variants';

export const textareaVariants = createVariants({
    base: [
        ...inputBaseClasses,
        'resize-y',
    ],

    variants: {
        variant: {
            filled: inputVariantFilledClasses,
            outlined: inputVariantOutlinedClasses,
            ghost: inputVariantGhostClasses,
        },

        size: {
            sm: [
                'min-h-16',
                'px-3',
                'py-2',
                'text-sm',
            ],

            md: [
                'min-h-24',
                'px-3',
                'py-2',
                'text-sm',
            ],

            lg: [
                'min-h-32',
                'px-4',
                'py-3',
                'text-base',
            ],
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
        variant: 'outlined',
        size: 'md',
        rounded: 'md',
    },
});