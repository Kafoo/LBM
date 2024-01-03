<template>
  <v-app :class="backgroundClass" light>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </v-app>
</template>

<script lang="ts">

export default {

  name: 'App',

  setup () {

    const route=ref(useRoute())

    const backgroundClass = computed({

      get() {

        const localePath = useLocalePath()
        const page = localePath(route.value.path, 'fr')

        if (page == '/') {
          return 'home'
        } else if (page == '/expertise') {
          return 'expertise'
        } else if (page == '/creations') {
          return 'creations'
        } else if (page == '/nous') {
          return 'nous'
        } else {
          return null
        }
      },
      // setter
      set(newValue) {
      
      }


    })


    return {
      backgroundClass
    }
  }
}

</script>
