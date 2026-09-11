<script setup>
import { ref } from 'vue'
import ServiceCarousel from './ServiceCarousel.vue'
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
      { name: 'Drenagem Linfática', image: lymphaticDrainageImage, description: 'Técnica manual com movimentos suaves e ritmados. Converse com a profissional para conhecer a proposta de atendimento e os cuidados da sessão.' },
      { name: 'Massagem Relaxante', image: relaxingMassageImage, description: 'Uma pausa dedicada ao relaxamento e ao cuidado corporal. Os detalhes da sessão são combinados no atendimento.' },
      { name: 'Ventosaterapia', image: cuppingTherapyImage, description: 'Procedimento realizado com ventosas. No atendimento, você recebe informações sobre a técnica e os cuidados envolvidos.' },
      { name: 'Depilação', image: depilationImage, description: 'Cuidado voltado à remoção dos pelos. Entre em contato para consultar as regiões atendidas, a técnica utilizada e o preparo para a sessão.' },
    ],
  },
  {
    name: 'Facial',
    services: [
      { name: 'Limpeza de Pele', image: facialCleansingImage, description: 'Uma sessão dedicada à limpeza e aos cuidados com a pele do rosto. As etapas e orientações são apresentadas durante o atendimento.' },
      { name: 'Rejuvenescimento Facial', image: rejuvenationImage, description: 'Cuidados faciais com foco na aparência da pele. Converse com a profissional para conhecer as opções e definir a proposta de atendimento.' },
    ],
  },
])

</script>

<template>
  <section class="section-shell" aria-labelledby="services-title">
    <h2 id="services-title" class="sr-only">Catálogo de serviços</h2>

    <div class="procedure-areas">
      <ServiceCarousel v-for="category in categories" :key="category.name" :category="category" />
    </div>
  </section>
</template>


<style scoped>
.procedure-areas { display: grid; gap: 36px; min-width: 0; }
@media (min-width: 1280px) { .procedure-areas { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; align-items: start; } }
</style>
