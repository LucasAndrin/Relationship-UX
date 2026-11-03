<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@lib/utils'
import { inputFormVariants } from './input-form.variants'
import type { InputFormProps } from './types'

const props = withDefaults(
	defineProps<InputFormProps>(),
	{
		type: 'text',
		disabled: false,
		readonly: false,
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
		inputFormVariants.compose(props),
		props.class,
		...invalidClasses,
	)
})

function handleInput(event: Event) {
	const target = event.target as HTMLInputElement

	emit('update:modelValue', target.value)
}
</script>

<template>
	<input
		:type="type"
		:value="modelValue"
		:disabled="disabled"
		:readonly="readonly"
		:aria-invalid="invalid || undefined"
		:class="classes"
		@input="handleInput"
	/>
</template>
