<template>
<v-sheet class="d-flex justify-space-around align-center flex-wrap text-black">
        <v-sheet
        class="d-flex justify-center flex-grow-1 align-center my-3"
        >
          <v-sheet class="mr-5">
            <v-img
            src="/HeadTextLogo.png"
            width="120px"
            alt="headlogo"
            >
            </v-img>
          </v-sheet>

          <v-sheet class='footer-contact mx-3'>
            <v-sheet class="font-weight-bold">PARIS - CANNES - BARCELONE</v-sheet>
            <v-sheet class="selectable-text">
              <a href="tel:+33684586764">
                <v-icon size="17px">mdi-cellphone</v-icon>
              </a> +33 (0)6 84 58 67 64
            </v-sheet>
            <v-sheet class="selectable-text">
              <a href="mailto:nadia@lesbonnesmanieres.paris">
                <v-icon size="17px">mdi-email</v-icon>
              </a> nadia@lesbonnesmanieres.paris
            </v-sheet>
            <SocialsIcons/>
          </v-sheet>
        </v-sheet>

        <v-sheet
        class="d-flex justify-center flex-grow-1 align-center footer-activities my-3"
        >
          <v-sheet class="mx-3 mr-5 d-flex flex-column">
            <span v-for="n in 5">- {{$t('footer.activities['+(n-1)+']')}}</span>
          </v-sheet>
          <v-sheet class="mx-3 d-flex flex-column">
            <span v-for="n in 5">- {{$t('footer.activities['+(n+4)+']')}}</span>
          </v-sheet>
        </v-sheet>

    </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import SocialsIcons from '../atoms/SocialsIcons.vue'

export default defineComponent({

  name: 'FooterInfosDesktop',

  components: { SocialsIcons },

  setup () {
    const { t } = useI18n()
    const activities = [
      { name: t('footer.activities[0]') },
      { name: t('footer.activities[1]') },
      { name: t('footer.activities[2]') },
      { name: t('footer.activities[3]') },
      { name: t('footer.activities[4]') },
      { name: t('footer.activities[5]') },
      { name: t('footer.activities[6]') },
      { name: t('footer.activities[7]') },
      { name: t('footer.activities[8]') },
      { name: t('footer.activities[9]') },
    ]


    return {
      activities
    }
  }
})

</script>

<style scoped>

.v-footer{
  font-family: 'Montserrat';
  font-size: small;
}

p{
  font-family: 'Montserrat';
  line-height: 20px;
  margin-bottom: 0px;
}

.footer-contact{
  font-family: 'Montserrat';
  font-size: 12px;
  line-height: 25px;
}

.footer-activities{
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 0px;
  letter-spacing: 1px;
}

</style>
