<template>
  <div class="cursor">
      <v-icon
      class="ma-0 backgrounded"
      :class="mobile?'mx-2':'mr-1'"
      color="text"
      style="position: relative;"
      :size="mobile?40:25"
      >mdi-facebook</v-icon>
      <a href="https://www.instagram.com/lesbonnesmanieres_paris?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D"
      target="_blank"
      rel="noreferrer noopener">
        <v-icon
        class="ma-0 backgrounded"
        :class="mobile?'mx-2':'mr-1'"
        color="text"
        style="position: relative;"
        :size="mobile?40:25"
        >mdi-instagram</v-icon>
      </a>
      <v-icon
      class="ma-0 backgrounded"
      :class="mobile?'mx-2':'mr-1'"
      color="text"
      style="position: relative;"
      :size="mobile?40:25"
      >mdi-linkedin</v-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    mobile: { type: Boolean, default: false }
  },
  data () {
    return {
    }
  }
})
</script>

<style scoped>

.v-icon:hover{
  cursor: pointer;
}

</style>
