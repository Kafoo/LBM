<template>
  <div class="cursor">
      <v-icon
      class="ma-0"
      :class="mobile?'mx-2':'mr-1'"
      color="text"
      style="position: relative;"
      :size="mobile?40:25"
      >mdi-facebook</v-icon>
      <v-icon
      class="ma-0"
      :class="mobile?'mx-2':'mr-1'"
      color="text"
      style="position: relative;"
      :size="mobile?40:25"
      >mdi-instagram</v-icon>
      <v-icon
      class="ma-0"
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
