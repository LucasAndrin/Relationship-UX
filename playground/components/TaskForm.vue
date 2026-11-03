<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Task } from '../entities/Task'
import type { Responsible } from '../entities/Responsible'
import { useRelationshipService } from '@lib/core/relationships';
import { Button, InputForm, TextareaForm } from '@lib/components';

const props = defineProps<{
  	task: Task
}>()

const ignoreResponsibleStatus = ref(false);
const relationshipService = useRelationshipService();

const form = reactive({
	title: props.task.title,
	description: props.task.description,
	responsible: props.task.responsible,
});

async function selectResponsible() {
	await relationshipService.open(props.task, 'responsible', {
		mode: 'select',
		props: {
			ignoreResponsibleStatus,
			onSelect: (responsibles: Responsible[]) => {
				form.responsible = responsibles.length ? responsibles[0] : null
			},
		},
		overlay: {
			enabled: true,
			blur: 'sm',
			closeOnClick: true,
		}
	})
}

function saveTask() {
	// props.task.title = form.title
	// props.task.description = form.description
	// props.task.responsible = form.responsible

	console.log('Task saved:', form)
}
</script>

<template>
  	<form class="flex h-full flex-col gap-5 p-5" @submit.prevent="saveTask">
		<header>
			<h1 class="text-xl font-semibold dark:text-slate-50">Editar tarefa</h1>
			<p class="text-sm text-slate-500 dark:text-slate-300">
				Preencha os dados e escolha um responsável.
			</p>
		</header>

		<div class="space-y-2">
			<label for="task-title" class="block text-sm font-medium dark:text-slate-300">
				Título
			</label>

			<InputForm
				id="task-title"
				v-model="form.title"
				required
			/>
		</div>

		<div class="space-y-2">
			<label for="task-description" class="block text-sm font-medium dark:text-slate-300">
				Descrição
			</label>

			<TextareaForm
				id="task-description"
				v-model="form.description"
				as="textarea"
				rows="3"
			/>
		</div>

		<div class="space-y-2">
			<input v-model="ignoreResponsibleStatus" type="checkbox">
			<label class="block text-sm font-medium dark:text-slate-100">Responsável</label>

			<div class="flex items-center gap-3 rounded-lg border p-3 dark:text-slate-300">
				<div class="min-w-0 flex-1">
					<p class="font-medium">
						{{ form.responsible?.name ?? 'Nenhum responsável selecionado' }}
					</p>

					<p v-if="form.responsible" class="truncate text-sm text-gray-500">
						{{ form.responsible.email }}
					</p>
				</div>

				<Button type="button" class="shrink-0 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50" @click="selectResponsible">
					{{ form.responsible ? 'Alterar' : 'Selecionar' }}
				</Button>
			</div>
		</div>

		<footer class="mt-auto flex justify-end border-t pt-4">
			<button type="submit" class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
				Salvar tarefa
			</button>
		</footer>
	</form>
</template>
