export type TabsOrientation = 'horizontal' | 'vertical'

export type TabsVariant =
    | 'filled'
    | 'outlined'
    | 'ghost'

export type TabPanelVariant =
    | 'filled'
    | 'outlined'
    | 'ghost'

export type TabsProps = {
    modelValue?: string
    defaultValue?: string
    orientation?: TabsOrientation
    variant?: TabsVariant
    class?: string
}

export type TabProps = {
    value: string
    disabled?: boolean
    class?: string
}

export type TabListProps = {
    class?: string
}

export type TabPanelProps = {
    value: string
    variant?: TabPanelVariant
    class?: string
}