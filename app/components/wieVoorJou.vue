<!-- ContactHero.vue -->
<template>
  <section
    class="w-full bg-blue-700 text-white flex items-center justify-center"
    aria-label="Contact sectie"
  >
    <div class="max-w-6xl w-full px-6 py-20 text-center">
      <h2 class="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
        Wil je weten wat wij kunnen doen voor jou?
      </h2>

      <p class="text-base sm:text-lg text-white/90 mb-10">Neem contact met ons op</p>

      <div class="flex flex-col items-center gap-5 sm:flex-col md:flex-col lg:flex-row lg:justify-center lg:gap-6">
        <!-- Phone button -->
        <a
          :href="`tel:${phone}`"
          class="inline-flex items-center gap-3 bg-[#F26B21] hover:bg-[#d95f1c] transition-colors font-semibold rounded-xl px-6 py-3 shadow-md focus:outline-none focus:ring-4 focus:ring-orange-300"
          aria-label="Bel ons"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.81.36 1.6.7 2.33a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.75-1.75a2 2 0 0 1 2.11-.45c.73.34 1.52.58 2.33.7A2 2 0 0 1 22 16.92z"/>
          </svg>

          <span class="text-sm sm:text-base">{{ formattedPhone }}</span>
        </a>

        <!-- Email button -->
        <a
          :href="`mailto:${email}`"
          class="inline-flex items-center gap-3 bg-[#F26B21] hover:bg-[#d95f1c] transition-colors font-semibold rounded-xl px-6 py-3 shadow-md focus:outline-none focus:ring-4 focus:ring-orange-300"
          aria-label="Stuur een e-mail"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 4h16v16H4z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>

          <span class="text-sm sm:text-base break-words max-w-[22rem] text-left">{{ email }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const phone = "020-3317648";
const email = "andrehilgers@basicactivering.nl";

// option: toon het telefoonnummer iets netter
const formattedPhone = computed(() => phone);
</script>

<!-- Geen extra css nodig; alles via Tailwind -->
