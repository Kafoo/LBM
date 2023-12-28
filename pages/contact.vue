<template>
  <div :class="mobile?'mt-0':'mt-8'">
    <v-img
    :width="mobile?'95%':'100%'"
    class="contact-image mx-auto"
    cover
    :position="windowWidth>900?'0 40%':windowWidth>600?'0 48%':'0 58%'"
    src="/pictures/contact.jpg"
    ></v-img>
  <v-sheet
  class="d-flex flex-column justify-center canvas backgrounded text--text ma-auto"
  :class="mobile?'align-left pa-2 mt-3 mb-8 mx-auto':'align-center text-center pa-10 mb-8'"
  :width="mobile?'95%':'100%'"
  >
    <v-container class="mb-3">
      <ContactForm/>
    </v-container>
  </v-sheet>
  </div>

</template>

<script lang="ts">

import ContactForm from '~/components/organisms/ContactForm.vue'

import { isMobile, useWindowWidth } from '~/ts/functions/composition/displayHelpers'

export default{

  name: 'Contact',

  components: { ContactForm },

  props: {
  },

  setup () {
    const mobile = isMobile()
    const windowWidth = useWindowWidth()
    return {
      mobile,
      windowWidth
    }
  }

}

</script>

<style scoped>


.contact-image{
  height: 300px;
}

@media (max-width:750px) {
.contact-image{
  height: 200px;
}
}

</style>