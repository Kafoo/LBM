<template>

  <v-card
  elevation="0"
  width="100%"
  class="pa-9 d-flex justify-center"
  :class="mobile?'pb-2 pt-6 mb-3':''"
  v-intersect="onIntersect"
  >
    <router-link :to="localePath('/')">
      <v-img
        :width="mobile?'170':'200'"
        aspect-ratio="2.6"
        :max-width="200"
        cover
        src="/TextLogo.png"
        to="/"
        >
          <template v-slot:placeholder><AtomsProgress/></template>
      </v-img>
    </router-link>
  </v-card>

</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
export default {

  name: 'TopLogo',

  setup (props, { emit }) {
    const mobile = isMobile()
    const localePath = useLocalePath()

    // To know if HeadLogo has to be shown in Navigation
    function onIntersect (isIntersecting:any) { emit('visibleHead', !isIntersecting)}

    return {
      mobile,
      onIntersect,
      localePath
    }
  }
}

</script>

<style scoped>

</style>