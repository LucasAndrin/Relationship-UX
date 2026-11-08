<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@lib/utils'
import type { TextareaProps } from './types'
import { textareaVariants } from './textarea.variants'

const props = withDefaults(
	defineProps<TextareaProps>(),
	{
		invalid: false,
	},
)

const emit = defineEmits<{
  	'update:modelValue': [value: string]
}>()

const classes = computed(() => {
	const invalidClasses = [];
	if (props.invalid) {
		invalidClasses.push(...[
			'border-red-500',
			'focus-visible:border-red-500',
			'focus-visible:ring-red-500/20',
		]);
	}
	return cn(
		textareaVariants.compose(props),
		props.class,
		...invalidClasses,
	)
})

function handleInput(event: Event) {
	const target = event.target as HTMLTextAreaElement

	emit('update:modelValue', target.value)
}
</script>

<template>
	<textarea
		:value="modelValue"
		:aria-invalid="invalid || undefined"
		:class="classes"
		@input="handleInput"
	/>
</template>
