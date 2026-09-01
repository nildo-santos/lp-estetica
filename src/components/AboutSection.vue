<script setup>
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
</script>

<template>
  <section class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6" aria-labelledby="about-title">
    <h2 id="about-title" class="sr-only">Sobre Deyse Rodrigues</h2>

    <div
      class="mx-auto mb-8 max-w-3xl rounded-2xl border border-goldDetail/30 bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-8"
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

    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
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

    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="Apresentação visual">
      <img
        v-for="image in presentationImages"
        :key="image.src"
        :src="image.src"
        :alt="image.alt"
        loading="lazy"
        decoding="async"
        class="aspect-[729/909] w-full rounded-2xl border border-goldDetail/20 object-cover shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
      />
    </div>
  </section>
</template>
