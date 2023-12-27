<template>
  <v-sheet>

    <hr v-if="!mobile" class="mb-4"/>

    <FooterImage/>

    <FooterInfosDesktop v-if="!mobile"/>

    <v-sheet
    v-if="mobile"
    class="d-flex justify-center flex-grow-1 align-center"
    :class="mobile?'flex-column':''"
    >
      <v-sheet class="ma-5">
        <v-img
        src="/HeadTextLogo.png"
        width="160px"
        >
        </v-img>
      </v-sheet>

      <v-sheet class='footer-infos mx-3 mb-9 d-flex flex-column align-center'>
        <v-sheet class="font-weight-bold mb-5">PARIS - CANNES - BARCELONE</v-sheet>
        <v-icon class="ma-2" color="black">mdi-cellphone</v-icon>
        <v-sheet class="mb-3">+33 (0)6 84 58 67 64</v-sheet>
        <v-icon class="ma-2" color="black">mdi-email</v-icon>
        <v-sheet class="mb-7">nadia@lesbonnesmanieres.paris</v-sheet>
        <SocialsIcons mobile/>
      </v-sheet>
    </v-sheet>

    <div class="centering">
      <v-sheet
      v-if="mobile"
      class="mx-2 mb-3 d-flex flex-wrap footer-activities">
        <span
        v-for="activity in activities"
        :key="activity.name"
        class="mr-2"
        >
          - {{ activity.name }}
        </span>
      </v-sheet>
    </div>

    <v-footer
    color="secondary"
    class="text-wrap text-white backgrounded Montserrat mentions-légales mt-3"
    :class="mobile?'':'text-center justify-space-around'"
    >
      <div>
        site officiel : tous droits réservés les bonnes manières - © 2023 - <u>mentions légales</u>
      </div>
    </v-footer>
  </v-sheet>
</template>

<script lang="ts">

import SocialsIcons from '../atoms/SocialsIcons.vue'
import FooterImage from '../molecules/FooterImage.vue'
import FooterInfosDesktop from '../molecules/FooterInfosDesktop.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({

  components: { SocialsIcons, FooterImage, FooterInfosDesktop },

  name: 'DefaultLayout',
  setup () {
    const mobile = isMobile()

    const activitesColumn1 = [
      { name: 'Concept créatif' },
      { name: 'Stratégie digitale, physique, hybride' },
      { name: 'Création de contenu' },
      { name: 'Design graphique' },
      { name: 'Pop-up store' }
    ]
    const activitesColumn2 = [
      { name: 'Scénographie et design d’espace' },
      { name: 'Logistique et Production' },
      { name: 'Technique' },
      { name: 'Soirées corporate' },
      { name: 'Séminaires d’entreprise' }
    ]

    const activities = activitesColumn1.concat(activitesColumn2)

    return {
      mobile,
      activitesColumn1,
      activitesColumn2,
      activities
    }
  }
})
</script>

<style scoped>

hr{
  margin: 30px 0 50px 0;
  border: none;
  border-top: 1px solid black;
  color: black;
  height: 2px;
}
.v-footer{
  font-family: 'Montserrat';
  font-size: small;
}

.mentions-légales{
  letter-spacing: 1px;
  font-size: 12px;
  line-height: 17px;
  padding: 15px 38px;
}

.home-picture{
  background-image: url('static/pictures/Home.jpg');
  background-size: contain;
  background-position: 0px -150px;
}

.footer-infos{
  font-family: 'Montserrat';
  font-size: 18px;
}

.footer-infos .v-icon{
  border: 2px solid black;
  border-radius: 50px;
  width: 45px;
  height: 45px;
}

.footer-activities{
  font-family: 'Montserrat';
  line-height: 24px;
  max-width: 80%;
  font-size: 13px;
  margin-bottom: 0px;
}

</style>
