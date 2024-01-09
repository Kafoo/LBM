<template>

  <v-app light>
    <NuxtLayout>
    <div class="centering-column mt-100 mb-100">
      <h1 class="mb-8">{{ $t('404.title') }}</h1>
      <p>{{ $t('404.text') }}</p>
      <ClassicButton
      :text="$t('404.home')"
      class="mt-5 mb-auto backgrounded"
      :to="localePath('/')"
      />
    </div>
    </NuxtLayout>
  </v-app>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import ClassicButton from './components/molecules/ClassicButton.vue';
import { useDisplay } from 'vuetify';

export default {

  name: 'Error',

  components: { ClassicButton },

  setup () {
    const display = useDisplay()
    const mobile = isMobile(display)
    return {
      mobile
    }
  }
}

</script>