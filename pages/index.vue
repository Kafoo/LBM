<template>

  <div class="relative">

    <HomePicture
    v-if="mobile"
    class="mt-3"/>

    <v-container v-else>
      <HomePicture/>
    </v-container>

    <v-container>

      <HomeServices/>

      <v-sheet
      class="centering mt-6 desktop">
        <ClassicButton text="découvrez nos créations" to="/creations"/>
      </v-sheet>

    </v-container>

    <HomeSquare/>

    <v-container v-if="!mobile" class="mb-15">
      <ContactForm/>
    </v-container>

    <HomeCarousel/>

    <Confiance/>

    <v-container v-if="mobile" class="mb-3">
      <ContactForm/>
    </v-container>

  </div>

</template>

<script lang="ts">


import HomePicture from '~/components/organisms/HomePicture.vue'
import ClassicButton from '~/components/molecules/ClassicButton.vue'
import ContactForm from '~/components/organisms/ContactForm.vue'
import HomeServices from '~/components/organisms/HomeServices.vue'
import HomeSquare from '~/components/organisms/HomeSquare.vue'
import HomeCarousel from '~/components/organisms/HomeCarousel.vue'
import Confiance from '~/components/organisms/Confiance.vue'

import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default{

  name: 'Home',

  components: { ClassicButton, HomeServices, ContactForm, HomePicture, HomeSquare, HomeCarousel, Confiance },

  props: {
    text: {
      type: Array as () => Array<string>,
      default () {
        return []
      }
    },
    spaced: { type: Boolean, default: false },
    color: { type: String, default: 'text' },
    wrap: { type: Boolean, default: true },
    right: { type: Boolean, default: false },
    left: { type: Boolean, default: false }
  },

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