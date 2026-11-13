<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, ref, useAttrs, watch, type ClassValue } from 'vue'
import { cn } from '@lib/utils'
import { selectVariants } from './select.variants'
import type { SelectOption, SelectOptionValue, SelectProps } from './types';
import Popover from '@lib/components/interaction/popover/Popover.vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<SelectProps>(), {
    modelValue: null,
    placeholder: 'Selecione uma opção',
    searchPlaceholder: 'Pesquisar...',
    emptyText: 'Nenhuma opção encontrada.',
    variant: 'outlined',
    size: 'md',
    rounded: 'md',
    disabled: false,
    clearable: false,
    multiple: false,
});

const emit = defineEmits<{
    'update:modelValue': [value: SelectOptionValue | SelectOptionValue[] | null]
    change: [option: SelectOption | SelectOption[] | null]
}>();

const attrs = useAttrs();

const isPopoverOpen = ref(false);
const search = ref('');
const activeIndex = ref(-1);
const searchInputRef = ref<HTMLInputElement | null>(null);

const instanceId = getCurrentInstance()!.uid;
const listboxId = `select-listbox-${instanceId}`;

const selectedValues = computed<SelectOptionValue[]>(() => {
    if (Array.isArray(props.modelValue)) {
        return props.modelValue;
    }
    return props.modelValue != null ? [props.modelValue] : [];
});

const selectedOptions = computed(() => {
    return props.options.filter(option =>
        selectedValues.value.includes(option.value)
    );
});

const displayValue = computed(() => {
    return selectedOptions.value.map(option => option.label).join(', ');
});

function optionIsSelected(option: SelectOption) {
    return selectedValues.value.includes(option.value);
}

const filteredOptions = computed(() => {
    const query = normalize(search.value.trim());

    if (!query) return props.options;

    return props.options.filter(option => normalize(option.label).includes(query));
});

function normalize(value: string) {
    return value.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase();
}

const classes = computed(() => cn(
    selectVariants.compose(props),
    props.class,
));

function firstEnabledIndex() {
    return filteredOptions.value.findIndex(option => !option.disabled)
}

function toggleOption(option: SelectOption) {
    if (option.disabled) return;

    if (props.multiple) {
        const values = [...selectedValues.value];
        const index = values.indexOf(option.value);
        if (index >= 0) {
            values.splice(index, 1);
        } else {
            values.push(option.value);
        }

        const options = props.options.filter(item => values.includes(item.value));

        emit('update:modelValue', values);
        emit('change', options);
    } else {
        emit('update:modelValue', option.value);
        emit('change', option);
        isPopoverOpen.value = false;
    }
}

function clearSelection() {
    if (props.multiple) {
        emit('update:modelValue', []);
        emit('change', []);
    } else {
        emit('update:modelValue', null);
        emit('change', null);
    }
}

function moveActive(direction: 1 | -1) {
    const options = filteredOptions.value;
    if (!options.length) {
        activeIndex.value = -1;
        return;
    }

    let index = activeIndex.value;
    for (let i = 0; i < options.length; i++) {
        index = (index + direction + options.length) % options.length;
        if (!options[index]!.disabled) {
            activeIndex.value = index;
            return;
        }
    }
}

function handleSearchKeydown(event: KeyboardEvent) {
    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            moveActive(1);
            break;

        case 'ArrowUp':
            event.preventDefault();
            moveActive(-1);
            break;

        case 'Enter': {
            event.preventDefault();
            const option = filteredOptions.value[activeIndex.value];
            if (option) {
                toggleOption(option);
            }
            break;
        }

        case 'Home':
            event.preventDefault();
            activeIndex.value = firstEnabledIndex();
            break;

        case 'End': {
            event.preventDefault();
            for (let i = filteredOptions.value.length - 1; i >= 0; i--) {
                if (!filteredOptions.value[i]!.disabled) {
                    activeIndex.value = i;
                    break;
                }
            }
            break;
        }
    }
}

watch(search, () => {
    activeIndex.value = firstEnabledIndex();
});

watch(isPopoverOpen, async open => {
    if (open) {
        activeIndex.value = firstEnabledIndex();

        await nextTick();
        searchInputRef.value?.focus();
        return;
    }

    search.value = '';
    activeIndex.value = -1;
});
</script>

<template>
    <Popover
        v-model="isPopoverOpen"
        placement="bottom"
        align="start"
        :variant="variant"
        :size="size"
        :disabled="disabled"
        close-on-click-outside
        close-on-escape
        class="w-72"
    >
        <template #trigger="{ referenceProps, isOpen, toggle }">
            <button
                v-bind="{ ...attrs, ...referenceProps }"
                type="button"
                :disabled="disabled"
                :aria-haspopup="'listbox'"
                :aria-expanded="isOpen"
                :class="classes"
                @click="toggle"
            >
                <span
                    class="min-w-0 flex-1 truncate text-left"
                    :class="{ 'text-slate-400 dark:text-slate-500': !selectedOptions.length }"
                >
                    {{ displayValue || placeholder }}
                </span>

                <span class="flex shrink-0 items-center gap-2">
                    <span
                        v-if="clearable && selectedOptions.length"
                        class="cursor-pointer text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                        role="button"
                        aria-label="Limpar seleção"
                        @click.stop="clearSelection"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            class="size-4"
                        >
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="size-4 shrink-0 text-slate-400 transition-transform"
                        :class="{ 'rotate-180': isOpen }"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </span>
            </button>
        </template>

        <div class="flex flex-col gap-2">
            <!-- Search -->
            <div class="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>

                <input
                    ref="searchInputRef"
                    v-model="search"
                    type="text"
                    role="combobox"
                    aria-autocomplete="list"
                    :aria-controls="listboxId"
                    :aria-expanded="isPopoverOpen"
                    :aria-activedescendant="activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined"
                    :placeholder="searchPlaceholder"
                    class="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/10 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500 dark:focus:bg-slate-800 dark:focus:ring-white/10"
                    @keydown="handleSearchKeydown"
                />
            </div>

            <!-- Options -->
            <div
                :id="listboxId"
                role="listbox"
                :aria-multiselectable="multiple || undefined"
                class="max-h-60 overflow-y-auto"
            >
                <template v-if="filteredOptions.length">
                    <button
                        v-for="(option, index) in filteredOptions"
                        :id="`${listboxId}-option-${index}`"
                        :key="index"
                        type="button"
                        role="option"
                        :disabled="option.disabled"
                        :aria-selected="optionIsSelected(option)"
                        class="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                        :class="[
                            optionIsSelected(option)
                                ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100'
                                : 'text-slate-700 dark:text-slate-200',

                            activeIndex === index
                                ? 'bg-slate-100 dark:bg-slate-700'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800',
                        ]"
                        @mouseenter="activeIndex = index"
                        @click="toggleOption(option)"
                    >
                        <span class="truncate">
                            {{ option.label }}
                        </span>

                        <svg v-if="optionIsSelected(option)"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            class="size-4 shrink-0"
                        >
                            <path d="m5 12 4 4L19 6" />
                        </svg>
                    </button>
                </template>

                <p v-else class="px-3 py-4 text-center text-sm text-slate-400">
                    {{ emptyText }}
                </p>
            </div>
        </div>
    </Popover>
</template>