<template>
<svg
xmlns="http://www.w3.org/2000/svg"
:height="mobile?'35':'25'"
:width="mobile?'35':'25'"
:class="color+'-icon'"
viewBox="0 -960 960 960"
><path
d="m480-320 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { useDisplay } from 'vuetify';

export default defineComponent({

  name: 'ArrowIcon',

  props: {
    color: { type: String, default: 'black' }
  },

  setup () {
    const display = useDisplay()
const mobile = isMobile(display)
    return {
      mobile
    }
  }
})

</script>

<style scoped>

.white-icon{
  fill:white
}

</style>
