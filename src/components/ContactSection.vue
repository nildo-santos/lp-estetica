<script setup>
const businessHours = [
  { days: 'Segunda a sexta', hours: '09:00 às 18:00' },
  { days: 'Sábado', hours: '09:00 às 17:00' },
  { days: 'Domingo', hours: 'Fechado' },
]

const googleMapsUrl =
  'https://www.google.com/maps/place/Av.+Dom+H%C3%A9lder+C%C3%A2mara,+5644+-+Sl+607+-+Cachambi,+Rio+de+Janeiro+-+RJ,+20771-004,+Brasil/@-22.8872359,-43.2883949,17z/data=!3m1!4b1!4m6!3m5!1s0x997c536323e13f:0x84494904c0f975a5!8m2!3d-22.8872409!4d-43.28582!16s%2Fg%2F11x5nvs3h9?hl=pt-BR'

const googleMapsEmbedUrl =
  'https://www.google.com/maps?q=-22.8872409,-43.28582&z=17&output=embed'
</script>

<template>
  <section class="w-full max-w-5xl px-4 py-8 sm:px-6" aria-label="Informações de atendimento">
    <div class="grid grid-cols-1 items-start gap-4 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
      <article
        class="rounded-2xl border border-goldDetail/30 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
      >
        <h2 class="font-serif text-xl font-semibold text-zinc-800">
          Horário de funcionamento
        </h2>

        <dl class="mt-5 space-y-3 text-sm text-zinc-600">
          <div
            v-for="schedule in businessHours"
            :key="schedule.days"
            class="flex items-start justify-between gap-4 border-b border-zinc-100 pb-3 last:border-0 last:pb-0"
          >
            <dt>{{ schedule.days }}</dt>
            <dd class="text-right font-medium text-zinc-800">{{ schedule.hours }}</dd>
          </div>
        </dl>
      </article>

      <article
        id="como-chegar"
        class="scroll-mt-6 rounded-2xl border border-goldDetail/30 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
      >
        <h2 class="font-serif text-xl font-semibold text-zinc-800">Como chegar</h2>
        <address class="mt-5 text-sm not-italic leading-relaxed text-zinc-600">
          Avenida Dom Hélder Câmara, 5644<br />
          Sala 607<br />
          CEP 20771-004
        </address>

        <iframe
          :src="googleMapsEmbedUrl"
          title="Mapa da Avenida Dom Hélder Câmara, 5644, sala 607"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          class="mt-5 h-72 w-full rounded-xl border-0"
        ></iframe>

        <a
          :href="googleMapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 flex min-h-11 w-full items-center justify-center rounded-xl border border-goldDetail bg-white px-4 py-3 text-center text-sm font-medium text-zinc-800 transition-colors hover:bg-nudeBase focus:outline-none focus:ring-2 focus:ring-goldDetail focus:ring-offset-2"
        >
          Abrir no Google Maps
        </a>
      </article>
    </div>
  </section>
</template>
