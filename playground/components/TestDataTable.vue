<script setup lang="ts">
import { ref } from 'vue'
import DataTable from '@lib/components/interaction/data-table/DataTable.vue'
import type {
  DataTableColumn,
  DataTableRowKey,
  DataTableSort,
} from '@lib/components/interaction/data-table'

type Customer = {
  id: number
  name: string
  email: string
  status: 'Active' | 'Inactive'
}

const columns: DataTableColumn<Customer>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'status', label: 'Status', sortable: true, },
]

const customers = ref<Customer[]>([
  {
    id: 1,
    name: 'Ana Souza',
    email: 'ana@example.com',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Carlos Lima',
    email: 'carlos@example.com',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Mariana Costa',
    email: 'mariana@example.com',
    status: 'Active',
  },
])

const selectedKeys = ref<DataTableRowKey[]>([])
const sortedKeys = ref<DataTableSort | null>(null);
</script>

<template>
  <section class="space-y-4 p-4">
    <DataTable
		v-model:selected-keys="selectedKeys"
		v-model:sort="sortedKeys"
		:columns="columns"
		:data="customers"
		row-key="id"
		selection-mode="multiple"
		variant="striped"
		rounded="md"
    />

    <p class="text-sm text-slate-600 dark:text-slate-400">
      	Selected customers: {{ selectedKeys.length }}
    </p>

    <ul class="list-inside list-disc text-sm text-slate-700 dark:text-slate-300">
		<li v-for="key in selectedKeys" :key="key">
			Customer ID: {{ key }}
		</li>
    </ul>

	<p class="text-slate-700 dark:text-slate-300">
		Sort: {{ sortedKeys }}
	</p>
  </section>
</template>
