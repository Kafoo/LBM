<template>
    <v-btn
    class="rounded-lg ma-5"
    :class="bold?'font-weight-bold':''"
    variant="outlined"
    :to="to"
    size="large"
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

.v-btn{
  font-size: 14px;
}

@media (max-width: 600px) {
.v-btn{
  letter-spacing: 2px;
  border: 2px solid;
  font-size: 14px;
}
  

}

</style>
