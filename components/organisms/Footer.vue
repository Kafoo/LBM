<template>
  <v-sheet class="backgrounded mt-6">

    <hr v-if="!mobile" class="mb-4 mt-0"/>

    <FooterImage/>

    <FooterInfosDesktop v-if="!mobile"/>

    <v-sheet
    v-if="mobile"
    class="d-flex justify-center flex-grow-1 align-center"
    :class="mobile?'flex-column':''"
    >
      <v-sheet class="ma-5 mb-0">
        <v-img
        src="/HeadTextLogo.png"
        width="160px"
        height="160px"
        alt="headlogo"
        >
        </v-img>
      </v-sheet>

      <v-sheet class='footer-infos mx-3 mb-9 d-flex flex-column align-center'>
        <v-sheet class="font-weight-bold mb-5 footer-locations">PARIS - CANNES - BARCELONE</v-sheet>
        <a href="tel:+33684586764">
          <v-icon class="ma-2" color="black">mdi-cellphone</v-icon>
        </a>
        <v-sheet href="tel:+33684586764" class="mb-3 selectable-text">+33 (0)6 84 58 67 64</v-sheet>
        <a href="mailto:nadia@lesbonnesmanieres.paris">
          <v-icon class="ma-2" color="black">mdi-email</v-icon>
        </a>
        <v-sheet class="mb-7 selectable-text">nadia@lesbonnesmanieres.paris</v-sheet>
        <SocialsIcons mobile/>
      </v-sheet>
    </v-sheet>

    <div class="centering">
      <v-sheet
      v-if="mobile"
      class="mx-2 mb-3 d-flex flex-wrap footer-activities">
        <span
        v-for="n in 10"
        class="mr-2"
        >
          - {{$t('footer.activities['+(n-1)+']')}}
        </span>
      </v-sheet>
    </div>

    <v-footer
    color="secondary"
    class="text-wrap text-white backgrounded Montserrat mentions-légales mt-3"
    :class="mobile?'':'text-center justify-space-around'"
    >
      <div>
        {{ $t('footer.legal') }}
        <u>
          <nuxt-link :to="localePath('/legals')" @click.stop="scrollUp">{{ $t('footer.uLegal') }}</nuxt-link>
        </u>
      </div>
    </v-footer>
  </v-sheet>
</template>

<script lang="ts">

import SocialsIcons from '../atoms/SocialsIcons.vue'
import FooterImage from '../molecules/FooterImage.vue'
import FooterInfosDesktop from '../molecules/FooterInfosDesktop.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'
import { useDisplay } from 'vuetify';

export default defineComponent({

  components: { SocialsIcons, FooterImage, FooterInfosDesktop },

  name: 'DefaultLayout',
  data () {
    const display = useDisplay()
const mobile = isMobile(display)
    const { t } = useI18n()
    const localePath = useLocalePath()

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

    const scrollUp = () => {
      const path = this.$router.currentRoute.value.path
      const localePath = useLocalePath()
      if (path == localePath('/legals')) {
        window.scrollTo(0, 0)
      }
    }

    return {
      mobile,
      activities,
      scrollUp
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

.footer-locations{
  font-size: 10px;
  font-weight: bolder;
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
