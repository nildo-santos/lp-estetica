<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import aboutImage from '../assets/quem sou eu.png'
import missionImage from '../assets/Minha Missão.png'
import valuesImage from '../assets/Meus Valores.png'
import methodImage from '../assets/eu acredito.png'

const aboutCards = [
  {
    title: 'Quem Sou',
    description:
      'Mais de 8 anos transformando vidas. Especialista em desinflamação, reestruturação corporal e pós-operatório. Aqui, a saúde vem antes da estética.',
  },
  {
    title: 'Minha Missão',
    description:
      'Devolver a sua autoestima através da Estética Integrativa. Olhar para você de forma única e transformar o seu corpo sem negligenciar a sua saúde.',
  },
  {
    title: 'Meu Método',
    description:
      'Sem promessas rápidas. Um corpo desinflamado e um metabolismo equilibrado geram resultados reais e sustentáveis de dentro para fora.',
  },
]

const presentationImages = [
  {
    src: aboutImage,
    alt: 'Apresentação de Deyse Rodrigues e sua experiência profissional na estética integrativa.',
  },
  {
    src: missionImage,
    alt: 'A missão de Deyse Rodrigues de transformar vidas por meio da estética integrativa.',
  },
  {
    src: valuesImage,
    alt: 'Valores profissionais de Deyse Rodrigues, com foco em atendimento humanizado e saúde.',
  },
  {
    src: methodImage,
    alt: 'Princípios do método de Deyse Rodrigues para resultados reais e sustentáveis.',
  },
]

const carousel = ref(null)
const activeSlide = ref(0)
const slideTitles = ['Quem sou eu', 'Minha missão', 'Meus valores', 'Eu acredito']
let resizeObserver

function goToSlide(index) {
  const next = (index + presentationImages.length) % presentationImages.length
  carousel.value.scrollTo({
    left: next * carousel.value.clientWidth,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  })
}

function updateSlide() {
  if (carousel.value.clientWidth) {
    activeSlide.value = Math.round(carousel.value.scrollLeft / carousel.value.clientWidth)
  }
}

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    carousel.value.scrollTo({ left: activeSlide.value * carousel.value.clientWidth, behavior: 'instant' })
  })
  resizeObserver.observe(carousel.value)
})

onBeforeUnmount(() => resizeObserver?.disconnect())
</script>

<template>
  <section class="about-section section-shell" aria-labelledby="about-title">
    <div class="section-heading about-heading"><h2 id="about-title">Quem somos</h2><p>Conheça Deyse Rodrigues e sua forma de cuidar.</p></div>

    <div
      class="about-intro mx-auto mb-8 max-w-3xl rounded-2xl border border-goldDetail/30 bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-8"
    >
      <p class="text-sm leading-relaxed text-zinc-700 sm:text-base">
        Aqui, não trabalhamos com protocolos padrão. Cada tratamento é estratégico, individualizado
        e pensado para gerar resultados sustentáveis.
      </p>
      <p class="mt-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
        Mais do que reduzir medidas, nosso propósito é transformar saúde e autoestima.
      </p>
      <p class="mt-4 font-serif text-base font-semibold text-zinc-800 sm:text-lg">
        Se você busca resultado com consciência, será um prazer cuidar de você.
      </p>
    </div>

    <div class="about-text-cards grid grid-cols-1 gap-4 md:grid-cols-3">
      <article
        v-for="card in aboutCards"
        :key="card.title"
        class="rounded-2xl border border-goldDetail/30 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
      >
        <h3 class="font-serif text-lg font-semibold text-zinc-800">
          {{ card.title }}
        </h3>
        <p class="mt-3 text-sm leading-relaxed text-zinc-600">
          {{ card.description }}
        </p>
      </article>
    </div>

    <div class="presentation-carousel" role="region" aria-roledescription="carrossel" aria-label="Apresentação de Deyse Rodrigues">
      <div
        id="about-carousel"
        ref="carousel"
        class="carousel-track"
        tabindex="0"
        aria-label="Cards de apresentação. Use as setas do teclado ou deslize para navegar."
        @scroll.passive="updateSlide"
        @keydown.left.prevent="goToSlide(activeSlide - 1)"
        @keydown.right.prevent="goToSlide(activeSlide + 1)"
        @keydown.home.prevent="goToSlide(0)"
        @keydown.end.prevent="goToSlide(presentationImages.length - 1)"
      >
        <div v-for="(image, index) in presentationImages" :key="image.src" class="carousel-slide" role="group" aria-roledescription="slide" :aria-label="`${index + 1} de ${presentationImages.length}: ${slideTitles[index]}`">
          <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async" draggable="false" class="carousel-image" />
        </div>
      </div>
      <div class="carousel-controls">
        <button type="button" class="carousel-arrow" aria-label="Card anterior" aria-controls="about-carousel" @click="goToSlide(activeSlide - 1)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
        </button>
        <div class="carousel-dots" aria-label="Escolher card">
          <button v-for="(title, index) in slideTitles" :key="title" type="button" class="carousel-dot" :class="{ selected: activeSlide === index }" :aria-label="`Ver card ${index + 1}: ${title}`" :aria-current="activeSlide === index ? 'true' : undefined" aria-controls="about-carousel" @click="goToSlide(index)"><span /></button>
        </div>
        <button type="button" class="carousel-arrow" aria-label="Próximo card" aria-controls="about-carousel" @click="goToSlide(activeSlide + 1)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
        </button>
      </div>
      <p class="carousel-caption" aria-live="polite" aria-atomic="true">{{ activeSlide + 1 }} / {{ presentationImages.length }} — {{ slideTitles[activeSlide] }}</p>
    </div>
  </section>
</template>

<style scoped>
.presentation-carousel { width: 100%; max-width: 500px; margin: 32px auto 0; }
.carousel-track { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; border-radius: 16px; box-shadow: 0 4px 20px #392b1112; }
.carousel-track::-webkit-scrollbar { display: none; }
.carousel-slide { flex: 0 0 100%; min-width: 0; scroll-snap-align: start; scroll-snap-stop: always; }
.carousel-image { display: block; width: 100%; aspect-ratio: 729 / 909; object-fit: contain; background: #fdfbf7; border: 1px solid #d4af3733; border-radius: 16px; }
.carousel-controls { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 16px; }
.carousel-arrow { display: grid; place-items: center; width: 44px; height: 44px; border: 1px solid #d4af3766; border-radius: 50%; background: #fff; color: #806727; cursor: pointer; }
.carousel-arrow svg { width: 22px; height: 22px; }
.carousel-arrow:hover { background: #f3eddf; }
.carousel-dots { display: flex; }
.carousel-dot { display: grid; place-items: center; width: 44px; height: 44px; border: 0; padding: 0; background: transparent; cursor: pointer; }
.carousel-dot span { width: 8px; height: 8px; border-radius: 999px; background: #d8cfbd; }
.carousel-dot.selected span { width: 22px; background: #9c7b2b; }
.carousel-caption { margin-top: 8px; color: #71675c; font-size: 12px; }
.carousel-track:focus-visible, .carousel-arrow:focus-visible, .carousel-dot:focus-visible { outline: 2px solid #947421; outline-offset: 4px; }

@media (min-width: 768px) { .presentation-carousel { max-width: 580px; } }
@media (min-width: 1280px) {
  .about-section { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); align-items: start; gap: 24px clamp(32px, 5vw, 96px); }
  .about-intro { grid-column: 1; max-width: none; margin: 0; }
  .about-text-cards { grid-column: 1; grid-template-columns: 1fr; }
  .presentation-carousel { grid-column: 2; grid-row: 2 / 4; max-width: 660px; margin-top: 0; }
}

.about-intro { text-align: left; box-shadow: none; background: transparent; border: 0; padding: 0; }
.about-text-cards article { text-align: left; border: 0; border-top: 1px solid var(--color-border); border-radius: 0; box-shadow: none; background: transparent; padding: 24px 0; }
@media (min-width: 1280px) { .about-heading { grid-column: 1 / -1; margin-bottom: 0; } }
@media (max-width: 360px) { .carousel-controls { gap: 4px; } }
</style>
