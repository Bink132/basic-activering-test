<template>
  <section class="my-16 mx-10 text-center">
    <p class="text-lg mb-6">Erkenningen / samenwerkingspartners</p>
    <div class="flex flex-wrap justify-center gap-10">
      <img v-for="n in partners" :key="n" :src="`/img/partners/${n}`" alt="" class="max-h-24 object-contain" />
    </div>
  </section>
</template>

<script setup>
const partners = [
  'ons-tweede-thuis.png',
  'philidephia.png',
  'HVO.png',
  'BB.png',
  'gmamsterdam.png',
  'jekuntmeer.jpg',
  'cordaan.png',
  'inforsa.png',
  'groene-bouwhekken.png',
  'sunrise-medical.png',
  'HKZ.png',
  'DEKRA.jpg'
]
</script>
