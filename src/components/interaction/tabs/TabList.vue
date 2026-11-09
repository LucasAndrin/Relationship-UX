<script setup lang="ts">
import { computed, inject } from 'vue';
import { TABS_CONTEXT_KEY } from './context';
import type { TabListProps } from './types';
import { cn } from '@lib/utils';
import { tabListVariants } from './variants/tab-list.variants';

const props = defineProps<TabListProps>();

const context = inject(TABS_CONTEXT_KEY);
if (!context) {
	throw new Error('[Tabs] TabList must be used inside <Tabs>.');
}

const classes = computed(() => cn(
	tabListVariants.compose({
		orientation: context.orientation.value,
		variant: context.variant.value,
	}),
	context.orientation.value === 'vertical' && context.variant.value === 'outlined' ? 'border-b-0 border-l' : '',
    props.class,
))
</script>

<template>
	<div
		role="tablist"
		:aria-orientation="context.orientation.value"
		:class="classes"
	>
		<slot />
	</div>
</template>
