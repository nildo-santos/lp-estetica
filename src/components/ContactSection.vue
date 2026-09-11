<script setup>
import ContactLinks from './ContactLinks.vue'
import { whatsappFor } from '../utils/contacts'
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
  <section class="section-shell" aria-label="Informações de atendimento">
    <div class="mb-8">
      <h2 class="font-serif text-2xl text-zinc-800">Contato</h2>
      <p class="mb-6 mt-3 text-sm text-zinc-600">Escolha o melhor canal para falar com a gente.</p>
      <ContactLinks />
    </div>
    <div class="contact-layout grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
      <article class="hours-card" aria-labelledby="hours-title">
        <div class="hours-heading">
          <span class="hours-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>
          <div><p class="hours-label">Planeje sua visita</p><h2 id="hours-title">Horário de funcionamento</h2></div>
        </div>
        <dl class="hours-list">
          <div v-for="schedule in businessHours" :key="schedule.days" class="hours-row" :class="{ 'hours-closed': schedule.hours === 'Fechado' }">
            <dt>{{ schedule.days }}</dt>
            <dd>{{ schedule.hours }}</dd>
          </div>
        </dl>
        <div class="booking-invitation">
          <h3>Reserve um tempo<br />para cuidar de você.</h3>
          <p>Converse com Deyse e encontre um horário para sua avaliação.</p>
          <a class="booking-button" :href="whatsappFor('Olá, Deyse! Gostaria de agendar uma avaliação. Quais horários estão disponíveis?')" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 5 3 3 5-5"/></svg>
            <span>Agendar uma avaliação</span><span aria-hidden="true">↗</span>
          </a>
          <p class="booking-note">Consulte a disponibilidade pelo WhatsApp.</p>
        </div>
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

<style scoped>
.hours-card { display: flex; flex-direction: column; min-width: 0; padding: clamp(20px, 2.5vw, 40px); text-align: left; border: 1px solid var(--color-border); border-radius: 20px; background: #f6f1e8; }
.hours-heading { display: flex; align-items: flex-start; gap: 16px; }
.hours-icon { display: grid; place-items: center; width: 48px; height: 48px; flex-shrink: 0; border: 1px solid #d8c9a9; border-radius: 14px; color: var(--color-accent); }
.hours-icon svg { width: 25px; height: 25px; }
.hours-label { margin: 0 0 8px; font-size: .8125rem; color: var(--color-accent); font-weight: 500; }
.hours-heading h2 { font-size: clamp(24px, 2vw, 32px); line-height: 1.2; margin: 0; }
.hours-list { margin: 32px 0; }
.hours-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 0; border-bottom: 1px solid var(--color-border); font-size: .9375rem; }
.hours-row:first-child { padding-top: 0; }
.hours-row:last-child { border: 0; padding-bottom: 0; }
.hours-row dt { color: var(--color-muted); }
.hours-row dd { margin: 0; color: var(--color-ink); font-weight: 600; font-variant-numeric: tabular-nums; white-space: nowrap; }
.hours-closed dd { font-weight: 400; color: var(--color-muted); }
.booking-invitation { margin-top: auto; padding-top: 28px; border-top: 1px solid #d8c9a9; }
.booking-invitation h3 { font-family: var(--font-display); font-size: clamp(26px, 2.1vw, 34px); line-height: 1.2; margin: 0 0 14px; color: var(--color-ink); }
.booking-invitation > p { color: var(--color-muted); font-size: .9375rem; max-width: 38ch; }
.booking-button { display: flex; align-items: center; justify-content: center; gap: 12px; min-height: 52px; padding: 14px 16px; margin-top: 24px; border-radius: var(--radius-control); color: white; background: var(--color-accent); text-align: center; font-size: .9375rem; font-weight: 600; }
.booking-button svg { width: 22px; height: 22px; flex-shrink: 0; }
.booking-button:hover { background: var(--color-accent-hover); }
.booking-invitation .booking-note { font-size: .8125rem; margin-top: 12px; }
@media (max-width: 360px) { .hours-heading { gap: 12px; } .hours-row { gap: 8px; font-size: .875rem; } .booking-button { gap: 8px; padding-inline: 10px; font-size: .875rem; } }
@media (hover: hover) and (prefers-reduced-motion: no-preference) { .booking-button { transition: background-color 150ms ease; } }
</style>
