export type SelectOptionValue = string | number

export type SelectOption = {
    label: string
    value: SelectOptionValue
    disabled?: boolean
}

export type SelectVariant =
    | 'filled'
    | 'outlined'
    | 'ghost';

export type SelectSize =
    | 'sm'
    | 'md'
    | 'lg';

export type SelectRounded =
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'full';

export type SelectProps = {
    class?: string
    modelValue?: SelectOptionValue | null
    options: SelectOption[]

    placeholder?: string
    searchPlaceholder?: string
    emptyText?: string

    variant?: SelectVariant
    size?: SelectSize
    rounded?: SelectRounded

    disabled?: boolean
    clearable?: boolean
}