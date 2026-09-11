<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import HeaderProfile from './components/HeaderProfile.vue'
import ServiceList from './components/ServiceList.vue'
import SiteNavbar from './components/SiteNavbar.vue'
import ContactLinks from './components/ContactLinks.vue'
import CareJourney from './components/CareJourney.vue'

const pageContent = ref(null)
let entranceAnimation

onMounted(() => {
  const sections = pageContent.value.querySelectorAll('[data-animate]')

  entranceAnimation = gsap.matchMedia()
  entranceAnimation.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from(sections, {
    opacity: 0,
    y: 24,
    duration: 0.35,
    stagger: 0.06,
    ease: 'power2.out',
    })
  })
})

onBeforeUnmount(() => {
  entranceAnimation?.revert()
})
</script>

<template>
  <a class="skip-link" href="#home">Ir para o conteúdo</a>
  <SiteNavbar />
  <main tabindex="-1" id="home" class="min-h-screen bg-nudeBase">
    <div ref="pageContent" class="page-content flex flex-col items-center">
      <div data-animate class="flex w-full justify-center">
        <HeaderProfile />
      </div>

      <div data-animate class="w-full">
        <AboutSection id="quem-somos" />
      </div>

      <div data-animate class="flex w-full justify-center">
        <ServiceList id="procedimentos" />
      </div>

      <CareJourney />

      <div data-animate class="flex w-full justify-center">
        <div class="section-shell">
          <section id="especialidades" aria-labelledby="specialties-title">
            <h2 id="specialties-title" class="font-serif text-2xl text-zinc-800">Especialidades</h2>
            <div class="mt-6 grid gap-4 sm:grid-cols-3">
              <div v-for="specialty in ['Desinflamação', 'Reestruturação corporal', 'Pós-operatório']" :key="specialty" class="rounded-2xl border border-goldDetail/30 bg-white p-6 font-serif text-lg text-zinc-800">{{ specialty }}</div>
            </div>
          </section>
          <section id="depoimentos" class="mt-12 rounded-2xl border border-goldDetail/30 bg-white p-8" aria-labelledby="testimonials-title">
            <h2 id="testimonials-title" class="font-serif text-2xl text-zinc-800">Depoimentos</h2>
            <p class="mt-3 text-sm text-zinc-600">Em breve, relatos de quem já recebeu nossos cuidados.</p>
          </section>
        </div>
      </div>

      <div data-animate class="flex w-full justify-center">
        <ContactSection id="contato" />
      </div>
    </div>
  </main>
  <ContactLinks floating />
</template>
