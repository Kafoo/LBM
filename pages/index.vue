<template>

  <div class="relative">

    <HomePicture v-if="mobile" />

    <v-container v-else>
      <HomePicture/>
    </v-container>

    <v-container :class="mobile?'mt-12':''">

      <HomeServices/>

      <v-sheet
      class="centering mt-6 desktop">
        <ClassicButton
        class="backgrounded"
        :text="$t('cta.creations')"
        :to="localePath('/creations')"/>
      </v-sheet>

    </v-container>

    <HomeSquare :class="mobile?'mt-15':''"/>

    <v-container v-if="!mobile" class="mb-15">
      <ContactForm backgrounded/>
    </v-container>

    <HomeCarousel/>

    <Confiance/>

    <div v-if="mobile" class="mb-3 mt-8 mx-2">
      <ContactForm backgrounded/>
    </div>

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
import { useDisplay } from 'vuetify';
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
    const display = useDisplay()
const mobile = isMobile(display)
    const localePath = useLocalePath()
    return {
      mobile,
      localePath
    }
  }

}

</script>

<style scoped>

</style>