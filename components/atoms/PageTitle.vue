<template>
  <div>
    <!--------- DESKTOP TITLE --------->

      <v-sheet
      v-if="!mobile"
      class="ma-6 mt-15 mb-10 d-flex flex-column align-center"
      position="relative">
        <HorizontalDivider/>
        <h1 class="mt-4 mb-5 letter-spaced">
          {{ text }}
        </h1>

        <HorizontalDivider/>

    </v-sheet>

    <!--------- MOBILE TITLE -------->

    <v-sheet
    v-else
    class="mx-0 mt-15 mb-10 d-flex flex-column align-center"
    position="relative">
        <hr/>
        <h1
        class="mobile-page-title text-text text-uppercase text-center my-4"
        >
          {{ text }}
        </h1>
        <hr/>

    </v-sheet>
  </div>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import HorizontalDivider from './HorizontalDivider.vue';
import { useDisplay } from 'vuetify';

export default {

  name: 'PageTitle',

  props: {
    text: { type: String, default: ''}
  },

  components: { HorizontalDivider },

  setup () {
    const display = useDisplay()
const mobile = isMobile(display)
    return {
      mobile
    }
  }
}

</script>
  
<style scoped>

.mobile-page-title{
  font-size: 18px;
  font-family: 'Montserrat';
  letter-spacing: 6px;
  font-weight: bolder;
  text-shadow: 1px 0px 0 black;
}

hr {
  border: none;
  border-top: 3px solid black;
  color: #333;
  height: 4px;
  width: 25px;
}

</style>
