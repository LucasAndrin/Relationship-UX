export type TextareaVariant =
	| 'filled'
	| 'outlined'
	| 'ghost'

export type TextareaSize =
	| 'sm'
	| 'md'
	| 'lg'

export type TextareaRounded =
	| 'none'
	| 'sm'
	| 'md'
	| 'lg'
	| 'full'

export type TextareaProps = {
	class?: string
	modelValue?: string | number
	variant?: TextareaVariant
	size?: TextareaSize
	rounded?: TextareaRounded
	invalid?: boolean
}
