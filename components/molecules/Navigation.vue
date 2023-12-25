<template>
  <v-toolbar-items class="d-flex mx-auto align-center">

    <div v-for="navItem in navItems" :key="navItem.name" class="d-flex mx-auto align-center">

      <v-card v-if="navItem.id > 1" elevation="0" height="20px" class="my-2" color="background">
        <v-divider class="ma-0 mb-1" color="#00000070" vertical></v-divider>
      </v-card>

      <nuxt-link
      class="nuxt-link text-uppercase ma-2 text-no-wrap"
      :to="navItem.path"
      exact>
        {{navItem.name}}
      </nuxt-link>

    </div>

  </v-toolbar-items>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {

  },
  data () {
    return {
      navItems: [
        {
          id: 1,
          name: 'notre expertise',
          path: '/expertise'
        },
        {
          id: 2,
          name: 'nos créations',
          path: '/creations'
        },
        {
          id: 3,
          name: 'qui sommes nous',
          path: '/nous'
        },
        {
          id: 4,
          name: 'contact',
          path: '/contact'
        }
      ]
    }
  }
})
</script>

<style scoped>

.v-toolbar-items {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  font: 120% system-ui;
  text-align: center;
  padding: 2rem 1rem;
}

.nuxt-link{
  font-family:'Montserrat';
  font-size: 11pt;
  padding: 5px;
  font-weight: lighter;
  text-decoration: none;
  color: black;
  transition: 0.1s ease-out;
}

@media (max-width: 750px) {
.nuxt-link{
  font-size: 10.9px;
  padding: 2px;
}
}

.nuxt-link:hover, .nuxt-link-active {
  font-weight: 900;
  transition: 0.1s ease-out;
}

</style>
