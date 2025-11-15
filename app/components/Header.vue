<script setup>
import { ref } from 'vue'

const showDropdown = ref(false)
let hideTimeout

function openMenu() {
  clearTimeout(hideTimeout)
  showDropdown.value = true
}

function closeMenu() {
  hideTimeout = setTimeout(() => {
    showDropdown.value = false
  }, 150) // kleine vertraging zodat dropdown niet direct verdwijnt
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-20 flex justify-between items-center bg-gray-100 shadow-md px-10 py-5">
    <!-- Logo -->
    <NuxtLink to="/">
      <img src="https://basicactivering.nl/wp-content/uploads/logo-BAW.png" alt="Logo" class="h-14" />
    </NuxtLink>

    <!-- Navigatie -->
    <nav class="flex gap-5 text-blue-600 text-lg font-medium items-center relative">
      <!-- Home -->
      <NuxtLink to="/" class="hover:bg-gray-200 px-3 py-2 rounded transition">
        Home
      </NuxtLink>

      <!-- Dropdown menu -->
      <div class="relative" @mouseenter="openMenu" @mouseleave="closeMenu">
        <button class="px-3 py-2 rounded hover:bg-gray-200 transition flex items-center gap-1">
          Basic
          <span class="text-gray-600">↓</span>
        </button>

        <!-- Dropdown -->
        <div v-if="showDropdown"
          class="absolute left-0 bg-white shadow-md rounded mt-0 w-52 z-50 border border-gray-100">
          <NuxtLink to="/basic/basic-wheels" class="block px-4 py-2 hover:bg-blue-50 text-blue-600">
            Basic Wheels
          </NuxtLink>
          <NuxtLink to="/basic/basic-looks" class="block px-4 py-2 hover:bg-blue-50 text-blue-600">
            Basic Looks
          </NuxtLink>
          <NuxtLink to="/basic/basic-Green" class="block px-4 py-2 hover:bg-blue-50 text-blue-600">
            Basic Green
          </NuxtLink>
          <NuxtLink to="/basic/basic-totaal" class="block px-4 py-2 hover:bg-blue-50 text-blue-600">
            Basic Totaal
          </NuxtLink>
          <NuxtLink to="/basic/basic-Bike" class="block px-4 py-2 hover:bg-blue-50 text-blue-600">
            Basic Bike
          </NuxtLink>
          <NuxtLink to="/basic/basic-Clean" class="block px-4 py-2 hover:bg-blue-50 text-blue-600">
            Basic Clean
          </NuxtLink>
        </div>
      </div>

      <!-- Overige links -->
      <a href="#" class="hover:bg-gray-200 px-3 py-2 rounded transition">
        Klachtenreglement
      </a>
      <a href="#" class="hover:bg-gray-200 px-3 py-2 rounded transition">
        Contact
      </a>
    </nav>
  </header>
</template>
