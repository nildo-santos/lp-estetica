<script setup>
import { ref } from 'vue'

const categories = ref([
  {
    name: 'Corporal',
    services: [
      { name: 'Drenagem Linfática' },
      { name: 'Massagem Modeladora' },
      { name: 'Protocolo de Desinflamação' },
    ],
  },
  {
    name: 'Facial',
    services: [
      { name: 'Limpeza de Pele' },
      { name: 'Rejuvenescimento Facial' },
      { name: 'Harmonização Facial' },
    ],
  },
])

function handleServiceClick(serviceName) {
  console.log('Serviço selecionado:', serviceName)
}
</script>

<template>
  <section class="w-full max-w-md px-4 py-6" aria-labelledby="services-title">
    <h2 id="services-title" class="sr-only">Catálogo de serviços</h2>

    <div class="flex flex-col gap-8">
      <div v-for="category in categories" :key="category.name">
        <h3 class="mb-3 font-serif text-xl font-semibold text-zinc-800">
          {{ category.name }}
        </h3>

        <div class="flex flex-col gap-3">
          <button
            v-for="service in category.services"
            :key="service.name"
            type="button"
            class="w-full rounded-2xl border border-zinc-100 bg-white px-4 py-4 text-left text-sm font-medium text-zinc-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-goldDetail hover:text-zinc-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-goldDetail focus:ring-offset-2 active:translate-y-0"
            @click="handleServiceClick(service.name)"
          >
            {{ service.name }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
