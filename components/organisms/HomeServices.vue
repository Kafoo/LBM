<template>
  <div>

    <v-sheet class="ma-6 mb-8 d-flex flex-column"
    position="relative"
    :class="mobile?'':'align-center'">
        <HorizontalDivider/>
        <ClassicTitle
        class="my-4"
        :text="[$t('home.services.title')]"
        :class="mobile?'medium':''"
        :left="mobile"/>
        <HorizontalDivider/>

    </v-sheet>

    <v-sheet class="centering text-center ma-6 mb-12">
      <p
      class="text-black"
      :class="mobile?'text-left':''"
      >{{ $t('home.services.text') }}
        <br> <b>{{ $t('home.services.last') }}</b>
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
          <div class="carousel-title text-uppercase text-center">{{ $t('home.services.picture1') }}</div>
        </div>
      </v-carousel-item>

      <v-carousel-item
      src="/pictures/Dior-784.jpg"
      cover
      >
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">{{ $t('home.services.picture2') }}</div>
        </div>
      </v-carousel-item>

      <v-carousel-item
      src="/pictures/alban_pichon_107.jpg"
      cover
      >
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">{{ $t('home.services.picture3') }}</div>
        </div>
      </v-carousel-item>

    </v-carousel>

    <v-sheet
    v-else
    class="d-flex justify-center align-start mt-8"
    :class="mobile ?'flex-column':''">

      <LabeledPicture imageSrc="/pictures/Dior-303.jpg" :text="$t('home.services.picture1')"/>
      <LabeledPicture imageSrc="/pictures/Dior-784.jpg" :text="$t('home.services.picture2')"/>
      <LabeledPicture imageSrc="/pictures/alban_pichon_107.jpg" :text="$t('home.services.picture3')"/>

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
