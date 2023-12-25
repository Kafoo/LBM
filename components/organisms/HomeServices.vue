<template>
  <div>

    <v-sheet class="ma-6 mb-8"
    position="relative"
    :class="mobile?'d-flex flex-column':'centering-column'">
        <HorizontalDivider/>
        <ClassicTitle
        class="my-4"
        :text="['Nos services']"
        :class="mobile?'medium':''"
        :left="mobile"/>
        <HorizontalDivider/>

    </v-sheet>

    <v-sheet class="centering text-center ma-6 mb-12">
      <p
      class="text-black"
      :class="mobile?'text-left':''"
      >Les Bonnes Manières est une agence événementielle qui s’associe aux plus grands acteurs du luxe pour créer des
        événements hors du commun. Notre engagement réside dans l’art de penser et de façonner chacun de vos événements en
        une expérience inoubliable, plaçant avec soin le client au coeur de chacun de nos choix.
        <br> <b>Découvrez l’art de la célébration avec Les Bonnes Manières !</b>
      </p>
    </v-sheet>

    <v-carousel
    v-if="mobile"
    height="600px"
    :show-arrows="false"
    cycle
    >
      <v-carousel-item
      src="/pictures/Dior-303-crop.jpg"
      cover
      >
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">Soirées d'entreprise et lancement de produits</div>
        </div>
      </v-carousel-item>

      <v-carousel-item
      src="/pictures/Dior-784.jpg"
      cover
      >
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">Séminaires d'entreprise</div>
        </div>
      </v-carousel-item>

      <v-carousel-item
      src="/pictures/alban_pichon_107.jpg"
      cover
      >
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">Lieux éphémères / Stands</div>
        </div>
      </v-carousel-item>

    </v-carousel>

    <v-sheet
    v-else
    class="d-flex justify-center align-start mt-8"
    :class="mobile ?'flex-column':''">

      <LabeledPicture imageSrc="/pictures/Dior-303.jpg" text="Soirées d'entreprise et lancement de produit"/>
      <LabeledPicture imageSrc="/pictures/Dior-784.jpg" text="Séminaires d'entreprise"/>
      <LabeledPicture imageSrc="/pictures/alban_pichon_107.jpg" text="Lieux éphémères / Stands"/>

    </v-sheet>

  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import HorizontalDivider from '~/components/atoms/HorizontalDivider.vue'
import LabeledPicture from '~/components/molecules/LabeledPicture.vue'
import ClassicTitle from '~/components/atoms/ClassicTitle.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({

  name: '',

  components: { LabeledPicture, HorizontalDivider, ClassicTitle },

  setup () {
    const mobile = isMobile()
    return {
      mobile
    }
  }
})

</script>

<style scoped>

.carousel-title{
  font-family: 'Yeseva One';
  font-size: 30px;
  letter-spacing: 3px;
  padding: 25px;
  max-width: 85%;
  background-color: rgba(255, 255, 255, 0.593);
}

.carousel-title-container{
  height: 100%;
}

</style>
