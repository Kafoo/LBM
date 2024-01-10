<template>

  <v-app-bar
  app
  absolute
  elevation="0"
  height="60"
  class="mt-0 mb-2 px-4 sticky-header desktop"
  :class="head ? 'backgrounded' : 'transparent'"
  >

    <v-toolbar-items class="centering" style="position: absolute; left: 10px;">
      <v-img
      style="cursor: pointer;"
      class="mr-3"
      :class="
      head ? 'visible' : 'invisible'"
      src="/HeadLogo.png"
      width="40px"
      height="60px"
      @click.stop="goHome"
      alt="headlogo"
      >
      </v-img>
      <SocialsIcons class="hideOn920"/>
    </v-toolbar-items>

    <NavigationVue/>

    <ChooseLocation/>

  </v-app-bar>

</template>

<script lang="ts">

import NavigationVue from '~/components/molecules/Navigation.vue'
import SocialsIcons from '~/components/atoms/SocialsIcons.vue'
import ChooseLocation from '~/components/atoms/ChooseLocation.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'
import { useDisplay } from 'vuetify';

export default {

  name: 'DefaultLayout',

  components: { NavigationVue, SocialsIcons, ChooseLocation },

  props: {
    head: Boolean
  },

  data () {

    const display = useDisplay()
    const mobile = isMobile(display)
    const localePath = useLocalePath()

    const goHome = () => {
      const path = this.$router.currentRoute.value.path 
      if (path == '/' || path == '/en') {
        window.scrollTo(0,0);
      } else {
        this.$router.push({ path: localePath('/') })
      }
    }

    return {
      mobile,
      goHome
    }
  }
}
</script>

<style scoped>

.sticky-header{
  position: sticky !important;
  top: 0;
  left: 0;
  z-index: 3;
}

.invisible {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.08s, opacity 0.08s linear;
}
.visible {
  visibility: visible;
  opacity: 1;
  transition: visibility 0.08s, opacity 0.08s linear;
}

</style>
