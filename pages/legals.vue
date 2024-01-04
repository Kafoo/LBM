<template>
  <div class="centering mt-16 mb-100">
    <ClassicTitle :text="['Mentions Légales']"/>
  </div>
</template>

<script lang="ts">

import ClassicTitle from '~/components/atoms/ClassicTitle.vue';
import { isMobile } from '~/ts/functions/composition/displayHelpers';

export default {
    
    name: 'LegalsPage',
    
    components: { ClassicTitle },
    
    setup() {
        const mobile = isMobile();
        return {
            mobile
        };
    }
}

</script>

<style scoped>

</style>
