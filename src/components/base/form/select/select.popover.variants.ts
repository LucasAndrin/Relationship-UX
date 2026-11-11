
import { createVariants } from '@lib/utils'

export const selectPopoverVariants = createVariants({
    base: [
        'max-h-60',
        'overflow-y-auto',
        'rounded-md',
        'border',
        'border-slate-200',
        'bg-white',
        'p-1',
        'shadow-lg',

        'dark:border-slate-700',
        'dark:bg-slate-900',
    ],
    variants: {

    },
});
