import { createVariants } from '@lib/utils'

export const tabsVariants = createVariants({
    base: [
        'flex',
        'relative',
        'min-w-0',
    ],
    variants: {
        orientation: {
            horizontal: 'flex-col',
            vertical: 'flex-row',
        },
    }
});