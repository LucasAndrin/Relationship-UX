<script setup lang="ts">
import { useWindowManager, WindowManagerRenderer } from '@lib/core/window-manager'
import TaskForm from './components/TaskForm.vue';

import { Task } from './entities/Task.ts'

const { open } = useWindowManager();

const task = new Task(
	'task-1',
	'Implementar relacionamentos',
	'Testar a comunicação entre janelas.',
)

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
  })
}
</script>

<template>
  <div class="flex h-screen flex-col">
    <nav class="flex h-14 shrink-0 items-center border-b p-4">
      <button
        class="rounded bg-black px-4 py-2 text-white"
        @click="openTaskForm"
      >
        Abrir formulário de tarefa
      </button>
    </nav>

    <main class="min-h-0 flex-1">
      <WindowManagerRenderer />
    </main>
  </div>
</template>
