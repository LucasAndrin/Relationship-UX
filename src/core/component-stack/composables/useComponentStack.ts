import { inject } from 'vue'
import { COMPONENT_STACK_KEY } from '../symbols'

export function useComponentStack() {
    const stack = inject(COMPONENT_STACK_KEY)
    if (!stack) {
        throw new Error('ComponentStackService was not installed.');
    }
    return stack
}
