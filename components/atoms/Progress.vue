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

export default {

  name: 'Progress',

  setup () {
    const mobile = isMobile()
    return {
      mobile
    }
  }
}

</script>

<style scoped>

</style>
