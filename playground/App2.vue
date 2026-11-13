<script setup lang="ts">
import { ref } from 'vue';
import {
	useWindowManager,
	WindowManagerRenderer
} from '@lib/core/window-manager';
import { Button, Text } from '@lib/components';
import MsgComponent from './components/MsgComponent.vue';

const isDarkTheme = ref(false);
function toggleTheme() {
	isDarkTheme.value = !isDarkTheme.value;
	if (isDarkTheme.value) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
}

const { open } = useWindowManager();

function openMessage() {
	open({
		title: 'Alerta',
		component: MsgComponent,
		props: {
			message: 'Hello World',
		},
		size: {
			width: 560,
			height: 540,
		},
	});
}
</script>

<template>
 	<div class="p-10 transition-colors duration-200 h-dvh">
		<div class="mx-auto flex h-full w-full max-w-5xl flex-col gap-12">
			<header class="flex shrink-0 flex-col gap-4">
				<div class="flex items-center justify-between">
					<Text as="h1" variant="title">Window Components</Text>

					<div class="flex items-center gap-3">
						<Button @click="openMessage">Abrir Mensagem</Button>

						<Button variant="outlined" @click="toggleTheme">
							{{ isDarkTheme ? 'Tema claro' : 'Tema escuro' }}
						</Button>
					</div>
				</div>
			</header>

			<div class="relative min-h-0 flex-1">
				<WindowManagerRenderer variant="outlined"/>
			</div>
		</div>
  	</div>
</template>