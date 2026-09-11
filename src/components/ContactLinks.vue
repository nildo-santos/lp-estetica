<script setup>
import { contactLinks } from '../utils/contacts'
defineProps({ compact: Boolean })
</script>

<template>
  <nav :class="['contact-links', { compact }]" :aria-label="compact ? 'Contatos no rodapé' : 'Canais de contato'">
    <a v-for="link in contactLinks" :key="link.id" :href="link.href" :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener noreferrer' : undefined" :class="['contact-button', link.id]" :aria-label="link.label" :title="link.label">
      <span class="contact-icon" aria-hidden="true">
        <svg v-if="link.id === 'whatsapp'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z"/><path d="M8.1 7.5c-.5 0-1.1.8-1.1 1.5 0 2.8 4.2 6.7 6.9 6.7.9 0 2-.7 2.1-1.6l-2.4-1.2-.9 1c-1.5-.6-2.7-1.8-3.3-3.2l.9-.9-1.1-2.3Z"/></svg>
        <svg v-else-if="link.id === 'instagram'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>
      </span>
      <span v-if="!compact" class="contact-copy"><strong>{{ link.label }}</strong><span v-if="link.id === 'email'">{{ link.detail }}</span></span>
      <span v-else class="contact-tooltip" aria-hidden="true">{{ link.label }}</span>
    </a>
  </nav>
</template>

<style scoped>
.contact-links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.contact-button { display: flex; align-items: center; gap: 12px; min-width: 0; padding: 18px 14px; background: #fff; border: 1px solid #d4af374d; border-radius: 16px; color: #3f3931; text-align: left; text-decoration: none; box-shadow: 0 4px 16px #392b1110; transition: transform .2s, box-shadow .2s; }
.contact-button:hover { transform: translateY(-3px); box-shadow: 0 8px 24px #392b1120; }
.contact-button:focus-visible { outline: 3px solid #947421; outline-offset: 4px; }
.contact-icon { display: grid; place-items: center; width: 44px; height: 44px; flex-shrink: 0; border-radius: 50%; color: white; }
.contact-icon svg { width: 25px; height: 25px; }
.whatsapp .contact-icon { background: #168544; }
.instagram .contact-icon { background: linear-gradient(135deg, #7041b8, #c52e7c, #dc7737); }
.email .contact-icon { background: #927333; }
.contact-copy { display: flex; flex-direction: column; min-width: 0; gap: 4px; }
.contact-copy strong { font-size: 14px; font-weight: 600; }
.contact-copy > span { font-size: 11px; line-height: 1.5; overflow-wrap: anywhere; color: #71675c; }

.compact { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
.compact .contact-button { padding: 0; width: 52px; height: 52px; justify-content: center; border: 0; border-radius: 50%; }
.compact .contact-icon { width: 52px; height: 52px; }
.compact .contact-tooltip { display: none; }
@media (max-width: 767px) { .contact-links:not(.compact) { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .contact-button { transition: none; } .contact-button:hover { transform: none; } }
</style>
