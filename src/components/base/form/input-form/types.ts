export type InputFormVariant =
	| 'filled'
	| 'outlined'
	| 'ghost'

export type InputFormSize =
	| 'sm'
	| 'md'
	| 'lg'

export type InputFormRounded =
	| 'none'
	| 'sm'
	| 'md'
	| 'lg'
	| 'full'

export type InputFormProps = {
	class?: string

	modelValue?: string | number

	variant?: InputFormVariant

	size?: InputFormSize

	rounded?: InputFormRounded

	type?: string

	disabled?: boolean

	readonly?: boolean

	invalid?: boolean
}
