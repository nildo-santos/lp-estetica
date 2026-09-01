<script setup>
import { ref } from 'vue'
import depilationImage from '../assets/Depilação.jpg'
import lymphaticDrainageImage from '../assets/drenagem-linfatica-tijuca-rj.png'
import facialCleansingImage from '../assets/Limpeza de pele.avif'
import relaxingMassageImage from '../assets/Massagem Relaxante.avif'
import rejuvenationImage from '../assets/rejuvenescimento.jpg'
import cuppingTherapyImage from '../assets/Ventosaterapia.jpeg'

const categories = ref([
  {
    name: 'Corporal',
    services: [
      { name: 'Drenagem Linfática', image: lymphaticDrainageImage },
      { name: 'Massagem Relaxante', image: relaxingMassageImage },
      { name: 'Ventosaterapia', image: cuppingTherapyImage },
      { name: 'Depilação', image: depilationImage },
    ],
  },
  {
    name: 'Facial',
    services: [
      { name: 'Limpeza de Pele', image: facialCleansingImage },
      { name: 'Rejuvenescimento Facial', image: rejuvenationImage },
    ],
  },
])

function handleServiceClick(serviceName) {
  console.log('Serviço selecionado:', serviceName)
}
</script>

<template>
  <section class="w-full max-w-3xl px-4 py-6" aria-labelledby="services-title">
    <h2 id="services-title" class="sr-only">Catálogo de serviços</h2>

    <div class="flex flex-col gap-8">
      <div v-for="category in categories" :key="category.name">
        <h3 class="mb-3 font-serif text-xl font-semibold text-zinc-800">
          {{ category.name }}
        </h3>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            v-for="service in category.services"
            :key="service.name"
            type="button"
            class="group w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-goldDetail hover:shadow-md focus:outline-none focus:ring-2 focus:ring-goldDetail focus:ring-offset-2 active:translate-y-0"
            @click="handleServiceClick(service.name)"
          >
            <img
              :src="service.image"
              :alt="`Tratamento de ${service.name}`"
              loading="lazy"
              decoding="async"
              class="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <span class="block px-4 py-4 text-sm font-medium text-zinc-700 group-hover:text-zinc-900">
              {{ service.name }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
