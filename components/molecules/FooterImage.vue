<template>
    <v-sheet
    class="d-flex flex-column justify-center align-center ma-auto "
    :width="mobile?'100%':'90%'"
    height="250px">
      <v-img
      width="100%"
      height="100%"
      cover
      class="mb-3"
      src="/pictures/Home.jpg"
      ></v-img>
      <ClassicTitle
      style="position: absolute;"
      color='white'
      :class="mobile?'xsmall':'small'"
      :text="['Let\'s share who we are', 'watch what we do.']"
      />

    </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ClassicTitle from '../atoms/ClassicTitle.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({

  components: { ClassicTitle },

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
