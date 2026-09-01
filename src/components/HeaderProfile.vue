<script setup>
import profileImage from '../assets/Perfil.png'

const quickLinks = [
  { label: 'WhatsApp', href: '#whatsapp' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Como Chegar', href: '#como-chegar' },
]
</script>

<template>
  <header class="flex w-full max-w-md flex-col items-center px-4 py-8 sm:px-6 sm:py-12">
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
        class="flex min-h-12 w-full items-center justify-center rounded-xl border border-goldDetail bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-nudeBase focus:outline-none focus:ring-2 focus:ring-goldDetail focus:ring-offset-2"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>
