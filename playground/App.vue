<script setup lang="ts">
import { ref } from 'vue';
import { useWindowManager, WindowManagerRenderer } from '@lib/core/window-manager';

import {
	Tab,
	TabList,
	TabPanel,
	Tabs,
	Avatar,
	Badge,
	Button,
	Card,
	Divider,
	Spinner,
	Surface,
	Text,
	Modal,
	Popover,
	Input,
	Select,
} from '@lib/components';

import TaskForm from './components/TaskForm.vue';
import { Task } from './entities/Task';

const isOpen = ref(false);
const isPopoverOpen = ref(false);
const isShowingWindows = ref(false);

const horizontalTab = ref('overview')

const verticalTab = ref('overview')

const { open } = useWindowManager();

const task = new Task({
	id: 'task-1',
	title: 'Implementar relacionamentos',
	description: 'Testar a comunicação entre janelas.',
});
function openTaskForm() {
	open({
		title: 'Editar tarefa',
		component: TaskForm,
		props: {
			task,
		},
		size: {
			width: 560,
			height: 540,
		},
	});
}

const isDarkTheme = ref(false);
function toggleTheme() {
	isDarkTheme.value = !isDarkTheme.value;
	if (isDarkTheme.value) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
}

/**
 * Tests Select.vue
 */
const selectedFruit = ref<string|null>(null);
const fruitOptions = [
    { label: 'Maçã', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Laranja', value: 'orange' },
    { label: 'Uva', value: 'grape' },
    { label: 'Morango', value: 'strawberry' },
    { label: 'Abacaxi', value: 'pineapple', disabled: true },
];
</script>

<template>
 	<div class="p-10 transition-colors duration-200" :class="{
		'h-dvh': isShowingWindows
	}">
		<div class="mx-auto flex h-full w-full max-w-5xl flex-col gap-12">
			<header class="flex shrink-0 flex-col gap-4">
				<div class="flex items-center justify-between">
					<Text as="h1" variant="title">
						Foundation Components
					</Text>

					<div class="flex items-center gap-3">
						<Button @click="isShowingWindows = !isShowingWindows">
							{{ isShowingWindows ? 'Hide' : 'Show' }} Windows
						</Button>

						<Button @click="openTaskForm">
							Open Task Form
						</Button>

						<Button variant="outlined" @click="toggleTheme">
							{{ isDarkTheme ? 'Tema claro' : 'Tema escuro' }}
						</Button>
					</div>
				</div>

				<Text as="p" variant="body" class="text-slate-500 dark:text-slate-400">
					Playground para testes dos componentes básicos da Relationship UI.
				</Text>
			</header>

			<div v-if="isShowingWindows" class="relative min-h-0 flex-1">
				<WindowManagerRenderer/>
			</div>

			<div v-else class="mx-auto flex max-w-5xl flex-col gap-12">
				<!-- Surface -->
				<section class="flex flex-col gap-4">
					<Text
						as="h2"
						variant="subtitle"
					>
						Surface
					</Text>

					<div class="grid gap-4 md:grid-cols-3">

						<Surface
							variant="filled"
							class="p-6"
						>
							<Text>
								Filled Surface
							</Text>
						</Surface>

						<Surface
							variant="outlined"
							class="p-6"
						>
							<Text>
								Outlined Surface
							</Text>
						</Surface>

						<Surface
							variant="ghost"
							class="p-6"
						>
							<Text>
								Ghost Surface
							</Text>
						</Surface>

					</div>
				</section>


				<!-- Button -->
				<section class="flex flex-col gap-4">
					<Text
						as="h2"
						variant="subtitle"
					>
						Button
					</Text>

					<Surface class="flex flex-wrap gap-3 p-6">

						<Button
							@click="openTaskForm"
						>
							Open Task Form
						</Button>

						<Button variant="outlined">
							Outlined
						</Button>

						<Button variant="ghost">
							Ghost
						</Button>

						<Divider orientation="vertical" />

						<Button size="sm">
							Small
						</Button>

						<Button size="md">
							Medium
						</Button>

						<Button size="lg">
							Large
						</Button>

					</Surface>

					<Surface class="flex flex-wrap gap-3 p-6">
						<Button disabled>Disabled</Button>
						<Button loading>Loading</Button>
					</Surface>
				</section>


				<!-- Text -->
				<section class="flex flex-col gap-4">
					<Text
						as="h2"
						variant="subtitle"
					>
						Text
					</Text>

					<Surface class="flex flex-col gap-3 p-6">

						<Text variant="title">
							Title
						</Text>

						<Text variant="subtitle">
							Subtitle
						</Text>

						<Text variant="body">
							Body text
						</Text>

						<Text variant="caption">
							Caption text
						</Text>

					</Surface>
				</section>


				<!-- Card -->
				<section class="flex flex-col gap-4">
					<Text
						as="h2"
						variant="subtitle"
					>
						Card
					</Text>

					<div class="grid gap-4 md:grid-cols-3">

						<Card>
							<Text variant="subtitle">
								Default Card
							</Text>

							<Text class="mt-2 text-slate-500">
								Card utilizando a aparência padrão.
							</Text>
						</Card>

						<Card variant="outlined">
							<Text variant="subtitle">
								Outlined Card
							</Text>

							<Text class="mt-2 text-slate-500">
								Card com borda.
							</Text>
						</Card>

						<Card variant="ghost">
							<Text variant="subtitle">
								Ghost Card
							</Text>

							<Text class="mt-2 text-slate-500">
								Card sem superfície.
							</Text>
						</Card>

					</div>

					<Card>
						<template #header>
							<Text variant="subtitle">
								Card com Slots
							</Text>
						</template>

						<Text>
							Conteúdo principal do Card.
						</Text>

						<template #footer>
							<div class="flex justify-end gap-2">
								<Button variant="ghost">
									Cancelar
								</Button>

								<Button>
									Confirmar
								</Button>
							</div>
						</template>
					</Card>
				</section>


				<!-- Badge -->
				<section class="flex flex-col gap-4">
					<Text
						as="h2"
						variant="subtitle"
					>
						Badge
					</Text>

					<Surface class="flex flex-wrap items-center gap-3 p-6">
						<Badge>
							Default
						</Badge>
						<Badge variant="secondary">
							Secondary
						</Badge>
						<Badge variant="success">
							Success
						</Badge>
						<Badge variant="warning">
							Warning
						</Badge>
						<Badge variant="danger">
							Danger
						</Badge>
						<Badge variant="info">
							Info
						</Badge>
						<Badge variant="outline">
							Outline
						</Badge>
					</Surface>

					<Surface class="flex items-center gap-3 p-6">

						<Badge size="sm">
							Small
						</Badge>

						<Badge size="md">
							Medium
						</Badge>

						<Badge size="lg">
							Large
						</Badge>

					</Surface>
				</section>


				<!-- Avatar -->
				<section class="flex flex-col gap-4">
					<Text as="h2" variant="subtitle">
						Avatar
					</Text>

					<Surface class="flex flex-wrap items-center gap-4 p-6">
						<Avatar size="sm" fallback="LA"/>

						<Avatar size="md" fallback="LA"/>

						<Avatar size="lg" fallback="LA"/>

						<Avatar size="xl" fallback="LA"/>
					</Surface>

					<Surface class="flex items-center gap-4 p-6">
						<Avatar
							src="https://i.pravatar.cc/150?img=12"
							alt="Avatar de exemplo"
							size="lg"
							fallback="LA"
						/>

						<div class="flex flex-col">
							<Text variant="subtitle">
								Lucas Andrin
							</Text>

							<Text class="text-slate-500">
								Administrador
							</Text>
						</div>
					</Surface>
				</section>


				<!-- Spinner -->
				<section class="flex flex-col gap-4">
					<Text
						as="h2"
						variant="subtitle"
					>
						Spinner
					</Text>

					<Surface class="flex items-center gap-6 p-6">

						<Spinner size="sm" />

						<Spinner size="md" />

						<Spinner size="lg" />

					</Surface>
				</section>


				<!-- Divider -->
				<section class="flex flex-col gap-4">
					<Text
						as="h2"
						variant="subtitle"
					>
						Divider
					</Text>

					<Surface class="flex flex-col gap-6 p-6">

						<Text>
							Conteúdo acima
						</Text>

						<Divider />

						<Text>
							Conteúdo abaixo
						</Text>

					</Surface>

					<Surface class="flex h-20 items-center gap-6 p-6">

						<Text>
							Esquerda
						</Text>

						<Divider orientation="vertical" />

						<Text>
							Direita
						</Text>

					</Surface>
				</section>

				<!-- Composição -->
				<section class="flex flex-col gap-4">
					<Text
						as="h2"
						variant="subtitle"
					>
						Component Composition
					</Text>

					<Card variant="outlined">

						<template #header>
							<div class="flex items-center gap-3">

								<Avatar
									size="md"
									fallback="LA"
								/>

								<div>
									<Text variant="subtitle">
										Relationship UI
									</Text>

									<Text class="text-slate-500">
										Foundation Components
									</Text>
								</div>

							</div>
						</template>

						<div class="flex flex-col gap-4">

							<Text>
								Este exemplo combina vários
								componentes Foundation.
							</Text>

							<div class="flex gap-2">
								<Badge variant="success">
									Active
								</Badge>

								<Badge variant="info">
									Foundation
								</Badge>
							</div>

						</div>

						<template #footer>
							<div class="flex justify-end gap-2">

								<Button variant="ghost">
									Cancelar
								</Button>

								<Button>
									Continuar
								</Button>

							</div>
						</template>

					</Card>
				</section>

				<section class="flex flex-col-gap-4">
					<Button @click="isOpen = true">
						Abrir Modal
					</Button>

					<Modal v-model="isOpen">
						<div class="p-6">
							<h2 class="text-lg font-semibold">
								Olá!
							</h2>

							<p class="mt-2 text-slate-600">
								Este é nosso primeiro Modal.
							</p>

							<div class="mt-6 flex justify-end">
								<Button @click="isOpen = false">
									Fechar
								</Button>
							</div>
						</div>
					</Modal>

					<Popover
						v-model="isPopoverOpen"
						placement="bottom"
						align="start"
						variant="filled"
						size="md"
					>
						<template #trigger="{ referenceProps, toggle }">
							<Button
								v-bind="referenceProps"
								type="button"
								@click="toggle"
							>
								Abrir Popover
							</Button>
						</template>

						<div class="flex flex-col gap-2">
							<h3 class="font-semibold">
								Meu Popover
							</h3>

							<p class="text-sm text-slate-500">
								Este é um exemplo de conteúdo.
							</p>
						</div>
					</Popover>
				</section>

				<section class="flex flex-col gap-4">
					<h1 class="text-3xl font-bold">
						Tabs Playground
					</h1>

					<p class="mt-2 text-slate-600">
						Testando o sistema de Tabs.
					</p>

					<div class="mt-8 rounded-lg border bg-white">
						<Tabs v-model="horizontalTab">
							<TabList class="border-b">
								<Tab value="overview">
									Overview
								</Tab>

								<Tab value="relations">
									Relations
								</Tab>

								<Tab value="history">
									History
								</Tab>
							</TabList>

							<div class="p-6">
								<TabPanel value="overview">
									<h2 class="text-xl font-semibold">
										Overview
									</h2>

									<p class="mt-2 text-slate-600">
										Informações gerais da
										entidade.
									</p>
								</TabPanel>

								<TabPanel value="relations">
									<h2 class="text-xl font-semibold">
										Relations
									</h2>

									<p class="mt-2 text-slate-600">
										Relacionamentos dessa
										entidade.
									</p>
								</TabPanel>

								<TabPanel value="history">
									<h2 class="text-xl font-semibold">
										History
									</h2>

									<p class="mt-2 text-slate-600">
										Histórico de alterações.
									</p>
								</TabPanel>
							</div>
						</Tabs>
					</div>

					<div class="mt-6">
						<p class="text-sm text-slate-500">
							Tab ativa:
							<strong>
								{{ horizontalTab }}
							</strong>
						</p>
					</div>
				</section>

				<section class="flex flex-col gap-4">
					<div class="mt-10 rounded-lg border bg-white">
						<Tabs
							v-model="verticalTab"
							orientation="vertical"
						>
							<div class="flex">
								<TabList
									class="border-r"
								>
									<Tab value="overview">
										Overview
									</Tab>

									<Tab value="relations">
										Relations
									</Tab>

									<Tab
										value="history"
										disabled
									>
										History
									</Tab>

									<Tab value="settings">
										Settings
									</Tab>
								</TabList>

								<div class="flex-1 p-6">
									<TabPanel value="overview">
										<h2 class="text-xl font-semibold">
											Overview
										</h2>

										<p class="mt-2 text-slate-600">
											Visão geral.
										</p>
									</TabPanel>

									<TabPanel value="relations">
										<h2 class="text-xl font-semibold">
											Relations
										</h2>

										<p class="mt-2 text-slate-600">
											Relacionamentos.
										</p>
									</TabPanel>

									<TabPanel value="history">
										<h2 class="text-xl font-semibold">
											History
										</h2>
									</TabPanel>

									<TabPanel value="settings">
										<h2 class="text-xl font-semibold">
											Settings
										</h2>
									</TabPanel>
								</div>
							</div>
						</Tabs>
					</div>
				</section>

				<section class="flex flex-col gap-4">
					<Text as="h2" variant="subtitle">Form</Text>

					<Surface class="flex flex-col gap-2 p-3">
						<Select
							v-model="selectedFruit"
							:options="fruitOptions"
							placeholder="Selecione uma fruta"
							search-placeholder="Pesquisar frutas..."
							clearable
						/>

						<Input placeholder="teste" />
					</Surface>
				</section>
			</div>
		</div>
  	</div>
</template>