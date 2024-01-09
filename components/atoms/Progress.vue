<template>
    <v-row class="fill-height ma-0" align="center" justify="center">
      <v-progress-circular
        indeterminate
        color="#676767"
      ></v-progress-circular>
    </v-row>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { useDisplay } from 'vuetify';

export default {

  name: 'Progress',

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

</style>
