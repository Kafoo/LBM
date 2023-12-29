<template>
  <v-sheet 
  v-if="!mobile"
  class="backgrounded">
    <hr class="mb-4 mt-0"/>

      <v-sheet class="centering-column">
        <span class="Montserrat--text text-uppercase">{{ $t('confiance') }}</span>
      </v-sheet>

    <hr class="mt-4 mb-13
    "/>

    <v-sheet class="d-flex flex-wrap justify-center mx-auto mb-8 brand-container">
      <div
      v-for="brand in brands"
      class="centering flex-grow-0 ma-3"
      style="width: 150px;">
        <v-img
        class="flex-grow-0"
        :src="'/brands/'+brand.name+'.svg'"
        :width="brand.size*150"
        ></v-img>
      </div>
    </v-sheet>
  </v-sheet>

  <v-sheet 
  v-else
  class="backgrounded">
    <hr class="mb-6 mt-3"/>

      <v-sheet class="centering-column">
        <span class="Montserrat--text text-uppercase confiance-mobile-title mb-6 mt-1">
          {{ $t('confiance') }}
        </span>
      </v-sheet>

      <swiper
        :slidesPerView="'auto'"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :modules="modules"
      >
        <swiper-slide
        v-for="brand in brands"
        style="width: 150px;"
        >
          <v-img
          :src="'/brands/'+brand.name+'.svg'"
          :height="brand.size*88"
          :width="brand.size*150"
          ></v-img>
        </swiper-slide>
      </swiper>

    <hr class="mt-7 mb-0"/>

  </v-sheet>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { Autoplay } from 'swiper/modules';

export default defineComponent({

  name: 'Confiance',

  setup () {
    const mobile = isMobile()

    const brands = [
      {name:'givenchy', size:1},
      {name:'guerlain', size:1},
      {name:'piaff', size:1},
      {name:'dior', size:1},
      {name:'clarins', size:1},
      {name:'fresh', size:1},
      {name:'bertrand', size:1},
      {name:'interparfums', size:1},
      {name:'kaviari', size:1},
      {name:'kenzo', size:1},
      {name:'stag', size:1},
      {name:'lvmh', size:0.7},
      {name:'francis', size:1},
      {name:'makeup', size:1},
      {name:'valrhona', size:1}
    ]

    return {
      mobile,
      brands,
      modules: [Autoplay]
    }
  }
})

</script>

<style scoped>

hr{
  margin: 30px 0 50px 0;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.421);
  color: black;
}

@media (max-width:600px) {
  hr{
    width: 83%;
    margin-right: auto ;
    margin-left: auto ;
  }

  .swiper{
    width: 83%;
  }
}

.brand-container{
  max-width: 900px;
}

@media (max-width:920px) {
  .brand-container{
    max-width: 650px;
  }
}

.confiance-mobile-title{
  font-weight: bold;
  font-size: 15px;
}
</style>
