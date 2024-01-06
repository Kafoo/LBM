<template>
  <swiper
    class="home-carousel"
    :slidesPerView="mobile?'auto':'auto'"
    :spaceBetween="mobile?0:30"
    :loop="mobile"
    :allowTouchMove="false"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: !mobile
    }"
    :modules="modules"
  >
    <swiper-slide class="slide" v-if="!mobile"><img src="/pictures/dior-ailes.jpg"></swiper-slide>
    <swiper-slide class="slide" v-if="mobile"><img src="/pictures/bar.jpg"></swiper-slide>
    <swiper-slide class="slide"><img src="/pictures/parachute.jpg"></swiper-slide>
    <swiper-slide class="slide"><img src="/pictures/soiree-rose.jpg"></swiper-slide>
    <swiper-slide class="slide"><img src="/pictures/fingers.jpg"></swiper-slide>
    <swiper-slide class="slide"><img src="/pictures/fish.jpg"></swiper-slide>
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

.swiper-slide { width: auto; }

@media (max-width : 1000px) {
  .swiper{
    height: 500px;
  }
}

@media (max-width : 600px) {
  .swiper{
    height: 70vw;
    width: 100%;
    margin-bottom: 80px;
  }

  .slide, .slide img{
    width: 50vw;
  }
}

img{
  height: 100%;
}

</style>
