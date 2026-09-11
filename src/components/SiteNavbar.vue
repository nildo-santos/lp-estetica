<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#como-chegar' },
  { label: 'Contato', href: '#contato' },
]
const menuButton = ref(null)
const drawer = ref(null)
const isOpen = ref(false)
let desktopQuery
let previousOverflow = ''

function openMenu() {
  if (isOpen.value) return
  previousOverflow = document.body.style.overflow
  drawer.value.showModal()
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMenu(restoreFocus = true) {
  if (!isOpen.value) return
  drawer.value.close()
  isOpen.value = false
  document.body.style.overflow = previousOverflow
  if (restoreFocus) menuButton.value?.focus()
}

function navigate(event, href) {
  event.preventDefault()
  closeMenu(false)
  const target = document.querySelector(href)
  if (target) {
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    history.pushState(null, '', href)
  }
}

function handleBackdrop(event) {
  if (event.target !== drawer.value) return
  const rect = drawer.value.getBoundingClientRect()
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeMenu()
}

function handleResize() {
  if (desktopQuery.matches) closeMenu(false)
}

onMounted(() => {
  desktopQuery = window.matchMedia('(min-width: 1024px)')
  desktopQuery.addEventListener('change', handleResize)
})
onBeforeUnmount(() => {
  closeMenu(false)
  desktopQuery?.removeEventListener('change', handleResize)
})
</script>

<template>
  <header class="site-navbar">
    <a href="#home" class="brand" aria-label="Deyse Rodrigues — início">
      <span class="brand-name">Deyse Rodrigues</span>
      <span class="brand-caption">ESTÉTICA INTEGRATIVA</span>
    </a>
    <nav class="desktop-nav" aria-label="Navegação principal">
      <a v-for="link in links" :key="link.href" :href="link.href" :class="{ 'contact-link': link.href === '#contato' }">{{ link.label }}</a>
    </nav>
    <button ref="menuButton" type="button" class="menu-toggle" aria-label="Abrir menu de navegação" aria-controls="mobile-navigation" :aria-expanded="isOpen" @click="openMenu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
    </button>
  </header>
  <Teleport to="body">
    <dialog id="mobile-navigation" ref="drawer" class="mobile-drawer" aria-label="Menu de navegação" @cancel.prevent="closeMenu()" @click="handleBackdrop">
      <div class="drawer-content">
        <div class="drawer-heading">
          <span class="brand-name">Deyse Rodrigues</span>
          <button type="button" class="menu-toggle" aria-label="Fechar menu" autofocus @click="closeMenu()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>
          </button>
        </div>
        <p class="drawer-caption">Estética Integrativa &amp; Desinflamação</p>
        <nav class="mobile-nav" aria-label="Navegação principal no celular">
          <a v-for="link in links" :key="link.href" :href="link.href" :class="{ 'contact-link': link.href === '#contato' }" @click="navigate($event, link.href)">{{ link.label }}<span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.site-navbar { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 84px; padding: 16px var(--page-gutter); background: #fdfbf7f5; border-bottom: 1px solid #d4af3738; backdrop-filter: blur(12px); color: #3f3931; }
.brand { display: flex; flex-direction: column; text-align: left; flex-shrink: 0; text-decoration: none; }
.brand-name { font-family: Georgia, serif; font-size: 20px; color: #3f3931; }
.brand-caption { margin-top: 4px; font-size: 9px; letter-spacing: 1.8px; color: #8b753e; }
.desktop-nav { display: flex; align-items: center; gap: 16px; }
.desktop-nav a { font-size: 12px; white-space: nowrap; text-decoration: none; padding-block: 12px; }
.desktop-nav a:hover, .mobile-nav a:hover { color: #846923; }
.desktop-nav .contact-link, .mobile-nav .contact-link { border: 1px solid #d4af37; border-radius: 8px; padding: 10px 14px; }
a:focus-visible, button:focus-visible { outline: 2px solid #947421; outline-offset: 4px; }
.menu-toggle { display: inline-flex; justify-content: center; align-items: center; width: 44px; height: 44px; flex-shrink: 0; border: 1px solid #d4af3755; border-radius: 10px; background: transparent; color: #514735; cursor: pointer; }
.site-navbar > .menu-toggle { display: none; }
.mobile-drawer { position: fixed; inset: 0 0 0 auto; margin: 0; padding: 0; border: 0; width: min(86vw, 360px); max-width: 100%; height: 100dvh; max-height: 100dvh; background: #fdfbf7; color: #3f3931; box-shadow: -12px 0 60px #32230f26; }
.mobile-drawer[open] { animation: slide-in 220ms ease-out; }
.mobile-drawer::backdrop { background: #211b1680; backdrop-filter: blur(3px); }
.drawer-content { min-height: 100%; padding: max(24px, env(safe-area-inset-top)) 24px max(24px, env(safe-area-inset-bottom)); }
.drawer-heading { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.drawer-caption { margin: 14px 0 28px; color: #827464; font-size: 12px; }
.mobile-nav { display: flex; flex-direction: column; gap: 6px; }
.mobile-nav a { display: flex; justify-content: space-between; align-items: center; min-height: 48px; padding: 12px 8px; border-bottom: 1px solid #d4af3726; text-decoration: none; font-size: 16px; }
.mobile-nav a span { color: #a08542; }
.mobile-nav .contact-link { margin-top: 16px; background: #f3eddf; }
@keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
@media (max-width: 1023px) { .desktop-nav { display: none; } .site-navbar > .menu-toggle { display: inline-flex; } .site-navbar { min-height: 76px; padding: 12px 20px; } }
@media (prefers-reduced-motion: reduce) { .mobile-drawer[open] { animation: none; } }

@media (min-width: 1280px) { .desktop-nav { gap: clamp(16px, 1.8vw, 36px); } .desktop-nav a { font-size: 14px; } .brand-name { font-size: 24px; } }
</style>
