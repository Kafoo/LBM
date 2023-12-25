<template>
  <v-container class="sticky-bar">
    <v-row >

      <v-app-bar
      elevation="0"
      height="60px"
      class="mx-4"
      >

        <v-toolbar-items
          style="position: absolute; left: 10px;"
          class="d-flex align-center">
          <v-img
          src="/HeadLogo.png')"
          width="50px"
          class="mr-3"
          >
          </v-img>
          <SocialsIcons class="mediumScreen"/>
        </v-toolbar-items>

        <Navigation/>

        <ChooseLocation/>

      </v-app-bar>

    </v-row>
  </v-container>

</template>

<script>

import Navigation from '~/components/molecules/Navigation.vue'
import SocialsIcons from '~/components/atoms/SocialsIcons.vue'
import ChooseLocation from '~/components/atoms/ChooseLocation.vue'

export default {

  components: { Navigation, SocialsIcons, ChooseLocation },

  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.sticky-bar{
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
}

@media (max-width: 1265px) {
  .socials{
    display: none;
  }
}

</style>
