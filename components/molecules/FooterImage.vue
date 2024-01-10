<template>
    <v-sheet
    class="d-flex flex-column justify-center align-center ma-auto mb-5"
    :width="mobile?'100%':'90%'"
    :height="mobile?'280px':'250px'"
    >
      <v-img
      width="100%"
      height="100%"
      cover
      src="/pictures/Home.jpg"
      alt="footer"
      >
        <template v-slot:placeholder><AtomsProgress/></template>
      </v-img>

      <h3
      style="position: absolute;"
      class="text-white line-spaced"
      :class="mobile?'xsmall':'small'"
      >
        <span>Let's share who we are</span><br>
        <span>watch what we do.</span>
      </h3>

      <!--
      <ClassicTitle
      style="position: absolute;"
      color='white'
      :class="mobile?'xsmall':'small'"
      :text="['Let\'s share who we are', 'watch what we do.']"
      />
      -->

    </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ClassicTitle from '../atoms/ClassicTitle.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'
import { useDisplay } from 'vuetify';

export default defineComponent({

  components: { ClassicTitle },

  name: '',

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

</style>
