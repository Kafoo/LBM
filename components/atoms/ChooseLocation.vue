<template>
    <v-toolbar-items
    style="position: absolute; right: 15px;"
    class="d-flex align-center Montserrat--text"
    >

      <p
      min-width="0"
      text
      class="px-1 ma-0 cursor location active-location"
      :class="mobile?'mobile-location':''"
      >FR</p>

      <v-card height="20px" color="background">
        <v-divider class="ma-0 mb-1" color="#00000070" vertical></v-divider>
      </v-card>

      <p
      min-width="0"
      text
      class="px-1 ma-0 cursor location"
      :class="mobile?'mobile-location':''"
      >US</p>

    </v-toolbar-items>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    mobile: { type:Boolean }
  },
  data () {
    return {
    }
  }
})
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

</style>
