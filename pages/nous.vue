<template>
  <div class="mb-15">
  
    <PageTitle class="nous-title" :text="$t('nous.title')"/>

    <NousPerson
    :class="mobile?'mb-5':'mb-15'"
    :name="$t('nous.nadia.name')"
    :fonction="$t('nous.nadia.fonction')"
    :description="$t('nous.nadia.description')"
    image="nadia"
    />

    <NousPerson
    :name="$t('nous.marc.name')"
    :fonction="$t('nous.marc.fonction')"
    :description="$t('nous.marc.description')"
    image="marc"
    />

  </div>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import ClassicTitle from '~/components/atoms/ClassicTitle.vue';
import HorizontalDivider from '~/components/atoms/HorizontalDivider.vue';
import ClassicButton from '~/components/molecules/ClassicButton.vue';
import PageTitle from '~/components/atoms/PageTitle.vue';
import NousPerson from '~/components/organisms/NousPerson.vue';

export default {

  name: 'CreationsPage',

  components: { ClassicTitle, HorizontalDivider, ClassicButton, PageTitle, NousPerson },

  setup () {
    const mobile = isMobile()
    return {
      mobile
    }
  }
}

</script>

<style scoped>

.nous-title{
  margin-bottom: 100px !important;
}

@media (max-width:600px) {
  .nous-title{
    margin-bottom: 40px !important;
  }
}

</style>
