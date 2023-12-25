<template>
  <div class="cursor">
      <v-icon
      class="ma-0"
      :class="mobile?'mx-2':''"
      color="text"
      style="position: relative;"
      :size="mobile?'40px':''"
      >mdi-facebook</v-icon>
      <v-icon
      class="ma-0"
      :class="mobile?'mx-2':''"
      color="text"
      style="position: relative;"
      :size="mobile?'40px':''"
      >mdi-instagram</v-icon>
      <v-icon
      class="ma-0"
      :class="mobile?'mx-2':''"
      color="text"
      style="position: relative;"
      :size="mobile?'40px':''"
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
