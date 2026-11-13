export type SelectOptionValue = string | number | object

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
    modelValue?: SelectOptionValue | SelectOptionValue[] | null
    options: SelectOption[]

    placeholder?: string
    searchPlaceholder?: string
    emptyText?: string

    variant?: SelectVariant
    rounded?: SelectRounded
    size?: SelectSize

    invalid?: boolean
    disabled?: boolean
    multiple?: boolean
    clearable?: boolean
}