<template>
  <section class="py-12 px-6 space-y-16 ">
    <div 
      v-for="(category, cIndex) in categories" 
      :key="cIndex"
      class="max-w-6xl mx-auto"
    >
      <!-- Categorie titel -->
      <h2 
        v-if="category.name" 
        class="text-3xl font-bold text-gray-800 mb-8 text-center"
      >
        {{ category.name }}
      </h2>

      <!-- Grid met cards -->
      <div
        class="grid gap-8 justify-center"
        style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));"
      >
        <div 
          v-for="(card, index) in category.cards" 
          :key="index"
          class="bg-blue-700 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow w-full max-w-sm"
        >
          <!-- Afbeelding -->
          <img 
            v-if="card.image" 
            :src="card.image" 
            :alt="card.altText || card.title || 'Card image'" 
            class="w-full h-56 object-cover"
          />

          <!-- Inhoud -->
          <div class="p-6 flex flex-col space-y-3">
            <h3 v-if="card.title" class="text-xl font-semibold text-white">
              {{ card.title }}
            </h3>
            <p v-if="card.description" class="text-white whitespace-pre-line">
              {{ card.description }}
            </p>
            <p v-if="card.price" class="text-lg font-bold text-amber-600 mt-auto">
              {{ card.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
