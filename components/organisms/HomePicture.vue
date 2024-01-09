<template>
  <div>
    <v-sheet
    style="position: relative;"
    class="d-flex flex-column justify-center align-center ma-auto mb-7"
    width="100%"
    :height="mobile?'600px':'350px'"
    >
      <v-img
      width="100%"
      height="100%"
      cover
      src="/pictures/Home.jpg"
      >
        <template v-slot:placeholder><Progress/></template>
      </v-img>
      
      <div style="position: absolute;" class="d-flex flex-column align-center">
        <ClassicTitle
        v-if="mobile"
        color='white'
        spaced
        :text="['Anything,', 'Anytime,', 'Anywhere']"
        />

        <ClassicTitle
        v-else
        color='white'
        :text="['Anything, Anytime, Anywhere']"/>

        <ClassicButton
        class="mt-7"
        :text="$t('cta.expertise')"
        :to="localePath('/expertise')"
        color="white"
        />
      </div>

      <ArrowIcon
      v-if="mobile"
      style="position: absolute;bottom: 35px;"
      color="white"
      />

    </v-sheet>

    <div
    v-if="!mobile"
    class="centering mb-10">
      <ArrowIcon/>
    </div>

  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ArrowIcon from '~/components/atoms/ArrowIcon.vue'
import ClassicTitle from '~/components/atoms/ClassicTitle.vue'
import ClassicButton from '~/components/molecules/ClassicButton.vue'
import Progress from '../atoms/Progress.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'
import { useDisplay } from 'vuetify';

export default defineComponent({

  name: 'HomePicture',

  components: { ClassicTitle, ClassicButton, ArrowIcon, Progress },

  setup () {
    const display = useDisplay()
    const mobile = isMobile(display)
    const localePath = useLocalePath()
    return {
      mobile,
      localePath
    }
  },
})

</script>

<style scoped>

</style>
