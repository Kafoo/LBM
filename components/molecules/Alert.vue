<template>
  <div v-if="alert" class="alert-container">
    <div class="alert elevation-10 d-flex align-center" :class="alert.type">
      <span class="mx-2">
        {{ alert.msg }}<br />
        <span v-if="alert.info" class="info-text">
          {{ alert.info }}
        </span>
      </span>
      <v-btn
      class="ml-4"
      icon
      variant="text"
       @click="$emit('close')"
      >
        <v-icon
        color="white"
        :size="mobile?'x-large':''">mdi-close</v-icon>
      </v-btn>

    </div>
  </div>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { useDisplay } from 'vuetify';

export default {

  name: 'Alert',

  props:{
    alert: {type:Object, default: undefined}
  },

  setup () {
    const display = useDisplay()
const mobile = isMobile(display)

    return {
      mobile
    }
  }
}

</script>

<style scoped>
.alert-container {
  animation: fade-in 0.2s ease;
  display: flex;
  position: fixed;
  bottom: 60px;
  width: 90%;
  margin: 0% 5%;
  z-index: 1000;
}

.alert {
  margin: auto;
  text-align: center;
  padding: 18px;
  border-radius: 4px;
  color: white !important;
  font-family: 'Montserrat';
  letter-spacing: 1px;

}

.info-text{
  font-size: 12px;
  font-style: italic;
}

.alert.error {
  border: none !important;
  background-color: #864848 !important;
}

.alert.success {
  background-color: #525674;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
