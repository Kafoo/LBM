<template>
  <v-card
  :height="mobile?'100vh':'80vh'"
  class="pop-up-container">

    <v-btn
      class="close"
      variant="text"
      icon
      :size="mobile?'70px':'40px'"
      @click="$emit('close')"
    >
      <v-icon color="white" :size="mobile?'x-large':''">mdi-close</v-icon>
    </v-btn>

    <!---------- IF OTHER THAN EPHEMERE ---------->
    <v-card v-if="!ephemere" class="pa-2 centering" height="100%">
      <swiper
        class="popup-carousel mx-0"
        :slidesPerView="1"
        :spaceBetween="30"
        :navigation="!mobile"
        :pagination="{
          type: 'fraction'
        }"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :modules="modules"
      >
        <swiper-slide v-for="image in images">
          <v-img :src="image" height="100%" alt="expertise">
            <template v-slot:placeholder><AtomsProgress/></template>
          </v-img>
        </swiper-slide>
      </swiper>
    </v-card>

    <!---------- IF EPHEMERE ---------->
      <div v-if="ephemere" class="progress-circle centering">
        <v-progress-circular
        indeterminate
        color="white"
        ></v-progress-circular>
      </div>


    <v-row
    v-if="ephemere"
    class="fill-height ma-0"
    align="center"
    justify="center">
      <video
      v-if="ephemere"
      class="ephemere-video"
      src="/expertise-carousels/ephemere.mp4"
      autoplay
      loop
      :controls="false">
        <source src="/expertise-carousels/ephemere.mp4" type="video/mp4" />
      </video>
    </v-row>


  </v-card>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { Pagination, Navigation } from 'swiper/modules';
import { useDisplay } from 'vuetify';

export default {

  name: 'CarouselPopup',

  props: {
    images: {type: Array<string>, default: []},
    ephemere: { type:Boolean, default: false}
  },

  setup () {
    const display = useDisplay()
    const mobile = isMobile(display)
    return {
      mobile,
      modules: [Pagination, Navigation]
    }
  }
}

</script>

<style scoped>

.pop-up-container{
    background-color: #000000ab !important;
    border-radius: 0 !important;
}

@media (max-width:600px) {
  .pop-up-container{
    background-color: #000000dd !important;
  }
}

.close {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 3;
}

.popup-carousel{
  height: 70%;
  width: 80%;
}

@media (max-width:600px) {
  .popup-carousel{
    height: 85%;
    width: 95%;
  }
}

.ephemere-video{
  height: 60vw;
  max-height: 100%;
  z-index: 2;
}

.progress-circle{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

</style>
