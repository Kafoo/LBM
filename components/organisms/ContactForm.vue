<template>

  <v-sheet
  class="d-flex justify-center"
  :class="mobile?'flex-column align-center':''"
  >

    <v-sheet
    :width="mobile?'90%':'350px'"
    :max-width="mobile?'350px':''"
    class="mt-8 d-flex flex-column"
    :class="!mobile?'align-end mr-7':'align-start'">
      <ClassicTitle
      :class="mobile?'small line-height-2':'medium'"
      :right="!mobile"
      :left="mobile"
      :text="['Besoin d\'un', 'devis pour votre', 'projet ?']"
      />
      <p
      class="classic-text mt-5"
      :class="mobile?'text-left break-max':'text-right'">
        Nous serons ravis de vous aider que votre projet soit défini ou non !
        Remplissez notre formulaire, nous reviendrons vers vous dans les plus brefs délais.
      </p>
    </v-sheet>

    <v-sheet
    :width="mobile?'90%':'300px'"
    :max-width="mobile?'350px':''"
    class="backgrounded Montserrat--text text--text font-weight-bold mt-5">
      <v-form @submit.prevent>

        <v-text-field
        hide-details
        v-model="firstName"
        autocomplete="LBM"
        label="Nom - Prénom"
        ></v-text-field>

        <v-text-field
        hide-details
        v-model="firstName"
        autocomplete="LBM"
        label="Email"
        ></v-text-field>

        <v-text-field
        hide-details
        v-model="firstName"
        autocomplete="LBM"
        label="Téléphone"
        ></v-text-field>

        <v-text-field
        hide-details
        v-model="firstName"
        autocomplete="LBM"
        label="Type d'événement"
        ></v-text-field>

        <v-select
        hide-details
        autocomplete="LBM"
        label="Nombre d'invités"
        :items="['50 - 150', '150 - 300', '300 - 500', '500 +']"
        ></v-select>

        <v-text-field
        hide-details
        v-model="firstName"
        autocomplete="LBM"
        label="Date de l'événement"
        ></v-text-field>

        <v-textarea
        hide-details
        autocomplete="LBM"
        label="Votre Message"
        no-resize
        rows="2"
        ></v-textarea>
        <div class="submit-container">
          <ClassicButton text="Envoyer"
          :class="mobile?'mt-10':'mt-5'"/>
        </div>
      </v-form>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ClassicButton from '../molecules/ClassicButton.vue'
import ClassicTitle from '../atoms/ClassicTitle.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({

  name: 'ContactForm',

  components: { ClassicButton, ClassicTitle },

  setup () {
    const firstName = undefined
    const mobile = isMobile()

    return {
      firstName,
      mobile
    }
  }
})

</script>

<style scoped>

.submit-container{
  width: 100%;
  display: flex;
  justify-content: right;
}

@media (max-width: 600px) {
.submit-container{
  justify-content: center;
}
}

.v-input{
  font-size: 15px;
}

.classic-text{
  max-width: 200px;
}

.break-max{
  max-width: 100%;
}

</style>
