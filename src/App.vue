<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import AboutSection from './components/AboutSection.vue'
import HeaderProfile from './components/HeaderProfile.vue'
import ServiceList from './components/ServiceList.vue'

const pageContent = ref(null)
let entranceAnimation

onMounted(() => {
  const sections = pageContent.value.querySelectorAll('[data-animate]')

  entranceAnimation = gsap.from(sections, {
    opacity: 0,
    y: 24,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
  })
})

onBeforeUnmount(() => {
  entranceAnimation?.kill()
})
</script>

<template>
  <main class="min-h-screen bg-nudeBase">
    <div ref="pageContent" class="mx-auto flex w-full max-w-md flex-col items-center pb-10">
      <div data-animate class="w-full">
        <HeaderProfile />
      </div>

      <div data-animate class="w-full">
        <AboutSection />
      </div>

      <div data-animate class="w-full">
        <ServiceList />
      </div>
    </div>
  </main>
</template>
