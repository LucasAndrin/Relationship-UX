import type { App } from 'vue'

import { ComponentStackService } from './services/ComponentStackService'
import { COMPONENT_STACK_KEY } from './symbols'

import ComponentStackRenderer from './renderer/ComponentStackRenderer.vue'

export function createComponentStack() {
	return {
		install(app: App) {
			const service = new ComponentStackService();
			app.provide(COMPONENT_STACK_KEY, service);
			app.component('ComponentStackRenderer', ComponentStackRenderer);
		}
	}
}
