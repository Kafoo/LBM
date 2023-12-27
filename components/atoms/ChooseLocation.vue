<template>
    <v-toolbar-items
    style="position: absolute; right: 15px;"
    class="d-flex align-center Montserrat--text"
    >

      <p
      min-width="0"
      text
      class="px-1 ma-0 cursor location"
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
      this.$i18n.locale = newLocale;
      ////Then pushing...
      //this.$router.replace({ path: switchLocalePath(newLocale) }).preventDefault;
      ////...Or just changing url
      history.pushState(
        {},
        '',
        switchLocalePath(newLocale)
      )
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
