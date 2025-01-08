<template>
    <v-toolbar-items
    class="choose-location d-flex align-center Montserrat--text"
    >

      <p
      min-width="0"
      text
      class="px-1 ma-0 mr-1 cursor location"
      :class="[mobile?'mobile-location':'',
      locale=='fr'?'active-location':'']"
      @click.stop="changeLocale('fr')"
      >FR</p>

      <v-card height="20px" class="divider-container">
        <v-divider class="ma-0 mb-1" color="#00000070" vertical></v-divider>
      </v-card>

      <p
      min-width="0"
      text
      class="px-1 ma-0 cursor location"
      :class="[mobile?'mobile-location':'',
      locale=='en'?'active-location':'']"
      @click.stop="changeLocale('en')"
      >US</p>

    </v-toolbar-items>
</template>

<script lang="ts">

export default {
  props: {
    mobile: { type:Boolean }
  },

  methods: {
    changeLocale(newLocale:string) {
  
      const switchLocalePath = useSwitchLocalePath()
      ////Then pushing...
      if (switchLocalePath(newLocale)) {
        this.$router.push({ path: switchLocalePath(newLocale) });
      } else {
        const localePath = useLocalePath()
        this.$router.push({ path: localePath('/', newLocale) });
      }
      setTimeout(() => {
        this.$i18n.finalizePendingLocaleChange()
      }, 150);
    }
  },

  setup () {
    let locale = useI18n().locale

    return {
      locale
    }
  }

}
</script>

<style scoped>

.choose-location{
  position: absolute;
  right: 15px;
}

@media (max-width: 860px) {
  .choose-location{
    right: 0px;
  }
}

.location {
  font-weight: bolder;
  text-shadow: none;
}

.location:hover, .active-location {
  text-shadow: 1px 0 0 black;
  transition: 0.1s ease-out;
}

.mobile-location{
  font-size: 18px;
}

.divider-container{
  background-color: black !important;
}
</style>
