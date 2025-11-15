<script setup>
const cardSize = {
  height: 'h-[300px]', // totale hoogte van de kaart
  width: 'w-[350px]'   // totale breedte van de kaart
}

const cards = [
  { title: 'Basic Wheels', img: '/basic-activering-test/img/home/rolstoel.png', link: '/basic/basic-wheels' },
  { title: 'Basic Looks', img: '/basic-activering-test/img/home/rolstoel.png', link: '/basic/basic-looks' },
  { title: 'Basic Bike', img: '/basic-activering-test/img/home/rolstoel.png', link: '/basic/basic-bike' },
  { title: 'Basic Totaal', img: '/basic-activering-test/img/home/rolstoel.png', link: '/basic/basic-totaal' },
  { title: 'Basic Green', img: '/basic-activering-test/img/home/rolstoel.png', link: '/basic/basic-green' },
  { title: 'Basic Clean', img: '/basic-activering-test/img/home/rolstoel.png', link: '/basic/basic-clean' }
]
</script>

<template>
  <section class="py-20 bg-gray-50">
    <h1 class="text-center text-amber-500 text-3xl font-bold mb-12">
      Onze diensten
    </h1>

    <!-- GRID -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 place-items-center">
      <div
        v-for="card in cards"
        :key="card.title"
        :class="[
          'relative group bg-blue-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-visible cursor-pointer flex flex-col items-center',
          cardSize.width,
          cardSize.height
        ]"
      >
        <!-- Afbeelding (bovenste deel van kaart) -->
        <NuxtLink :to="card.link" class="relative block w-full h-[80%] overflow-visible rounded-t-xl">
          <img
            :src="card.img"
            :alt="card.title"
            class="w-full h-full object-cover brightness-75 rounded-t-xl transition-transform duration-300 group-hover:scale-105"
          />

          <!-- Titel -->
          <h2 class="absolute top-4 left-4 text-amber-400 text-2xl font-bold drop-shadow-md">
            {{ card.title }}
          </h2>

          <!-- Lees meer knop (deels buiten afbeelding, zichtbaar) -->
          <div class="absolute -bottom-5 right-6 z-10">
            <div
              class="bg-blue-700 text-amber-400 px-6 py-2 rounded-md border-2 border-amber-400 shadow-md group-hover:bg-blue-600 transition-all duration-300"
            >
              Lees meer
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
