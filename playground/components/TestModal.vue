<script setup lang="ts">
import { ref } from 'vue'
import Button from '../components/base/button/Button.vue'
import Modal from '../components/interaction/modal/Modal.vue'

const basicModal = ref(false)
const largeModal = ref(false)
const lockedModal = ref(false)
const noOverlayCloseModal = ref(false)
const noEscapeModal = ref(false)
</script>

<template>
	<div class="min-h-screen bg-slate-50 p-10">
		<div class="mx-auto max-w-4xl">
			<header class="mb-10">
				<h1 class="text-3xl font-bold text-slate-900">
					Modal Playground
				</h1>

				<p class="mt-2 text-slate-600">
					Testes do componente Modal.
				</p>
			</header>

			<div class="grid gap-4 sm:grid-cols-2">
				<!-- Basic -->
				<section
					class="rounded-lg border bg-white p-6"
				>
					<h2 class="font-semibold text-slate-900">
						Basic Modal
					</h2>

					<p class="mt-2 text-sm text-slate-500">
						Modal padrão.
					</p>

					<Button
						class="mt-4"
						@click="basicModal = true"
					>
						Abrir Modal
					</Button>
				</section>

				<!-- Large -->
				<section
					class="rounded-lg border bg-white p-6"
				>
					<h2 class="font-semibold text-slate-900">
						Large Modal
					</h2>

					<p class="mt-2 text-sm text-slate-500">
						Testa o tamanho xl.
					</p>

					<Button
						class="mt-4"
						@click="largeModal = true"
					>
						Abrir Large
					</Button>
				</section>

				<!-- Locked -->
				<section
					class="rounded-lg border bg-white p-6"
				>
					<h2 class="font-semibold text-slate-900">
						Locked Modal
					</h2>

					<p class="mt-2 text-sm text-slate-500">
						Não pode ser fechado por interação.
					</p>

					<Button
						class="mt-4"
						@click="lockedModal = true"
					>
						Abrir Locked
					</Button>
				</section>

				<!-- No overlay close -->
				<section
					class="rounded-lg border bg-white p-6"
				>
					<h2 class="font-semibold text-slate-900">
						No Overlay Close
					</h2>

					<p class="mt-2 text-sm text-slate-500">
						Clicar fora não fecha.
					</p>

					<Button
						class="mt-4"
						@click="
							noOverlayCloseModal = true
						"
					>
						Abrir Modal
					</Button>
				</section>

				<!-- No escape -->
				<section
					class="rounded-lg border bg-white p-6"
				>
					<h2 class="font-semibold text-slate-900">
						No Escape
					</h2>

					<p class="mt-2 text-sm text-slate-500">
						ESC não fecha o modal.
					</p>

					<Button
						class="mt-4"
						@click="noEscapeModal = true"
					>
						Abrir Modal
					</Button>
				</section>
			</div>
		</div>

		<!-- Basic Modal -->
		<Modal v-model="basicModal">
			<div class="p-6">
				<h2
					class="text-xl font-semibold text-slate-900"
				>
					Modal básico
				</h2>

				<p class="mt-3 text-slate-600">
					Este é um teste básico do nosso
					componente Modal.
				</p>

				<div class="mt-6 flex justify-end">
					<Button @click="basicModal = false">
						Fechar
					</Button>
				</div>
			</div>
		</Modal>

		<!-- Large Modal -->
		<Modal
			v-model="largeModal"
			size="xl"
		>
			<div class="p-8">
				<h2
					class="text-2xl font-semibold text-slate-900"
				>
					Large Modal
				</h2>

				<p class="mt-3 text-slate-600">
					Este Modal utiliza a variante
					<code>xl</code>.
				</p>

				<div class="mt-8 grid gap-4 sm:grid-cols-2">
					<div
						class="rounded-md bg-slate-100 p-4"
					>
						Card 1
					</div>

					<div
						class="rounded-md bg-slate-100 p-4"
					>
						Card 2
					</div>
				</div>

				<div class="mt-8 flex justify-end">
					<Button @click="largeModal = false">
						Fechar
					</Button>
				</div>
			</div>
		</Modal>

		<!-- Locked Modal -->
		<Modal
			v-model="lockedModal"
			:locked="true"
		>
			<div class="p-6">
				<h2
					class="text-xl font-semibold text-slate-900"
				>
					Modal bloqueado
				</h2>

				<p class="mt-3 text-slate-600">
					ESC e clique no overlay não devem
					fechar este Modal.
				</p>

				<div class="mt-6 flex justify-end">
					<Button
						@click="lockedModal = false"
					>
						Fechar manualmente
					</Button>
				</div>
			</div>
		</Modal>

		<!-- No overlay close -->
		<Modal
			v-model="noOverlayCloseModal"
			:close-on-overlay="false"
		>
			<div class="p-6">
				<h2
					class="text-xl font-semibold text-slate-900"
				>
					Overlay não fecha
				</h2>

				<p class="mt-3 text-slate-600">
					Clique fora do conteúdo. Nada deve
					acontecer.
				</p>

				<div class="mt-6 flex justify-end">
					<Button
						@click="
							noOverlayCloseModal = false
						"
					>
						Fechar
					</Button>
				</div>
			</div>
		</Modal>

		<!-- No escape -->
		<Modal
			v-model="noEscapeModal"
			:close-on-escape="false"
		>
			<div class="p-6">
				<h2
					class="text-xl font-semibold text-slate-900"
				>
					ESC desabilitado
				</h2>

				<p class="mt-3 text-slate-600">
					Pressione ESC. O Modal deve continuar
					aberto.
				</p>

				<div class="mt-6 flex justify-end">
					<Button
						@click="noEscapeModal = false"
					>
						Fechar
					</Button>
				</div>
			</div>
		</Modal>
	</div>
</template>
