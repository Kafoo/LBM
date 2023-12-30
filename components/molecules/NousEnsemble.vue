<template>
  <v-sheet
  position="relative"
  class="centering ma-auto backgrounded"
  :height="mobile?'400px':'500px'"
  :min-width="mobile?'100px':''"
  >
    <v-sheet class="ensemble-text-container backgrounded pb-3 pt-1 mx-5">
      <v-sheet
      class="ensemble-text text-text text-center text-uppercase py-3"
      >Ensemble ils fondent les bonnes manières</v-sheet>
    </v-sheet>
    <v-img
    src="ensemble.svg"
    height="100%"
    max-width="90%"
    ></v-img>
  </v-sheet>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';

export default {

  name: '',

  setup () {
    const mobile = isMobile()
    return {
      mobile
    }
  }
}

</script>

<style scoped>

.ensemble-text-container{
  position: absolute;
  letter-spacing: 4px;
  bottom: 380px;
  z-index: 3;
}
.ensemble-text{
  font-family: 'Yeseva One';
  letter-spacing: 4px;
  border-bottom: 1px solid #9f8c4e;
}

@media (max-width:600px) {
  .ensemble-text-container{
    bottom: 285px;
  }
}
</style>
