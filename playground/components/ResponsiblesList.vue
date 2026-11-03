<script setup lang="ts">
import { ref } from 'vue'
import type { RelationshipMode } from '@lib/core/relationships';
import { Responsible } from '../entities/Responsible';
import { DataTable, type DataTableColumn, type DataTableRowKey, type DataTableSort } from '@lib/components';

const props = defineProps<{
	mode: RelationshipMode
	ignoreResponsibleStatus: boolean,
	onSelect?: (selectedResponsibles: Responsible[]) => void
}>();


const responsibles = ref<Responsible[]>(
	Responsible.createMany([
		{
			id: 'responsible-1',
			name: 'Ana Silva',
			email: 'ana@example.com',
		},
		{
			id: 'responsible-2',
			name: 'Bruno Costa',
			email: 'bruno@example.com',
		},
		{
			id: 'responsible-3',
			name: 'Carla Souza',
			email: 'carla@example.com',
		},
	])
);

const columns: DataTableColumn<Responsible>[] = [
  { key: 'id', label: 'Name', sortable: true },
  { key: 'name', label: 'Email', sortable: true },
  { key: 'email', label: 'Status', sortable: true, },
]

const selectedKeys = ref<DataTableRowKey[]>([]);
const sortedKeys = ref<DataTableSort | null>(null);

function onUpdateSelectedKeys(keys: DataTableRowKey[]) {
	const selectedResponsibles = responsibles.value.filter(responsible => {
		return keys.includes(responsible.id!);
	});


	props.onSelect?.(selectedResponsibles);
}
</script>

<template>
	<section class="space-y-4 p-4">
		{{ ignoreResponsibleStatus }}
		<DataTable
			v-model:selected-keys="selectedKeys"
			v-model:sort="sortedKeys"
			:columns="columns"
			:data="responsibles"
			row-key="id"
			selection-mode="single"
			variant="striped"
			rounded="md"
			@update:selected-keys="onUpdateSelectedKeys"
		/>

		<!-- <div class="min-h-0 flex-1 space-y-2 overflow-y-auto"> -->
			<!-- <button
				v-for="responsible in responsibles"
				:key="responsible.id"
				type="button"
				class="flex w-full items-center justify-between rounded-lg border p-3 text-left transition hover:bg-gray-50"
				@click="selectResponsible(responsible)"
			>
				<div>
					<p class="font-medium">{{ responsible.name }}</p>
					<p class="text-sm text-gray-500">
						{{ responsible.email }}
					</p>
				</div>

				<span class="text-sm text-blue-600">
					Selecionar
				</span>
			</button> -->
		<!-- </div> -->
	</section>
</template>
