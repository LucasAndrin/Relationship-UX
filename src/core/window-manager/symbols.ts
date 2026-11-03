import type { InjectionKey } from 'vue'
import type { WindowManagerService } from './services/WindowManagerService'

export const WINDOW_MANAGER_SERVICE_KEY = Symbol('relationship-ui:window-manager') as InjectionKey<WindowManagerService>;
