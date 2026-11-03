export type DialogSize =
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| 'full'

export type DialogProps = {
	modelValue?: boolean
	size?: DialogSize
	closeOnOverlay?: boolean
	closeOnEscape?: boolean
	locked?: boolean
	scrollLock?: boolean
	class?: string
}
