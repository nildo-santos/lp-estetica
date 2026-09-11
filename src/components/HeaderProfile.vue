<script setup>
import profileImage from '../assets/Perfil.png'
import { contactLinks } from '../utils/contacts'

const googleMapsUrl =
  'https://www.google.com/maps/place/Av.+Dom+H%C3%A9lder+C%C3%A2mara,+5644+-+Sl+607+-+Cachambi,+Rio+de+Janeiro+-+RJ,+20771-004,+Brasil/@-22.8872359,-43.2883949,17z/data=!3m1!4b1!4m6!3m5!1s0x997c536323e13f:0x84494904c0f975a5!8m2!3d-22.8872409!4d-43.28582!16s%2Fg%2F11x5nvs3h9?hl=pt-BR'

const quickLinks = [
  contactLinks[0],
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/deyserodriguesestetica/',
    external: true,
  },
  { label: 'Como Chegar', href: googleMapsUrl, external: true },
]
</script>

<template>
  <header class="profile-header section-shell">
    <img
      :src="profileImage"
      alt="Deyse Rodrigues"
      fetchpriority="high"
      class="h-28 w-28 rounded-full border-2 border-goldDetail object-cover shadow-sm sm:h-32 sm:w-32"
    />

    <h1 class="mt-5 text-center font-serif text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl">
      Deyse Rodrigues
    </h1>

    <p class="mt-2 text-center text-sm tracking-wide text-zinc-600 sm:text-base">
      Estética Integrativa &amp; Desinflamação
    </p>

    <nav aria-label="Links rápidos" class="mt-8 flex w-full flex-col gap-3">
      <a
        v-for="link in quickLinks"
        :key="link.label"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined"
        class="flex min-h-12 w-full items-center justify-center rounded-xl border border-goldDetail bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-nudeBase focus:outline-none focus:ring-2 focus:ring-goldDetail focus:ring-offset-2"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
.profile-header { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.profile-header h1 { margin: 16px 0 0; font-size: clamp(30px, 3.2vw, 64px); line-height: 1.12; }
.profile-header > p { max-width: 48ch; }
.profile-header nav { max-width: 440px; }
@media (min-width: 768px) {
  .profile-header nav { flex-direction: row; max-width: 760px; }
  .profile-header > img { width: 160px; height: 160px; }
}
@media (min-width: 1024px) {
  .profile-header { display: grid; grid-template-columns: clamp(180px, 20vw, 320px) minmax(0, 1fr); column-gap: clamp(32px, 5vw, 96px); text-align: left; }
  .profile-header > img { grid-row: 1 / 4; width: 100%; height: auto; aspect-ratio: 1; }
  .profile-header h1, .profile-header > p { text-align: left; margin: 0; }
  .profile-header nav { margin-top: 20px; max-width: 760px; }
}
</style>
