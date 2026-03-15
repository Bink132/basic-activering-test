<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Bezoeker tracker - stuurt paginabezoek naar admin dashboard
onMounted(() => {
  fetch('https://test.basicactivering.nl/tracker.php?page=' + encodeURIComponent(route.path))
    .catch(() => {}) // stille fout als tracker niet bereikbaar is
})

watch(() => route.path, (newPath) => {
  fetch('https://test.basicactivering.nl/tracker.php?page=' + encodeURIComponent(newPath))
    .catch(() => {})
})
</script>
