<template>
  <div>

    <v-btn
    @click.stop="drawer = !drawer"
    class="mobile drawer-btn ml-4 align-self-start"
    icon
    width="70px"
    height="70px"
    :class="head?'elevated':''"
    >
      <v-icon
      color="black"
      size="40px"
      >mdi-menu</v-icon>
    </v-btn>


    <!-- DRAWER -->
    <v-navigation-drawer
      class="drawer-mobile pt-15"
      app
      fixed
      location="top"
      temporary
      v-model="drawer"
    >

      <v-btn
      class="ma-1 drawer-cross"
      icon
      width="60px"
      height="60px"
      elevation="0"
      @click.stop="drawer = false"
      >
        <v-icon
        color="black"
        size="50px"
        >mdi-close</v-icon>
      </v-btn>


      <div class="mt-13 ml-2 centering-column mb-15 mt-15">

        <nuxt-link
        class="mb-8"
        :to="localePath('/')"
        @click.stop="drawer=false"
        exact>
          <v-img
          style="cursor: pointer;"
          src="/HeadLogo.png"
          width="73px"
          height="90px"
          >
            <template v-slot:placeholder><AtomsProgress/></template>
          </v-img>
        </nuxt-link>

        <hr class="ma-0 mb-1 ml-2"/>
        <div
        v-for="navItem in navItems"
        :key="navItem.name"
        class="centering-column"
        >
          <div class="ma-2 my-5 text-center">
            <nuxt-link
            class="nuxt-link text-uppercase text--text"
            :to="localePath(navItem.path)"
            @click.stop="drawer=false"
            exact>
              {{ $t(`navigation.${navItem.name}`) }}
            </nuxt-link>
          </div>
          <hr class="ma-0 mb-1 ml-2"/>
        </div>
      </div>

    </v-navigation-drawer>

  </div>
</template>

<script lang="ts">

export default {

  name: 'MobileDrawer',

  props: {
    head: Boolean
  },

  data () {
    const drawer = ref(false)

    const localePath = useLocalePath()

    const navItems = [
      {
        id: 1,
        name: 'expertise',
        path: '/expertise'
      },
      {
        id: 2,
        name: 'creations',
        path: '/creations'
      },
      {
        id: 3,
        name: 'nous',
        path: '/nous'
      },
      {
        id: 4,
        name: 'contact',
        path: '/contact'
      }
    ]

    const goHome = () => {
      const path = this.$router.currentRoute.value.path
      if (path == '/' || path == '/en') {
        window.scrollTo(0,0);
      } else {
        this.$router.push({ path: localePath('/') })
      }
      drawer.value = false
    }

    return {
      drawer,
      navItems,
      goHome
    }
  }
}

</script>

<style scoped>

hr{
  width: 40px;
  border: none;
  border-top: 5px solid #9f8c4e;
  color: #9f8c4e;
}

.drawer-btn{
  position: fixed;
  background-color: #ffffff;
  left: -10px;
  top: 36px;
  z-index: 2;
  box-shadow: none;
  transition: 0.5sec;
}
.drawer-btn.elevated{
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
transition: 0.5sec;
}

.drawer-cross{
  position: absolute;
  top: 25px;
  left: 25px;
}

.v-navigation-drawer{
  z-index: 3;
}

.nuxt-link{
  font-family:'Yeseva One';
  font-size: 12pt;
  letter-spacing: 7px;
  font-weight: lighter;
  text-decoration: none;
  color: black;
  transition: 0.1s ease-out;
}

.nuxt-link:hover, .router-link-active{
  font-weight: 900;
}

.drawer-mobile{
  height: auto !important;
}

</style>
