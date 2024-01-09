<template>

<div class="centering-column pa-10">
  <h3>Safari : {{ isSafari?'yes':'no' }}</h3>
  <h3>Version : {{ version }}</h3>
  <h3>Too old : {{ isTooOld?'yes':'no' }}</h3>
  <span>{{ agent }}</span>
</div>

</template>

<script lang="ts">

export default{

  name: 'Version',

  props: {
  },

  setup () {

    const agent = navigator.userAgent
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               agent &&
               agent.indexOf('CriOS') == -1 &&
               agent.indexOf('FxiOS') == -1;


    const position = agent.indexOf('ersion')

    const version = agent.substring(position+7,position+9)

    const isTooOld = isSafari && parseInt(version) < 16

    return {
      agent,
      isSafari,
      version,
      isTooOld
    }
  }

}

</script>

<style scoped>

</style>