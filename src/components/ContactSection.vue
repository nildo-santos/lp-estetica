<script setup>
const businessHours = [
  { days: 'Segunda a sexta', hours: '09:00 às 18:00' },
  { days: 'Sábado', hours: '09:00 às 17:00' },
  { days: 'Domingo', hours: 'Fechado' },
]
</script>

<template>
  <section class="w-full max-w-3xl px-4 py-8 sm:px-6" aria-label="Informações de atendimento">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
      </article>
    </div>
  </section>
</template>
