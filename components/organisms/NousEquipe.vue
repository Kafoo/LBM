<template>
  <v-sheet
  class="centering mx-auto flex-wrap flex-wrap-reverse"
  :class="mobile?'':'mb-15'"
  color="blue">

    <!--------- TITLE + TEXT + IMAGE --------->
    <v-sheet
    class="mb-8 d-flex flex-column backgrounded"
    :class="mobile?'align-center':'pa-2'"
    position="relative"
    >

      <!--------- TITLE + TEXT --------->
      <v-sheet
      :width="mobile?'85%':'450px'"
      class="d-flex flex-column bloc-title-text"
      :class="[mobile?'align-start':'align-end',
      mobile?'mb-5':'ma-auto pr-10']">

        <!--------- TITLE --------->
        <HorizontalDivider/>
        <ClassicTitle
        class="mt-3 mb-4 small"
        :text="[$t('nous.equipe.title')]"
        :class="mobile?'medium':''"
        :left="mobile"
        :right="!mobile"/>
        <HorizontalDivider/>

        <!--------- TEXT --------->
        <p
        class="bloc-text mt-8"
        :class="mobile?'text-left':'text-right'"
        >{{ $t('nous.equipe.text') }}</p>
        <p
        class="bloc-text mt-1"
        :class="mobile?'text-left':'text-right'"
        ><b>{{ $t('nous.equipe.last') }}</b></p>

      </v-sheet>
    </v-sheet>

    <!--------- CAROUSEL --------->
      <swiper
        class="flex-grow-0 nous-carousel mx-0"
        :slidesPerView="mobile?'auto':'auto'"
        :spaceBetween="mobile?10:30"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :modules="modules"
      >
        <swiper-slide><v-img src="/pictures/equipe-1.jpg"></v-img></swiper-slide>
        <swiper-slide><v-img src="/pictures/equipe-2.jpg"></v-img></swiper-slide>
        <swiper-slide><v-img src="/pictures/equipe-3.jpg"></v-img></swiper-slide>
        <swiper-slide><v-img src="/pictures/equipe-4.jpg"></v-img></swiper-slide>
        <swiper-slide><v-img src="/pictures/equipe-5.jpg"></v-img></swiper-slide>
      </swiper>
  
  </v-sheet>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import ClassicTitle from '../atoms/ClassicTitle.vue';
import HorizontalDivider from '../atoms/HorizontalDivider.vue';
import { Pagination, Autoplay } from 'swiper/modules';

export default {

  name: 'NousEquipe',

  components: { ClassicTitle, HorizontalDivider },

  setup () {
    const mobile = isMobile()
    return {
      mobile,
      modules: [Pagination, Autoplay]
    }
  }
}

</script>

<style scoped>

.bloc-text{
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
}

@media (max-width:982px) {
  .bloc-title-text{
    align-items: center !important;
    margin-right: 0 !important;
    margin-top: 30px !important;
  }

  .bloc-text{
    text-align: center !important;
  }
}

@media (max-width:600px) {
  .bloc-text{
    font-size: 18px;
    line-height: 28px;
    text-align: start !important;
  }

  .bloc-title-text{
    align-items: start !important;
  }

}

.swiper{
  height: 400px;
  width: 500px;
  margin-bottom: 10px;
}

@media (max-width : 600px) {
  .swiper{
    height: auto;
    width: 95%;
  }
}

</style>
