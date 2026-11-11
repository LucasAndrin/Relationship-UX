export type CheckboxValue = unknown;

export type CheckboxType = 'checkbox' | 'radio'

export type CheckboxSize = 'sm' | 'md' | 'lg'

export type CheckboxProps = {
    modelValue?: CheckboxValue
    type?: CheckboxType
    size?: CheckboxSize
    value?: string | number
    class?: string
    checked?: boolean
    indeterminate?: boolean
}