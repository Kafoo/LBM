<template>
    <v-btn
    class="rounded-lg ma-5 font-weight-bold"
    :class="small?'px-3 py-4':'pa-5'"
    :small="small"
    outlined
    :to="to"
    :color="color">
      {{text}}
    </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    color: { type: String, default: 'black' },
    text: { type: String },
    to: { type: String },
    small: { type: Boolean, default: false }
  },
  data () {
    return {
    }
  }
})
</script>

<style scoped>

@media (max-width: 600px) {
.v-btn{
  letter-spacing: 2px;
  border: 2px solid;
}
  
}

</style>
