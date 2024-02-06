<template>
  <div>

    <!--------- TITLE --------->
    <v-sheet class="ma-6 mb-9 d-flex flex-column"
    position="relative"
    :class="mobile?'':'align-center'">
        <HorizontalDivider/>

        <h2
        class="mt-3 mb-4 pa-1 backgrounded"
        :class="mobile?'medium text-left':''"
        >
          {{ $t('home.services.title') }}
        </h2>
        <HorizontalDivider/>

    </v-sheet>

    <!--------- TEXT --------->
    <v-sheet class="centering text-center ma-6 mb-15 services-text">
      <p
      class="text-black backgrounded"
      :class="mobile?'text-left':''"
      >{{ $t('home.services.text') }}
        <br><br> <b>{{ $t('home.services.last') }}</b>
      </p>
    </v-sheet>



    <!--------- MOBILE CAROUSEL --------->

    <swiper
      v-if="mobile"
      class="home-services-carousel mb-10"
      :slidesPerView="1"
      :spaceBetween="10"
      loop
      :pagination="{
        clickable: false
      }"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :modules="modules"
    >
      <swiper-slide class="slide"><v-img width="100%" height="100%" cover src="/pictures/Dior-303-crop.jpg" alt="dior"></v-img>
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">{{ $t('home.services.picture1') }}</div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide"><v-img width="100%" height="100%" cover src="/pictures/Dior-784.jpg" alt="dior"></v-img>
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">{{ $t('home.services.picture2') }}</div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide"><v-img width="100%" height="100%" cover src="/pictures/alban_pichon_107.jpg" alt="pichon"></v-img>
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">{{ $t('home.services.picture3') }}</div>
        </div>
      </swiper-slide>
    </swiper>



    <v-carousel
    v-if="false"
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

    <!--------- DESKTOP IMAGES --------->
    <v-sheet
    v-if="!mobile"
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
import { isMobile } from '~/ts/functions/composition/displayHelpers'
import { Pagination, Autoplay } from 'swiper/modules';
import { useDisplay } from 'vuetify';

export default defineComponent({

  name: '',

  components: { LabeledPicture, HorizontalDivider },

  setup () {
    const display = useDisplay()
    const mobile = isMobile(display)
    return {
      mobile,
      modules: [Pagination, Autoplay]
    }
  }
})

</script>

<style scoped>

.services-text{
  font-size: 14px;
  line-height: 23px;
}

.home-services-carousel{
  width: 100%;
  height: 525px;
}

.slide{
  height: 100%;
  width: 100%;
}

.carousel-title{
  font-family: 'Yeseva One';
  font-size: 27px;
  letter-spacing: 2px;
  padding: 22px;
  max-width: 75%;
  background-color: rgba(255, 255, 255, 0.695);
}

.carousel-title-container{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}

img{
  height: 100%;
}

</style>
