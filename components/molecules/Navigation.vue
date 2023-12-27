<template>
  <v-toolbar-items class="d-flex mx-auto align-center">

    <div v-for="navItem in navItems" :key="navItem.name" class="d-flex mx-auto align-center">

      <v-card v-if="navItem.id > 1" elevation="0" height="20px" class="my-2 divider-container">
        <v-divider class="ma-0 mb-1" color="#00000070" vertical></v-divider>
      </v-card>

      <nuxt-link
      class="nuxt-link text-uppercase ma-2 text-no-wrap"
      :to="navItem.path"
      exact>
        {{ $t(`navigation.${navItem.name}`) }}
      </nuxt-link>

    </div>

  </v-toolbar-items>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default {
  props: {

  },
  data () {

    const localePath = useLocalePath()

    const navItems = [
      {
        id: 1,
        name: 'expertise',
        path: localePath('/expertise')
      },
      {
        id: 2,
        name: 'creations',
        path: localePath('/creations')
      },
      {
        id: 3,
        name: 'nous',
        path: localePath('/nous')
      },
      {
        id: 4,
        name: 'contact',
        path: localePath('/contact')
      }
    ]

    return {
      navItems
    }
  }
}
</script>

<style scoped>


.nuxt-link{
  font-family:'Montserrat';
  font-size: 11pt;
  padding: 5px;
  font-weight: lighter;
  text-decoration: none;
  color: black;
}

@media (max-width: 750px) {
.nuxt-link{
  font-size: 10.9px;
  padding: 2px;
}
}

.nuxt-link:hover, .router-link-active{
  font-weight: 900;
}

.divider-container{
  background-color: black !important;
}

</style>
