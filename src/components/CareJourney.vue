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
.care-section { background: #f3eee5; text-align: left; }
.care-intro { max-width: 680px; margin-bottom: 48px; }
.care-intro h2 { font-size: clamp(30px, 3vw, 48px); }
.care-intro h2 em { color: var(--color-accent); }
.care-intro > p { max-width: 48ch; margin: 24px 0 12px; color: var(--color-muted); }
.care-intro a { display: inline-flex; align-items: center; gap: 16px; min-height: 48px; color: var(--color-accent); font-weight: 600; text-decoration: underline; text-underline-offset: 6px; }
.care-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin: 0; padding: 0; list-style: none; }
.care-steps li { position: relative; display: grid; grid-template-rows: 56px 1fr; gap: 24px; padding-right: 32px; }
.care-steps li::before { content: ''; position: absolute; height: 2px; background: #b59d66; top: 27px; left: 28px; right: -28px; }
.care-steps li:last-child { padding-right: 0; }
.care-steps li:last-child::before { display: none; }
.step-number { position: relative; display: grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: var(--color-accent); color: white; border: 6px solid #f3eee5; box-shadow: 0 0 0 1px #b59d66; font-size: 18px; font-weight: 600; font-variant-numeric: tabular-nums; }
.care-steps h3 { font-size: 20px; font-family: var(--font-display); margin-bottom: 12px; }
.care-steps p { color: var(--color-muted); max-width: 42ch; }
@media (max-width: 767px) {
  .care-intro { margin-bottom: 32px; }
  .care-steps { grid-template-columns: 1fr; }
  .care-steps li { grid-template-columns: 56px minmax(0, 1fr); grid-template-rows: auto; gap: 20px; padding: 0 0 36px; }
  .care-steps li::before { width: 2px; height: auto; top: 28px; bottom: -28px; left: 27px; right: auto; }
  .care-steps li:last-child { padding-bottom: 0; }
  .care-steps h3 { padding-top: 10px; }
}
</style>
