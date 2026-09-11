<script setup>
import profileImage from '../assets/Perfil.png'
import { whatsappFor } from '../utils/contacts'
</script>

<template>
  <header class="profile-header section-shell">
    <div class="hero-copy">
      <p class="hero-kicker">Deyse Rodrigues · Estética integrativa</p>
      <h1>Um cuidado que começa por <em>entender você.</em></h1>
      <p class="hero-description">Um olhar individual para sua saúde, sua autoestima e os cuidados que fazem sentido para você.</p>
      <nav class="hero-actions" aria-label="Comece por aqui">
        <a class="action-primary" :href="whatsappFor('Olá, Deyse! Gostaria de saber como agendar uma avaliação.')" target="_blank" rel="noopener noreferrer">Agendar uma avaliação <span aria-hidden="true">↗</span></a>
        <a class="action-secondary" href="#procedimentos">Conhecer os procedimentos <span aria-hidden="true">↓</span></a>
      </nav>
    </div>
    <figure class="hero-portrait">
      <img :src="profileImage" alt="Deyse Rodrigues" fetchpriority="high" decoding="async" />
      <figcaption><strong>Deyse Rodrigues</strong><span>Estética Integrativa &amp; Desinflamação</span></figcaption>
    </figure>
  </header>
</template>

<style scoped>
.profile-header { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); align-items: center; gap: clamp(32px, 6vw, 112px); padding-top: clamp(40px, 6vw, 96px); padding-bottom: clamp(48px, 6vw, 100px); text-align: left; }
.hero-copy { max-width: 780px; }
.hero-kicker { color: var(--color-accent); font-size: .875rem; font-weight: 500; margin-bottom: 24px; }
.hero-copy h1 { font-size: clamp(40px, 4.7vw, 76px); line-height: 1.07; font-weight: 400; margin: 0; letter-spacing: -.04em; }
.hero-copy h1 em { color: var(--color-accent); font-weight: 400; }
.hero-description { margin-top: 28px; max-width: 43ch; color: var(--color-muted); font-size: clamp(16px, 1.25vw, 20px); line-height: 1.7; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
.hero-actions a { display: inline-flex; align-items: center; justify-content: center; gap: 18px; min-height: 52px; padding: 12px 20px; border-radius: var(--radius-control); font-size: .9375rem; font-weight: 500; text-decoration: none; }
.action-primary { background: var(--color-accent); color: white; }
.action-primary:hover { background: var(--color-accent-hover); }
.action-secondary { color: var(--color-ink); border: 1px solid var(--color-border); }
.action-secondary:hover { background: #f3eddf; }
.hero-portrait { width: 100%; max-width: 580px; justify-self: end; margin: 0; }
.hero-portrait img { display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; object-position: center 35%; border-radius: 180px 180px 24px 24px; background: #e9e2d7; }
.hero-portrait figcaption { display: flex; flex-direction: column; gap: 4px; padding-top: 18px; }
.hero-portrait strong { font-family: var(--font-display); font-size: 20px; font-weight: 400; }
.hero-portrait figcaption span { font-size: .8125rem; color: var(--color-muted); }
@media (max-width: 767px) {
  .profile-header { grid-template-columns: 1fr; gap: 32px; }
  .hero-kicker { font-size: .8125rem; margin-bottom: 18px; }
  .hero-copy h1 { font-size: clamp(38px, 8vw, 56px); }
  .hero-description { margin-top: 20px; }
  .hero-actions { flex-direction: column; margin-top: 24px; }
  .hero-portrait { max-width: 440px; justify-self: center; }
}
@media (hover: hover) and (prefers-reduced-motion: no-preference) { .hero-actions a { transition: background-color 150ms ease; } }
</style>
