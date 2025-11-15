<template>
  <section class="flex flex-col md:flex-row bg-blue-700 text-white">
    <img
      :src="image"
      :alt="altText"
      class="w-full md:w-1/2 h-84 md:h-110 object-cover"
    />
    <div class="flex flex-col justify-center items-center w-full md:w-1/2 p-6 text-center">
      <h1 class="text-3xl font-semibold mb-4">{{ title }}</h1>
      <button
        class="bg-amber-500/80 hover:bg-amber-600 px-6 py-3 rounded-lg text-lg"
      >
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    image: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: "afbeelding"
    },
    title: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: "Klik hier"
    }
  }
};
</script>
