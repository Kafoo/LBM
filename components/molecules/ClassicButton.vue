<template>
    <v-btn
    class="rounded-lg ma-5 classic-button"
    :class="[bold?'font-weight-bold':'',
    small?'small-button':'']"
    variant="outlined"
    :to="to"
    :size="small?'default':'large'"
    :color="color"
    :disabled="disabled"
    :loading="loading"
    >
      {{text}}
    </v-btn>
</template>

<script lang="ts">

export default {
  props: {
    color: { type: String, default: 'black' },
    text: { type: String },
    to: { type: String },
    small: { type: Boolean, default: false },
    bold: { type: Boolean, default: false  },
    loading: { type: Boolean, default: false  },
    disabled: { type: Boolean, default: false  }
  },
  data () {
    return {
    }
  }
}
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
  
.classic-button{
  padding-top: 1px;
}

.small-button{
  font-size: 11px;
}


</style>
