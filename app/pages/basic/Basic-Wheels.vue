<template>
    <div>
        <slideshow title="Basic Wheels: als dagbesteding rolstoelen maken" subtitle="Home > Basic Wheels"></slideshow>
        <SectionIntro image="/img/Home/picknicktafel.jpg" alt-text="picknicktafel"
            text="In de werkplaats van Basic Activering in Amsterdam kun je als dagbesteding rolstoelen leren maken speciaal voor basketbal. Daarnaast voer je andere taken uit onder begeleiding van professionele werkbegeleiders. Dus als jij graag met je handen bezig bent, nodigen we je graag uit bij onze werkplaats.">
        </SectionIntro>
        <SectionCTA image="/img/home/Bed-hout-1.png" alt-text="Bed hout" title="Benieuwd wat wij nog meer doen?"
            button-text="Bekijk onze diensten"></SectionCTA>
        <div class="flex w-full">
            <div class="w-2/4 p-12 bg-blue-700 mx-8 my-12 text-white">
                <h1 class="text-xl mb-3 font-extrabold">Dagbesteding: rolstoelen maken en meer</h1>
                <p>Je voert als dagbesteding een verscheidenheid aan werkzaamheden uit in een overzichtelijke omgeving.
                    Je krijgt laagdrempelige opdrachten en leert nieuwe vaardigheden aan. Zo kun je als dagbesteding
                    bijvoorbeeld rolstoelen voor basketbal maken. Hiernaast vind je meer voorbeelden van technische
                    activiteiten die je kunt uitvoeren. Als je nog niet weet waar je in geïnteresseerd bent, is Basic
                    Totaal een geschikte manier om te ontdekken waar je kwaliteiten en talenten liggen.</p>
            </div>
            <div class="w-2/4 p-12 bg-blue-700 mx-8 my-12 text-white">
                <h1 class="text-xl mb-3 font-extrabold ">Vaardigheden op de werkvloer</h1>
                <p>Ontvangen van opdrachten – produceren – repareren – rangschikken – bedienen – kunnen beslissen –
                    assisteren bij het lassen – jezelf motiveren – onderzoeken – vervaardigen bekleding op maat geknipt
                    en genaaid voor de rolstoelen</p>
            </div>
        </div>
        <div class="px-52">
            <div class="bg-blue-700 text-white p-2">
                <h1 class="text-xl mb-3 font-extrabold flex justify-center">Doe mee</h1>
                <p>Zoek jij een rustige plek voor dagbesteding waar niets moet en alles kan? Dan zijn onze activiteiten
                    iets voor jou. Wij hebben op onze locaties voor dagbesteding de materialen en de begeleiding die je
                    nodig hebt om uiteindelijk zelfstandig rolstoelen te kunnen maken en meer. Geef je op door contact
                    met ons op te nemen.</p>
            </div>
        </div>
        <div class="px-52 mt-20">
            <SectionCards2 :categories="categories" />
        </div>
        <WieVoorJou></WieVoorJou>
        <SectionLocations></SectionLocations>

    </div>
</template>

<script setup>
const categories = [
  {
    name: 'Buitenbanden',
    cards: [
      {
        image: '/img/home/Bed-hout-1.png',
        title: 'Kenda banden alle maten en kleuren',
        price: 'Per stuk 35,- euro'
      },
      {
        image: '/img/home/Bed-hout-1.png',
        title: 'Schwalbe Marathon Evolution tyre, black, 10 bar, Patterned  ',
        price: 'Per stuk 50,- euro'
      }
    ]
  },
  {
    name: 'Wielen',
    cards: [
      {
        image: '/img/home/Bed-hout-1.png',
        title: '24″, 25”, 26” Wielen',
        description: '• Spinergy LX wheel, black rim, black hub, 12 black spokes \n\n • Alumininium hoepel, zilver, 6 lips \n\n • Kanda band',
        price: 'Per stuk 450,- euro'
      },
      {
        image: '/img/home/Bed-hout-1.png',
        title: '24″, 25”, 26” , 28″ Wielen',
        description: '• Spinergy SLX wheel, black rim, silver Hub, 24 black spokes \n\n • Alumininium hoepel, zilver, 6 lips \n\n • Kanda band',
        price: 'Per stuk 525,- euro'
      },
      {
        image: '/img/home/Bed-hout-1.png',
        title: '24″ Wielen',
        description: '• Off road Wielen, Zwart, with 1/2″ Hub, incl. tyre Bandenen zwarte aluminium  hoepel \n\n\n\n\n',
        price: 'Per stuk 250,– euro'
      },
      {
        image: '/img/home/Bed-hout-1.png',
        title: '24″, 26” Wielen',
        description: '• Spaakwiel Hogefl.nf zw Kog 12,7mm, holk.velg zwart, hoepel zwart gecoat 6 lippen 2L, high pressure blackwall, loopvlak grijs visgraat, biba AV ventiel, 36 spaken rvs gekruisd gespaakt',
        price: 'Per stuk 210,– euro'
      }
    ]
  },
  {
    name: 'Hoepels',
    cards: [
      {
        image: '/img/home/Bed-hout-1.png',
        title: 'Aluminium pushrim, silver, 6 splices',
        description: 'Hoepel  24″/ 25”/ 26” ',
        price: 'Per stuk 85,– euro'
      },
      {
        image: '/img/home/Bed-hout-1.png',
        title: 'Pushrim stainless steel, 6 splices, brushed  ',
        description: 'Hoepel  24″/ 25”/ 26”',
        price: 'Per stuk 75,- euro'
      },
      {
        image: '/img/home/Bed-hout-1.png',
        title: 'Titanium pushrim, 6 splices \nAluminium pushrim, silver, 6 splices.  ',
        description: 'Hoepel  24″/ 25”/ 26” ',
        price: 'Per stuk 225,- tot  275,- euro'
      }
    ]
  }
]
</script>