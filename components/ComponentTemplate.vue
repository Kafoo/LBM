<template>
  <div></div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers';

export default defineComponent({

  name: '',

  setup () {
    const mobile = isMobile()
    return {
      mobile
    }
  }
})

</script>

<style scoped>

</style>
