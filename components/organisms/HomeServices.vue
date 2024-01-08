<template>
  <div>

    <!--------- TITLE --------->
    <v-sheet class="ma-6 mb-8 d-flex flex-column"
    position="relative"
    :class="mobile?'':'align-center'">
        <HorizontalDivider/>
        <ClassicTitle
        class="my-3 pa-1 backgrounded"
        :text="[$t('home.services.title')]"
        :class="mobile?'medium':''"
        :left="mobile"/>
        <HorizontalDivider/>

    </v-sheet>

    <!--------- TEXT --------->
    <v-sheet class="centering text-center backgrounded ma-6 mb-15 services-text">
      <p
      class="text-black"
      :class="mobile?'text-left':''"
      >{{ $t('home.services.text') }}
        <br> <b>{{ $t('home.services.last') }}</b>
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
      <swiper-slide class="slide"><v-img width="100%" height="100%" cover eager src="/pictures/Dior-303-crop.jpg"></v-img>
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">{{ $t('home.services.picture1') }}</div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide"><v-img width="100%" height="100%" cover eager src="/pictures/Dior-784.jpg"></v-img>
        <div class="carousel-title-container d-flex justify-center align-center">
          <div class="carousel-title text-uppercase text-center">{{ $t('home.services.picture2') }}</div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide"><v-img width="100%" height="100%" cover eager src="/pictures/alban_pichon_107.jpg"></v-img>
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
import ClassicTitle from '~/components/atoms/ClassicTitle.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'
import { Pagination, Autoplay } from 'swiper/modules';

export default defineComponent({

  name: '',

  components: { LabeledPicture, HorizontalDivider, ClassicTitle },

  setup () {
    const mobile = isMobile()
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
