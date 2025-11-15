<template>
  <section class="relative flex justify-end items-center my-20">
    <img
      :src="fullImagePath"
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
  name: "SectionIntro",
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
  },
  computed: {
    fullImagePath() {
      // import.meta.env.BASE_URL past zich automatisch aan: 
      // '/' bij dev, '/basic-activering-test/' bij build voor GitHub Pages
      return `${import.meta.env.BASE_URL}${this.image.replace(/^\/+/,'')}`;
    }
  }
};
</script>
