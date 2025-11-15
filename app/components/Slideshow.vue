<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  title: String,
  subtitle: String,
  buttonText: String,
  link: { type: String, default: '#' },
  buttonColor: { type: String, default: 'bg-blue-700' },
  buttonTextColor: { type: String, default: 'text-amber-400' },
  interval: { type: Number, default: 4000 }
})

// Zet hier je vaste afbeeldingen neer (in /public/img/slide/)
const images = [
  '/img/slide/foto_1.jpeg',
  '/img/slide/foto_2.jpeg',
  '/img/slide/foto_3.jpg',
  '/img/slide/foto_4.png',
]

const index = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    index.value = (index.value + 1) % images.length
  }, 4000)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- Slides -->
    <div
      v-for="(img, i) in images"
      :key="i"
      class="absolute inset-0 bg-center bg-cover transition-opacity duration-1000"
      :style="`background-image: url(${img}); opacity: ${index === i ? 1 : 0};`"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Tekst -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
      <h1 v-if="title" class="text-4xl md:text-6xl font-bold mb-4">{{ title }}</h1>
      <p v-if="subtitle" class="text-lg md:text-2xl mb-6">{{ subtitle }}</p>

      <NuxtLink
        v-if="buttonText"
        :to="link"
        :class="[buttonColor, buttonTextColor, 'font-semibold px-8 py-3 rounded-md border-2 border-amber-400 shadow-lg hover:scale-105 transition-all duration-300']"
      >
        {{ buttonText }}
      </NuxtLink>
    </div>

  </section>
</template>
