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
        variant="underlined"
        v-model="firstName"
        autocomplete="LBM"
        label="Nom - Prénom"
        >
          <template v-slot:prepend-inner>
            <v-icon size="20">mdi-account</v-icon>
          </template>
        </v-text-field>

        <v-text-field
        hide-details
        variant="underlined"
        v-model="firstName"
        autocomplete="LBM"
        label="Email"
        >
          <template v-slot:prepend-inner>
            <v-icon size="20">mdi-email</v-icon>
          </template>
        </v-text-field>

        <v-text-field
        hide-details
        variant="underlined"
        v-model="firstName"
        autocomplete="LBM"
        label="Téléphone"
        >
          <template v-slot:prepend-inner>
            <v-icon size="20">mdi-phone</v-icon>
          </template>
        </v-text-field>

        <v-text-field
        hide-details
        variant="underlined"
        v-model="firstName"
        autocomplete="LBM"
        label="Type d'événement"
        >
          <template v-slot:prepend-inner>
            <v-icon size="20">mdi-star</v-icon>
          </template>
        </v-text-field>

        <v-select
        hide-details
        variant="underlined"
        autocomplete="LBM"
        label="Nombre d'invités"
        :items="['50 - 150', '150 - 300', '300 - 500', '500 +']"
        >
          <template v-slot:prepend-inner>
            <svg height="20" viewBox="0 -960 960 960" width="20"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z"/></svg>
          </template>
        </v-select>

        <v-text-field
        hide-details
        variant="underlined"
        v-model="firstName"
        autocomplete="LBM"
        label="Date de l'événement"
        >
          <template v-slot:prepend-inner>
            <v-icon size="20">mdi-calendar-month</v-icon>
          </template>
        </v-text-field>

        <v-textarea
        hide-details
        variant="underlined"
        autocomplete="LBM"
        label="Votre Message"
        no-resize
        rows="2"
        >
          <template v-slot:prepend-inner>
            <svg height="20" viewBox="0 -960 960 960" width="20"><path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Z"/></svg>
          </template>
        </v-textarea>
        <div class="submit-container">
          <ClassicButton text="Envoyer"
          :class="mobile?'mt-10':'mt-5'"
          bold/>
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
    const firstName = ref(undefined)
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

svg{
  margin: 0 2px;
  padding: 1px;
  fill: grey;
}

.v-icon{
  margin: 0 1px
}

.classic-text{
  max-width: 200px;
}

.break-max{
  max-width: 100%;
}

</style>
