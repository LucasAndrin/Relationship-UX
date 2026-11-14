<script setup lang="ts">
import { ref } from 'vue';
import {
	useWindowManager,
	WindowManagerRenderer
} from 'relationship-ux/core/window-manager';
import { Button, Text } from 'relationship-ux/components';
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

const { windows, open, focus } = useWindowManager();

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
		overlay: {
			enabled: true,
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

						{{ windows.length }}
					</div>
				</div>

				<div class="flex items-center gap-3">
					<Button v-for="window in windows" :key="window.id"
						variant="outlined"
						@click="focus(window.id)"
					>
						{{ window.title }}
					</Button>
				</div>
			</header>

			<div class="relative min-h-0 flex-1">
				<WindowManagerRenderer/>
			</div>
		</div>
  	</div>
</template>