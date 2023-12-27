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
      ></v-img>
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
        to="/expertise"
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
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({

  name: '',

  setup () {
    const mobile = isMobile()
    
    return {
      mobile
    }
  },
  components: { ClassicTitle, ClassicButton, ArrowIcon }
})

</script>

<style scoped>

</style>
