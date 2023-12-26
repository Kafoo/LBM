<template>
    <v-btn
    class="rounded-lg ma-5"
    :class="[
    small?'px-2 py-3':'py-3 px-4',
    bold?'font-weight-bold':'']"
    :size="small?'small':''"
    variant="outlined"
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
    small: { type: Boolean, default: false },
    bold: { type: Boolean, default: false  }
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
  font-size: 15px;
}
  

}

</style>
