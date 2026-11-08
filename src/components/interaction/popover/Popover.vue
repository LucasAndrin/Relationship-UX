<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeUnmount, onMounted, ref, useAttrs, watch, type ComponentPublicInstance } from 'vue'
import { autoUpdate, flip, offset as floatingOffset, shift, useFloating, type Placement } from '@floating-ui/vue';
import { cn } from '@lib/utils'
import { popoverVariants } from './popover.variants'
import type { PopoverProps } from './types';
import { Portal } from '../primitives';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<PopoverProps>(), {
    placement: 'bottom',
    align: 'start',
    variant: 'filled',
    size: 'md',
    offset: 8,
    closeOnClickOutside: true,
    closeOnEscape: true,
    disabled: false,
});

const emit = defineEmits<{
    'update:modelValue': [value: boolean];
    open: [];
    close: [];
}>();

const attrs = useAttrs();

const internalOpen = ref(false);

const isOpen = computed(() => {
    return props.modelValue
        ?? internalOpen.value;
})

const floatingRef = ref<HTMLElement|null>(null);
const referenceRef = ref<HTMLElement|null>(null);

const contentId = `popover-${getCurrentInstance()!.uid}`

const floatingPlacement = computed<Placement>(() => {
    if (props.align === 'center') {
        return props.placement;
    }
    return `${props.placement}-${props.align}` as Placement;
});

const { floatingStyles } = useFloating(referenceRef, floatingRef, {
    strategy: 'fixed',
    placement: floatingPlacement,
    middleware: [
        floatingOffset(() => props.offset),
        flip(),
        shift({
            padding: 8,
        }),
    ],
    whileElementsMounted: autoUpdate,
});

const classes = computed(() => cn(
    popoverVariants.compose(props),
    props.class,
));

function setReference(element: Element | ComponentPublicInstance | null) {
    if (element instanceof HTMLElement) {
        referenceRef.value = element;
        return;
    }

    if (element && '$el' in element) {
        referenceRef.value = element.$el;
        return;
    }
    referenceRef.value = null;
}

const referenceProps = computed(() => ({
    ref: setReference,
    'aria-expanded': isOpen.value,
    'aria-controls': contentId,
}));

function setOpen(value: boolean) {
    if (props.disabled && value) return;
    if (props.modelValue === undefined) {
        internalOpen.value = value;
    }
    emit('update:modelValue', value);
}

function open() {
    setOpen(true);
}

function close() {
    setOpen(false);
}

function toggle() {
    setOpen(!isOpen.value);
}

function handleOutsideClick(event: PointerEvent) {
    if (!props.closeOnClickOutside || !isOpen.value) {
        return;
    }

    const target = event.target;

    if (!(target instanceof Node)) return;

    if (referenceRef.value?.contains(target) || floatingRef.value?.contains(target)) {
        return;
    }

    close();
}

function handleKeydown(event: KeyboardEvent) {
    if (props.closeOnEscape && isOpen.value && event.key === 'Escape') {
        close();
    }
}

watch(isOpen, (value, previousValue) => {
    if (value === previousValue) return;
    if (value) {
        emit('open');
    } else {
        emit('close');
    }
});

watch(() => props.disabled, disabled => {
    if (disabled) {
        close();
    }
});

onMounted(() => {
    document.addEventListener('pointerdown', handleOutsideClick);
    document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
    document.removeEventListener('pointerdown', handleOutsideClick);
    document.removeEventListener('keydown', handleKeydown);
});

defineExpose({
    open,
    close,
    toggle,
    isOpen,
});
</script>

<template>
    <slot
        name="trigger"
        :reference-props="referenceProps"
        :is-open="isOpen"
        :open="open"
        :close="close"
        :toggle="toggle"
    >
        <button
            v-bind="referenceProps"
            type="button"
            :disabled="disabled"
            @click="toggle"
        >
            Open
        </button>
    </slot>

    <Portal>
        <Transition name="popover">
            <div
                v-if="isOpen"
                :id="contentId"
                ref="floatingRef"
                v-bind="attrs"
                :style="floatingStyles"
                :class="classes"
            >
                <slot />
            </div>
        </Transition>
    </Portal>
</template>

<style scoped>
.popover-enter-active,
.popover-leave-active {
    transition: opacity 150ms ease;
}

.popover-enter-from,
.popover-leave-to {
    opacity: 0;
}
</style>