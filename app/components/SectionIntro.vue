<template>
  <section class="relative flex justify-end items-center my-20">
    <img
      :src="image"
      :alt="altText"
      class="w-2/5 h-[450px] object-cover rounded-lg brightness-75 mr-[15%]"
    />
    <div
      class="absolute left-[20%] top-1/2 -translate-y-1/2 w-[35%] bg-blue-700 text-white p-6 rounded-lg text-center text-sm"
    >
      <p>{{ text }}</p>
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
    text: {
      type: String,
      required: true
    }
  }
};
</script>
