<template>
  <!--------- TITLE + TEXT + IMAGE --------->
  <v-sheet
  class="centering mx-auto flex-wrap flex-wrap-reverse"
  :class="mobile?'':'mb-15'"
  color="blue">

    <v-sheet
    class="mb-8 d-flex flex-column"
    :class="mobile?'align-center':'pa-2'"
    position="relative"
    >

      <!--------- TITLE + TEXT --------->
      <v-sheet
      :width="mobile?'85%':'450px'"
      class="d-flex flex-column bloc-title-text"
      :class="[mobile?'align-start':'align-end',
      mobile?'mb-5':'ma-auto pr-5']">

        <!--------- TITLE --------->
        <HorizontalDivider/>
        <h2 
        class="my-3 equipe-title backgrounded"
        :class="mobile?'text-left medium':'text-right'">
          {{ $t('nous.equipe.title') }}
        </h2>
        <HorizontalDivider/>

        <!--------- TEXT --------->
        <p
        class="bloc-text backgrounded mt-8"
        :class="mobile?'text-left':'text-right'"
        >{{ $t('nous.equipe.text1') }}</p>
        <p
        class="bloc-text backgrounded"
        :class="mobile?'my-6 text-left':'my-3 text-right'"
        >{{ $t('nous.equipe.text2') }}</p>
        <p
        class="bloc-text backgrounded mt-1"
        :class="mobile?'text-left':'text-right'"
        ><b>{{ $t('nous.equipe.last') }}</b></p>

      </v-sheet>
    </v-sheet>

    <!--------- CAROUSEL --------->
      <swiper
        class="flex-grow-0 nous-carousel mx-0"
        :slidesPerView="mobile?'auto':'auto'"
        :spaceBetween="mobile?10:30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <v-img class="equipe-image" src="/pictures/equipe-1.jpg" alt="team">
          </v-img>
        </swiper-slide>
        <swiper-slide>
          <v-img class="equipe-image" src="/pictures/equipe-2.jpg" alt="team">
          </v-img>
        </swiper-slide>
        <swiper-slide>
          <v-img class="equipe-image" src="/pictures/equipe-3.jpg" alt="team">
          </v-img>
        </swiper-slide>
        <swiper-slide>
          <v-img class="equipe-image" src="/pictures/equipe-4.jpg" alt="team">
          </v-img>
        </swiper-slide>
        <swiper-slide>
          <v-img class="equipe-image" src="/pictures/equipe-5.jpg" alt="team">
          </v-img>
        </swiper-slide>
        <swiper-slide>
          <v-img class="equipe-image" src="/pictures/equipe-6.jpg" alt="team">
          </v-img>
        </swiper-slide>
      </swiper>
  
  </v-sheet>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import HorizontalDivider from '../atoms/HorizontalDivider.vue';
import { Pagination, Autoplay } from 'swiper/modules';
import { useDisplay } from 'vuetify';

export default {

  name: 'NousEquipe',

  components: { HorizontalDivider },

  setup () {
    const display = useDisplay()
    const mobile = isMobile(display)
    return {
      mobile,
      modules: [Pagination, Autoplay]
    }
  }
}

</script>

<style scoped>

.bloc-text{
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
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
    font-size: 15px;
    line-height: 25px;
    text-align: start !important;
    letter-spacing: 0.5px;
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

.equipe-image{
  max-height: 372px;
}

@media (max-width : 600px) {
  .equipe-image{
    max-height: 68vw;
  }
}
</style>
