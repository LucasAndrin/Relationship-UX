import type { InjectionKey } from 'vue'
import type { ComponentStackService } from './services/ComponentStackService';

export const COMPONENT_STACK_KEY = Symbol('relationship-ui:component-stack') as InjectionKey<ComponentStackService>
