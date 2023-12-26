<template>
  <v-sheet
  class="d-flex flex-column justify-center canvas backgrounded pa-10 mt-8 mb-8 text--text"
  :class="mobile?'align-left':'align-center text-center'"
  width="100%"
  >
    <HorizontalDivider class="mt-5 mb-2"/>
    <ClassicTitle
    color='text'
    :text="['We think out of the box']"
    class="medium wrap-text my-2"
    wrap
    :left="mobile"
    />
    <HorizontalDivider class="mt-1 mb-5"/>
    <span class="classic-text py-5 mb-5">
      Nous transformons vos désirs en réalité, avec un engagement particulier pour dépasser vos attentes.
      Notre approche collaborative permet de créer l’événement de manière à refléter fidèlement l’essence même de
      nos clients et de les surprendre.
    </span>
    <ClassicTitle
    color='text'
    left
    :text="['Pourquoi travailler ensemble ?']"
    class="xsmall mt-3 mb-5 wrap-text"
    wrap
    />
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
        >Pour notre parfaite connaissance de l’industrie du travel retail.</span>
      </div>
      <div class="d-flex flex-column align-center mb-5">
        <v-icon color="black" size="40px" class="mb-1">mdi-check-circle-outline</v-icon>
        <span
        class="classic-text text-center checked-text px-2 py-1"
        :class="mobile?'font-weight-bold':''"
        >Pour notre connaissance approfondie des codes et des exigences de votre secteur d’activité.</span>
      </div>
      <div class="d-flex flex-column align-center mb-5">
        <v-icon color="black" size="40px" class="mb-1">mdi-check-circle-outline</v-icon>
        <span
        class="classic-text text-center checked-text px-2 py-1"
        :class="mobile?'font-weight-bold':''"
        >Pour le serieux et la légitimité d’une agence reconnue dans le milieu depuis plus de 25 ans.</span>
      </div>
    </v-sheet>
    <ClassicButton class="mt-4"
    text="Contactez-nous"
    to="/contact"/>
  </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import HorizontalDivider from '../atoms/HorizontalDivider.vue'
import ClassicTitle from '../atoms/ClassicTitle.vue'
import ClassicButton from '../molecules/ClassicButton.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({
  name: 'HomeSquare',
  setup () {
    const mobile = isMobile()
    return {
      mobile
    }
  },
  components: { HorizontalDivider, ClassicTitle, ClassicButton }
})

</script>

<style scoped>

.canvas{
  background-color: #F1EFE6 !important;
}
.checked-text{
  max-width: 250px;
}

@media (max-width: 600px) {
.checked-text{
  line-height: 25px;
}
}
.wrap-text{
  line-height: 34px;
}

</style>
