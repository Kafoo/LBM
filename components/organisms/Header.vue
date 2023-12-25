<template>

  <v-app-bar
  elevation="0"
  height="60px"
  class="mb-2 mt-0 px-4 sticky-header desktop"
  :class="head ? 'backgrounded' : 'transparent'"
  >

    <v-toolbar-items class="centering" style="position: absolute; left: 10px;">
      <v-img
      :class="
      head ? 'visible' : 'invisible'"
      src="/HeadLogo.png"
      width="40px"
      class="mr-3"
      >
      </v-img>
      <SocialsIcons class="hideOn920"/>
    </v-toolbar-items>

    <Navigation/>

    <ChooseLocation/>

  </v-app-bar>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Navigation from '~/components/molecules/Navigation.vue'
import SocialsIcons from '~/components/atoms/SocialsIcons.vue'
import ChooseLocation from '~/components/atoms/ChooseLocation.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { Navigation, SocialsIcons, ChooseLocation },
  props: {
    head: Boolean
  },
  data () {
    return {
    }
  }
})
</script>

<style scoped>

.sticky-header{
  position: sticky;
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
