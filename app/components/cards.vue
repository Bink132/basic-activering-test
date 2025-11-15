<template>
  <section class="py-12 px-6 flex flex-col items-center">
    <!-- Tekstgedeelte met blauwe achtergrond -->
    <div class="bg-blue-700 text-white rounded-2xl shadow-lg max-w-4xl w-full p-8 text-center mb-10">
      <p v-if="text" class="text-lg leading-relaxed">
        {{ text }}
      </p>
    </div>

    <!-- Cards met blauwe achtergrond -->
    <div
      class="bg-blue-700 rounded-2xl shadow-lg p-8 max-w-6xl w-full"
    >
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="(card, index) in limitedCards"
          :key="index"
          class="bg-white text-gray-800 rounded-2xl shadow-md overflow-hidden"
        >
          <!-- Afbeelding -->
          <img
            v-if="card.image"
            :src="card.image"
            alt="Card afbeelding"
            class="w-full h-40 object-cover"
          />

          <!-- Inhoud -->
          <div class="p-4">
            <h2 v-if="card.name" class="text-lg font-semibold mb-1">
              {{ card.name }}
            </h2>
            <p v-if="card.description" class="text-sm text-gray-600 mb-2">
              {{ card.description }}
            </p>
            <p v-if="card.price" class="text-base font-bold text-blue-700">
              €{{ card.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  cards: {
    type: Array,
    default: () => []
  },
  limit: {
    type: Number,
    default: 4 // standaard aantal cards
  }
})

// toont alleen het opgegeven aantal kaarten
const limitedCards = computed(() => props.cards.slice(0, props.limit))
</script>
