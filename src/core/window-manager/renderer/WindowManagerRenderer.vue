<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { WindowId, WindowPosition, WindowSize } from '../types'
import { useWindowManager } from '../composables/useWindowManager'
import Window from '@lib/components/interaction/window/Window.vue'
import Overlay from '@lib/components/interaction/primitives/overlay/Overlay.vue'

const {
    windows,
    focus,
	move,
    close,
    minimize,
    maximize,
    restore,
	resize,
} = useWindowManager()

function handleFocus(id: WindowId) {
    focus(id)
}

function handleMove(id: WindowId, position: WindowPosition) {
	move(id, position);
}

function handleClose(id: WindowId) {
    close(id)
}

function handleMinimize(id: WindowId) {
    minimize(id)
}

function handleMaximize(id: WindowId) {
    maximize(id)
}

function handleRestore(id: WindowId) {
    restore(id)
}

function handleResize(id: WindowId, size: WindowSize, position: WindowPosition) {
    resize(id, size, position)
}

const overlayWindow = computed(() => {
	return windows.value.filter(window =>
		window.overlay?.enabled && !window.minimized
	).sort((a, b) => b.zIndex - a.zIndex)[0] ?? null;
});

function onClickOverlayWindow() {
	if (!overlayWindow.value) {
		return;
	}
	close(overlayWindow.value.id);
}

const renderer = ref<HTMLElement|null>(null)

const bounds = ref({ width: 0, height: 0 });

let resizeObserver: ResizeObserver|null = null;

onMounted(() => {
	if (!renderer.value) return
	function updateBounds() {
		if (!renderer.value) return
		bounds.value = {
			width: renderer.value.clientWidth,
			height: renderer.value.clientHeight,
		}
	}

	updateBounds();
	resizeObserver = new ResizeObserver(updateBounds);
	resizeObserver.observe(renderer.value);
})

onBeforeUnmount(() => {
	resizeObserver?.disconnect();
})
</script>

<template>
	<div ref="renderer" class="relative h-full w-full overflow-hidden">
		<Overlay
            v-if="overlayWindow"
            :opacity="overlayWindow.overlay?.opacity"
            :blur="overlayWindow.overlay?.blur"
            :close-on-click="overlayWindow.overlay?.closeOnClick"
            class="absolute!"
            :style="{ zIndex: overlayWindow.zIndex }"
            @click="onClickOverlayWindow"
        />

        <Window
            v-for="window in windows"
            :key="window.id"
            :title="window.title"
            :position="window.position"
            :size="window.size"
            :z-index="window.zIndex"
            :minimized="window.minimized"
            :maximized="window.maximized"
			:bounds="bounds"
            @focus="handleFocus(window.id)"
			@move="handleMove(window.id, $event)"
            @close="handleClose(window.id)"
            @minimize="handleMinimize(window.id)"
            @maximize="handleMaximize(window.id)"
            @restore="handleRestore(window.id)"
			@resize="(size, position) => handleResize(window.id, size, position)"
        >
			<KeepAlive>
				<component :is="window.component" :key="window.id" v-bind="window.props"/>
			</KeepAlive>
        </Window>
    </div>
</template>
