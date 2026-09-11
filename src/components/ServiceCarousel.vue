<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({ category: { type: Object, required: true } })
const pages = computed(() => {
  const result = []
  for (let i = 0; i < props.category.services.length; i += 2) result.push(props.category.services.slice(i, i + 2))
  return result
})
const track = ref(null)
const activePage = ref(0)
const trackId = computed(() => `procedimentos-${props.category.name.toLowerCase().replace(/\s+/g, '-')}`)
let resizeObserver

function goToPage(index) {
  if (!pages.value.length) return
  const next = (index + pages.value.length) % pages.value.length
  track.value.scrollTo({ left: next * track.value.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
}
function updatePage() {
  if (track.value.clientWidth) activePage.value = Math.round(track.value.scrollLeft / track.value.clientWidth)
}
onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    track.value.scrollTo({ left: activePage.value * track.value.clientWidth, behavior: 'instant' })
  })
  resizeObserver.observe(track.value)
})
onBeforeUnmount(() => resizeObserver?.disconnect())
</script>

<template>
  <div class="service-carousel" role="region" aria-roledescription="carrossel" :aria-label="`Procedimentos da área ${category.name}`">
    <h3 class="mb-3 font-serif text-xl font-semibold text-zinc-800">{{ category.name }}</h3>
    <div :id="trackId" ref="track" class="service-track" tabindex="0" :aria-label="`${category.name}: dois procedimentos por página. Use as setas do teclado ou deslize.`" @scroll.passive="updatePage" @keydown.left.prevent="goToPage(activePage - 1)" @keydown.right.prevent="goToPage(activePage + 1)" @keydown.home.prevent="goToPage(0)" @keydown.end.prevent="goToPage(pages.length - 1)">
      <div v-for="(page, index) in pages" :key="index" class="service-page" role="group" aria-roledescription="slide" :aria-label="`${index + 1} de ${pages.length}`" :inert="index !== activePage">
        <article v-for="service in page" :key="service.name" class="service-card">
          <img :src="service.image" :alt="`Tratamento de ${service.name}`" loading="lazy" decoding="async" draggable="false" />
          <h4>{{ service.name }}</h4>
          <details class="service-details">
            <summary :aria-label="`Detalhes de ${service.name}`">
              <span class="label-closed">Ver detalhes</span>
              <span class="label-open">Fechar detalhes</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <p>{{ service.description }}</p>
          </details>
        </article>
      </div>
    </div>
    <div v-if="pages.length > 1" class="service-controls">
      <button type="button" class="service-arrow" :aria-label="`Procedimentos anteriores: ${category.name}`" :aria-controls="trackId" @click="goToPage(activePage - 1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg></button>
      <div class="service-dots" :aria-label="`Páginas de ${category.name}`">
        <button v-for="(_, index) in pages" :key="index" type="button" class="service-dot" :class="{ selected: index === activePage }" :aria-label="`Ver página ${index + 1} de ${category.name}`" :aria-current="index === activePage ? 'true' : undefined" :aria-controls="trackId" @click="goToPage(index)"><span /></button>
      </div>
      <button type="button" class="service-arrow" :aria-label="`Próximos procedimentos: ${category.name}`" :aria-controls="trackId" @click="goToPage(activePage + 1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg></button>
    </div>
    <p class="service-caption" aria-live="polite" aria-atomic="true">{{ activePage + 1 }} / {{ pages.length }}</p>
  </div>
</template>

<style scoped>
.service-carousel { min-width: 0; width: 100%; }
.service-track { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; border-radius: 16px; }
.service-track::-webkit-scrollbar { display: none; }
.service-page { flex: 0 0 100%; min-width: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: start; gap: 12px; padding: 4px; scroll-snap-align: start; scroll-snap-stop: always; }
.service-card { min-width: 0; overflow: hidden; border: 1px solid #eae5dc; border-radius: 16px; background: #fff; text-align: left; box-shadow: 0 2px 4px #0000000d; }
.service-card:hover { border-color: #d4af37; }
.service-card img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; }
.service-card > h4 { display: block; padding: 16px; font-size: 14px; line-height: 1.5; font-weight: 500; color: #3f3f46; overflow-wrap: anywhere; }
.service-controls { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 16px; }
.service-arrow { display: grid; place-items: center; width: 44px; height: 44px; border: 1px solid #d4af3766; border-radius: 50%; background: #fff; color: #806727; cursor: pointer; }
.service-arrow:hover { background: #f3eddf; }
.service-arrow svg { width: 22px; height: 22px; }
.service-dots { display: flex; }
.service-dot { display: grid; place-items: center; width: 36px; height: 44px; padding: 0; border: 0; background: transparent; cursor: pointer; }
.service-dot span { width: 8px; height: 8px; border-radius: 999px; background: #d8cfbd; }
.service-dot.selected span { width: 22px; background: #9c7b2b; }
.service-caption { margin-top: 8px; font-size: 12px; color: #71675c; }
.service-track:focus-visible, button:focus-visible, summary:focus-visible { outline: 2px solid #947421; outline-offset: 2px; }
@media (max-width: 480px) { .service-page { gap: 8px; } .service-card > h4 { padding: 12px 8px; font-size: 12px; } }
.service-details { margin: 0 12px 12px; border-top: 1px solid #eae5dc; }
.service-details summary { display: flex; align-items: center; justify-content: space-between; gap: 6px; min-height: 44px; padding: 8px 0; color: #806727; font-size: 12px; font-weight: 500; list-style: none; cursor: pointer; }
.service-details summary::-webkit-details-marker { display: none; }
.service-details summary svg { width: 18px; height: 18px; flex-shrink: 0; }
.service-details .label-open { display: none; }
.service-details[open] .label-closed { display: none; }
.service-details[open] .label-open { display: inline; }
.service-details[open] summary svg { transform: rotate(180deg); }
.service-details p { padding: 2px 0 8px; color: #655d54; font-size: 13px; line-height: 1.65; overflow-wrap: anywhere; }
@media (max-width: 480px) { .service-details { margin-inline: 8px; } .service-details p { font-size: 12px; } }
</style>

