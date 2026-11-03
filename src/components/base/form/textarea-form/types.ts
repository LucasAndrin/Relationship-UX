export type TextareaFormVariant =
	| 'filled'
	| 'outlined'
	| 'ghost'

export type TextareaFormSize =
	| 'sm'
	| 'md'
	| 'lg'

export type TextareaFormRounded =
	| 'none'
	| 'sm'
	| 'md'
	| 'lg'
	| 'full'

export type TextareaFormProps = {
	class?: string
	modelValue?: string | number
	variant?: TextareaFormVariant
	size?: TextareaFormSize
	rounded?: InputFormRounded
	invalid?: boolean
}
