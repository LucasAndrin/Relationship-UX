
<script setup lang="ts">
import type { Task } from '../entities/Task'

defineProps<{
	task: Task
	relationshipName: string
}>()
</script>

<template>
	<section class="space-y-4 p-6">
		<div>
			<h2 class="text-xl font-semibold">
				Selecionar responsável
			</h2>

			<p class="mt-1 text-sm text-gray-500">
				Teste de relacionamento do Relationship-UI
			</p>
		</div>

		<div class="rounded-lg border p-4">
			<p class="text-sm text-gray-500">Tarefa recebida</p>
			<p class="font-medium">{{ task.title }}</p>

			<p class="mt-3 text-sm text-gray-500">
				Relacionamento: {{ relationshipName }}
			</p>

			<p class="mt-3 text-sm">
				Responsável atual:
				<strong>{{ task.responsible?.name ?? 'Nenhum' }}</strong>
			</p>
		</div>

		<div class="rounded-md bg-green-50 p-3 text-sm text-green-800">
			Componente carregado e propriedades recebidas com sucesso!
		</div>
	</section>
</template>
