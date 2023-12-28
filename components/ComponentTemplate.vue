<template>
  <div></div>
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

</style>
