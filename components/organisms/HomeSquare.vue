<template>
  <v-sheet
  class="d-flex flex-column justify-center canvas backgrounded pa-10 mt-8 text--text"
  :class="mobile?'align-left':'align-center text-center mb-8'"
  width="100%"
  >

    <HorizontalDivider class="mt-5 mb-1"/>
    <h2
    class="medium my-2 line-spaced"
    :class="mobile?'text-left':''"
    >
      We think out of the box
    </h2>
    <HorizontalDivider class="mt-2 mb-5"/>

    <span class="classic-text py-5 mb-5">
      {{ $t('home.square.text') }}
    </span>

    <h3
    class="xsmall mt-3 mb-5 text-left"
    >
      {{ $t('home.square.why') }}
    </h3>

    <v-sheet
    class="d-flex justify-center mt-5 canvas"
    max-width="900px"
    :class="mobile?'flex-column align-center':''"
    >
      <div class="d-flex flex-column align-center mb-5">
        <v-icon color="black" size="40px" class="mb-1">mdi-check-circle-outline</v-icon>
        <span
        class="classic-text text-center checked-text px-2 py-1"
        :class="mobile?'font-weight-bold':''"
        >{{ $t('home.square.reason1') }}</span>
      </div>
      <div class="d-flex flex-column align-center mb-5">
        <v-icon color="black" size="40px" class="mb-1">mdi-check-circle-outline</v-icon>
        <span
        class="classic-text text-center checked-text px-2 py-1"
        :class="mobile?'font-weight-bold':''"
        >{{ $t('home.square.reason2') }}</span>
      </div>
      <div class="d-flex flex-column align-center mb-5">
        <v-icon color="black" size="40px" class="mb-1">mdi-check-circle-outline</v-icon>
        <span
        class="classic-text text-center checked-text px-2 py-1"
        :class="mobile?'font-weight-bold':''"
        >{{ $t('home.square.reason3') }}</span>
      </div>
    </v-sheet>
    <ClassicButton class="mt-4"
    :text="$t('cta.contact')"
    :to="localePath('/contact')"/>
  </v-sheet>
</template>

<script lang="ts">

import HorizontalDivider from '../atoms/HorizontalDivider.vue'
import ClassicButton from '../molecules/ClassicButton.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'
import { useDisplay } from 'vuetify';

export default {
  name: 'HomeSquare',
  setup () {
    const display = useDisplay()
    const mobile = isMobile(display)
    const localePath = useLocalePath()
    return {
      mobile,
      localePath
    }
  },
  components: { HorizontalDivider, ClassicButton }
}

</script>

<style scoped>

.checked-text{
  max-width: 250px;
}

@media (max-width: 600px) {
.checked-text{
  line-height: 25px;
}
}

</style>
