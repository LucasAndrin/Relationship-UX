<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@lib/utils'
import { inputVariants } from './input.variants'
import type { InputProps } from './types'

const props = withDefaults(
	defineProps<InputProps>(),
	{
		type: 'text',
		invalid: false,
	},
)

const emit = defineEmits<{
  	'update:modelValue': [value: string]
}>()

const classes = computed(() => cn(
	inputVariants.compose(props),
	props.class,
))

function handleInput(event: Event) {
	const target = event.target as HTMLInputElement

	emit('update:modelValue', target.value)
}
</script>

<template>
	<input
		:type="type"
		:value="modelValue"
		:aria-invalid="invalid || undefined"
		:class="classes"
		@input="handleInput"
	/>
</template>
