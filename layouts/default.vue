<template>

  <MobileDrawer :head= "head"/>

  <ChooseLocation
  v-if="mobile"
  class="choose-location-absolute"
  :mobile="true"/>

  <TopLogo @visibleHead="isHeadVisible"/>

  <HeaderVue :head= "head" />

    <v-main>
      <slot />
    </v-main>

  <FooterVue/>

</template>

<script lang="ts">

import HeaderVue from '~/components/organisms/Header.vue'
import FooterVue from '~/components/organisms/Footer.vue'
import TopLogo from '~/components/atoms/TopLogo.vue'
import MobileDrawer from '~/components/organisms/MobileDrawer.vue'
import ChooseLocation from '~/components/atoms/ChooseLocation.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'
import { useDisplay } from 'vuetify';

export default {
  components: { HeaderVue, FooterVue, TopLogo, MobileDrawer, ChooseLocation },
  name: 'Default',

  setup () {
    // To know if HeadLogo has to be shown in Navigation
    const head = ref(true)
    const isHeadVisible = (isVisible:boolean) => {
      head.value = isVisible
    }
    
    const display = useDisplay()
    const mobile = isMobile(display)

    return {
      head,
      mobile,
      isHeadVisible
    }
  }
}

</script>

<style scoped>


.choose-location-absolute{
  position: absolute;
  top: 60px;
  right: 15px;
  z-index: 1;
}

</style>
