<template>
  <v-card
  height="80vh"
  class="pop-up-container">


    <v-btn
      class="close"
      variant="text"
      @click="$emit('close')"
    >
      <v-icon color="white">mdi-close</v-icon>
    </v-btn>

    
    <v-card class="pa-2 centering" height="100%">
      <swiper
        class="popup-carousel mx-0"
        :slidesPerView="1"
        :spaceBetween="30"
        :navigation="true"
        :pagination="{
          clickable: true,
          type: 'fraction'
        }"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :modules="modules"
      >
        <swiper-slide v-for="image in images">
          <v-img :src="image" height="100%">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="white"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </swiper-slide>
      </swiper>
    </v-card>

  </v-card>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { Pagination, Navigation } from 'swiper/modules';

export default {

  name: 'CarouselPopup',

  props: {
    images: {type: Array, default: []}
  },

  setup () {
    const mobile = isMobile()
    return {
      mobile,
      modules: [Pagination, Navigation]
    }
  }
}

</script>

<style scoped>

.pop-up-container{
    background-color: #000000a8 !important;
    border-radius: 0 !important;
}
.close {
  position: absolute;
  right: 10px;
  top: 15px;
  z-index: 2;
}

.popup-carousel{
  height: 70%;
  width: 80%;
}
</style>
