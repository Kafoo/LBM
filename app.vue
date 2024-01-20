<template>
  <v-app :class="backgroundClass" light>
    <OrganismsMaintenance v-if="maintenance"/>
    <NuxtLayout v-else>
      <NuxtPage/>
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">

const mode = useRuntimeConfig().public.mode
const maintenance = mode === 'maintenance'

const i18nHead = useLocaleHead({
  addSeoAttributes: {}
})
useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
})

const route=ref(useRoute())
const backgroundClass = computed({

  get() {

    const localePath = useLocalePath()
    const page = localePath(route.value.path, 'fr')


    if (maintenance) {
      return null
    } else if (page == '/') {
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

</script>
