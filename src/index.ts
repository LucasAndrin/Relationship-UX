import './main.css';

import { inject, type App } from 'vue'
import { createComponentStack } from './core/component-stack';
import { createWindowManager } from './core/window-manager';
import { createRelationships, RELATIONSHIP_SERVICE_KEY, RelationshipService } from './core/relationships';

export function createRelationshipUX() {
	return {
		install(app: App) {
			app.use(createComponentStack());
			app.use(createWindowManager());
			app.use(createRelationships());
			app.runWithContext(() => {
				const relationships = inject<RelationshipService>(RELATIONSHIP_SERVICE_KEY);
				if (!relationships) {
					throw new Error('RelationshipService was not provided.');
				}
			});
		},
	};
}