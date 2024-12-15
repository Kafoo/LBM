<!-- FadeTransition.vue -->
<template>
  <transition name="fade" mode="out-in">
    <slot></slot>
  </transition>
</template>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transition: opacity 1s;
  }
</style>