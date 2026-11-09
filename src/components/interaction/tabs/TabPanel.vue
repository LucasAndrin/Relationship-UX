<script setup lang="ts">
import { computed, inject } from 'vue';
import { TABS_CONTEXT_KEY } from './context';
import type { TabPanelProps } from './types';
import { tabPanelVariants } from './variants/tab-panel.variants';
import { cn } from '@lib/utils';

const props = withDefaults(defineProps<TabPanelProps>(), {
	variant: 'filled',
});

const context = inject(TABS_CONTEXT_KEY);
if (!context) {
	throw new Error('[Tabs] TabPanel must be used inside <Tabs>.');
}

const active = computed(() => context.isActive(props.value));

const classes = computed(() => cn(
	tabPanelVariants.compose({
		variant: props.variant,
	}),
	props.class,
))
</script>

<template>
	<div v-if="active" role="tabpanel" :class="classes" tabindex="0">
		<slot />
	</div>
</template>
