import type { Ref } from 'vue';

export type FocusTrapProps = {
	active?: boolean
	restoreFocus?: boolean
	initialFocus?: 'first' | 'container'
}

export type FocusTrapOptions = {
	active: Ref<boolean>
	restoreFocus?: boolean
	initialFocus?: 'first' | 'container'
}
