<template>
  <div>
    <h1 v-for="line in text"
    v-bind:key="line"
    :class="['text-'+color,
    wrap?'':'text-no-wrap',
    right?'text-right':
    left?'text-left':
    spaced?'text-center my-5':
    'text-center mb-1'
    ]"
    class="classic-title"
    >
      <span v-if="quote">“</span>{{ line }}<span v-if="quote">“</span>
    </h1>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default {

  name: 'ClassicTitle',

  props: {
    text: {
      type: Array as () => Array<string>,
      default () {
        return []
      }
    },
    spaced: { type: Boolean, default: false },
    color: { type: String, default: 'text' },
    wrap: { type: Boolean, default: true },
    right: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    quote: { type: Boolean, default: false },
  },
  setup () {
    return {
    }
  }
}

</script>

<style scoped>

</style>
