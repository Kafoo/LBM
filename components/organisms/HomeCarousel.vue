<template>
  <swiper
    :slidesPerView="mobile?'auto':'auto'"
    :spaceBetween="mobile?0:30"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
    :modules="modules"
  >
    <swiper-slide v-if="!mobile"><img src="/pictures/dior-ailes.jpg"></swiper-slide>
    <swiper-slide><img src="/pictures/parachute.jpg"></swiper-slide>
    <swiper-slide><img src="/pictures/soiree-rose.jpg"></swiper-slide>
    <swiper-slide><img src="/pictures/fingers.jpg"></swiper-slide>
    <swiper-slide><img src="/pictures/fish.jpg"></swiper-slide>
  </swiper>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { Pagination, Autoplay } from 'swiper/modules';

export default defineComponent({

  name: '',

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

.swiper{
  height: 600px;
  width: 90%;
  margin-bottom: 150px;
}

@media (max-width : 1000px) {
  .swiper{
    height: 500px;
  }
}

@media (max-width : 600px) {
  .swiper{
    height: 400px;
    width: 100%;
    margin-bottom: 80px;
  }
}

img{
  height: 100%;
}

.swiper-slide { width: auto; }

</style>
