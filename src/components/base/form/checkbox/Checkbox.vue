<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { cn } from '@lib/utils'

import { checkboxVariants } from './checkbox.variants'
import type { CheckboxProps } from './types'

const props = withDefaults(defineProps<CheckboxProps>(), {
    type: 'checkbox',
    size: 'md',
    checked: false,
    indeterminate: false,
})

const checked = defineModel<boolean>('checked', {
    default: false,
})

const modelValue = defineModel<string | number | null>({
    default: null,
})

const inputRef = ref<HTMLInputElement | null>(null)

const classes = computed(() =>
    cn(
        checkboxVariants.compose({
            type: props.type,
            size: props.size,
        }),
        props.class,
    ),
)

const isChecked = computed(() => {
    if (props.type === 'radio') {
        return modelValue.value === props.value
    }
    return checked.value
})

watchEffect(() => {
    if (!inputRef.value) return
    inputRef.value.indeterminate = props.type === 'checkbox' && props.indeterminate
})

function handleChange(event: Event) {
    const target = event.target as HTMLInputElement
    if (props.type === 'radio') {
        modelValue.value = props.value ?? null
        return
    }
    checked.value = target.checked;
}
</script>

<template>
    <input
        ref="inputRef"
        :type="type"
        :value="value"
        :checked="isChecked"
        :class="classes"
        @change="handleChange"
    />
</template>