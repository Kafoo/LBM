<template>
  <v-toolbar-items class="d-flex mx-auto align-center">

    <div v-for="navItem in navItems" :key="navItem.id" class="d-flex mx-auto align-center">

      <v-card
      v-if="navItem.id > 0"
      elevation="0"
      height="20px"
      class="my-2 divider-container">
        <v-divider class="ma-0 mb-1" color="#00000070" vertical></v-divider>
      </v-card>

      <nuxt-link
      class="nuxt-link backgrounded text-uppercase ma-2 text-no-wrap"
      :to="localePath(navItem.path)"
      exact
      >
        {{ $t(`navigation.${navItem.name}`) }}
      </nuxt-link>

    </div>

  </v-toolbar-items>
</template>

<script lang="ts">

export default {
  props: {

  },
  data () {

    const navItems = [
      {
        id: 0,
        name: 'expertise',
        path: '/expertise'
      },
      {
        id: 1,
        name: 'creations',
        path: '/creations'
      },
      {
        id: 2,
        name: 'nous',
        path: '/nous'
      },
      {
        id: 3,
        name: 'contact',
        path: '/contact'
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
