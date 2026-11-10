<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { TABS_CONTEXT_KEY } from './context'
import type { TabProps } from './types'
import { cn } from '@lib/utils';
import { tabVariants } from './variants/tab.variants';

const props = withDefaults(defineProps<TabProps>(), {
	disabled: false,
});

const context = inject(TABS_CONTEXT_KEY);

if (!context) {
	throw new Error('[Tabs] Tab must be used inside <Tabs>.');
}

const element = ref<HTMLElement | null>(null);

const active = computed(() => context.isActive(props.value));

const classes = computed(() => {
    const variant = context.variant.value;
    const orientation = context.orientation.value;

    const stateClasses = {
        filled: active.value ? [
			'bg-white',
			'text-slate-900',
			'shadow-sm',
			'dark:bg-slate-700',
			'dark:text-slate-100',
		] : [
			'text-slate-600',
			'hover:text-slate-900',
			'dark:text-slate-400',
			'dark:hover:text-slate-100',
		],

        outlined: active.value ? [
			'border-slate-900',
			'text-slate-900',
			'dark:border-slate-100',
			'dark:text-slate-100',
		] : [
			'text-slate-500',
			'hover:text-slate-900',
			'dark:text-slate-400',
			'dark:hover:text-slate-100',
		],

        ghost: active.value ? [
			'bg-slate-100',
			'text-slate-900',
			'dark:bg-slate-800',
			'dark:text-slate-100',
		] : [
			'text-slate-600',
			'hover:bg-slate-100',
			'hover:text-slate-900',
			'dark:text-slate-400',
			'dark:hover:bg-slate-800',
			'dark:hover:text-slate-100',
		],
    };

    return cn(
        tabVariants.compose({ variant }),
        variant === 'outlined' && orientation === 'vertical' ? 'border-b-0 border-r-2' : '',
        ...stateClasses[variant],
        props.disabled && 'cursor-not-allowed opacity-50',
        !props.disabled && 'cursor-pointer',
        props.class,
    );
});

function select() {
	if (props.disabled) {
		return;
	}
	context!.selectTab(props.value);
}

function handleKeydown(event: KeyboardEvent) {
	const isHorizontal = context!.orientation.value === 'horizontal';
	const isVertical = context!.orientation.value === 'vertical';

	switch (event.key) {
		case 'Enter':
		case ' ':
			event.preventDefault();
			select();
			break;

		case 'ArrowRight':
			if (!isHorizontal) {
				return;
			}

			event.preventDefault();
			context!.focusNext(props.value);
			break;

		case 'ArrowLeft':
			if (!isHorizontal) {
				return;
			}

			event.preventDefault();
			context!.focusPrevious(props.value);
			break;

		case 'ArrowDown':
			if (!isVertical) {
				return;
			}

			event.preventDefault();
			context!.focusNext(props.value);
			break;

		case 'ArrowUp':
			if (!isVertical) {
				return;
			}

			event.preventDefault();
			context!.focusPrevious(props.value);
			break;

		case 'Home':
			event.preventDefault();
			context!.focusFirst();
			break;

		case 'End':
			event.preventDefault();
			context!.focusLast();
			break;
	}
}

onMounted(() => {
	if (!element.value) {
		return;
	}
	context.registerTab(props.value, element.value, props.disabled);
});

onBeforeUnmount(() => {
	context.unregisterTab(props.value);
});
</script>

<template>
	<button
		ref="element"
		type="button"
		role="tab"
		:aria-selected="active"
		:aria-disabled="props.disabled || undefined"
		:tabindex="active && !props.disabled ? 0 : -1"
		:disabled="props.disabled"
        :class="classes"
		@click="select"
		@keydown="handleKeydown"
	>
		<slot />
	</button>
</template>
