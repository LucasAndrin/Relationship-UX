export type InputVariant =
	| 'filled'
	| 'outlined'
	| 'ghost'

export type InputSize =
	| 'sm'
	| 'md'
	| 'lg'

export type InputRounded =
	| 'none'
	| 'sm'
	| 'md'
	| 'lg'
	| 'full'

export type InputProps = {
	class?: string
	modelValue?: string | number
	variant?: InputVariant
	size?: InputSize
	rounded?: InputRounded
	type?: string
	disabled?: boolean
	readonly?: boolean
	invalid?: boolean
}
