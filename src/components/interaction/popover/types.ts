export type PopoverPlacement =
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'

export type PopoverAlign =
    | 'start'
    | 'center'
    | 'end'

export type PopoverVariant =
    | 'filled'
    | 'outlined'
    | 'ghost'

export type PopoverSize =
    | 'sm'
    | 'md'
    | 'lg'

export type PopoverRounded =
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'full'

export type PopoverProps = {
    modelValue?: boolean;
    class?: string;
    placement?: PopoverPlacement;
    align?: PopoverAlign;
    variant?: PopoverVariant;
    size?: PopoverSize;
    offset?: number;
    closeOnClickOutside?: boolean;
    closeOnEscape?: boolean;
    disabled?: boolean;
}