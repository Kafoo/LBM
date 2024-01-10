<template>
  <div :class="mobile?'mt-0':'mt-8'">

    <!-- SEO TITLE -->
    <h1 style="display: none;">Contact</h1>

    <v-img
    :width="mobile?'95%':'100%'"
    :height="windowWidth<750?'200px':'300px'"
    class="contact-image mx-auto"
    cover
    :position="windowWidth>900?'0 40%':windowWidth>600?'0 48%':'0 58%'"
    src="/pictures/contact.jpg"
    >
      <template v-slot:placeholder><AtomsProgress/></template>
    </v-img>
  <v-sheet
  class="d-flex flex-column justify-center canvas backgrounded text--text ma-auto"
  :class="mobile?'align-left pa-0 mt-3 mb-8 mx-auto':'align-center text-center pa-10 mb-8'"
  :width="mobile?'95%':'100%'"
  >
    <div class="mb-3">
      <ContactForm/>
    </div>
  </v-sheet>
  </div>

</template>

<script lang="ts">

import ContactForm from '~/components/organisms/ContactForm.vue'
import { isMobile, useWindowWidth } from '~/ts/functions/composition/displayHelpers'
import { useDisplay } from 'vuetify';

export default{

  name: 'Contact',

  components: { ContactForm },

  props: {
  },

  setup () {
    const display = useDisplay()
    const mobile = isMobile(display)
    const windowWidth = useWindowWidth(display)
    return {
      mobile,
      windowWidth
    }
  }

}

</script>

<style scoped>

</style>