<script setup>
import { whatsappFor } from '../utils/contacts'
const steps = [
  { title: 'Avaliação inicial', text: 'O primeiro encontro é para entender suas necessidades, ouvir seus objetivos e avaliar os cuidados indicados para você.' },
  { title: 'Proposta personalizada', text: 'A partir da avaliação, Deyse apresenta uma proposta de cuidado individualizada e esclarece suas dúvidas.' },
  { title: 'Acompanhamento', text: 'O cuidado continua com acompanhamento da sua evolução e orientações ao longo do atendimento.' },
]
</script>

<template>
  <section class="care-section section-shell" aria-labelledby="care-title">
    <div class="care-intro">
      <h2 id="care-title">Um cuidado pensado<br /><em>com você.</em></h2>
      <p>Não precisa escolher um procedimento sozinha. Tire suas dúvidas antes de agendar.</p>
      <a :href="whatsappFor('Olá, Deyse! Gostaria de conversar sobre uma avaliação e tirar algumas dúvidas.')" target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <span aria-hidden="true">↗</span></a>
    </div>
    <ol class="care-steps">
      <li v-for="(step, index) in steps" :key="step.title"><span class="step-number" aria-hidden="true">0{{ index + 1 }}</span><div><h3>{{ step.title }}</h3><p>{{ step.text }}</p></div></li>
    </ol>
  </section>
</template>

<style scoped>
.care-section { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 96px); background: #f3eee5; text-align: left; }
.care-intro h2 { font-size: clamp(30px, 3vw, 48px); }
.care-intro h2 em { color: var(--color-accent); }
.care-intro > p { max-width: 38ch; margin: 24px 0; color: var(--color-muted); }
.care-intro a { display: inline-flex; align-items: center; gap: 16px; min-height: 48px; color: var(--color-accent); font-weight: 600; text-decoration: underline; text-underline-offset: 6px; }
.care-steps { margin: 0; padding: 0; list-style: none; }
.care-steps li { display: flex; gap: 24px; padding: 24px 0; border-bottom: 1px solid #ddd2bf; }
.care-steps li:first-child { padding-top: 0; }
.care-steps li:last-child { border: 0; padding-bottom: 0; }
.step-number { color: var(--color-accent); font-family: var(--font-display); font-size: 24px; }
.care-steps h3 { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.care-steps p { color: var(--color-muted); }
@media (max-width: 767px) { .care-section { grid-template-columns: 1fr; } .care-steps li { gap: 16px; } }
</style>
