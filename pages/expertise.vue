<template>

  <div>

    <!-- SEO TITLE -->
    <h1 style="display: none;">Notre Expertise</h1>

    <!--------- TITLE --------->

    <v-container
    :class="mobile?'mb-8 mt-4 line-height-2 px-0':'mb-15 mt-8'"
    >
      <h2
      style="max-width: 1100px;"
      class="expertise-title mx-auto pa-3 line-spaced backgrounded"
      :class="mobile?'small text-left':''"
      >
        “{{ $t('expertise.title') }}“
      </h2>

    </v-container>

    <!--------- BLOCS --------->
    <ExpertiseBloc
    v-for="n in 4"
    :title="$t('expertise.blocs['+(n-1)+'].title')"
    :text="$t('expertise.blocs['+(n-1)+'].text')"    
    :img="$t('expertise.blocs['+(n-1)+'].image')"
    :btnText="$t('expertise.blocs['+(n-1)+'].cta')" 
    :carouselName="$t('expertise.blocs['+(n-1)+'].carousel.name')"
    :carouselAmount="$t('expertise.blocs['+(n-1)+'].carousel.amount')"
    :reverse="n%2==0"    
    :ephemere="$t('expertise.blocs['+(n-1)+'].carousel.name') == 'animations'"
    />

    <!--------- SQUARE --------->
    <v-sheet
    class="text-text centering flex-column text-center canvas backgrounded"
    :class="mobile?'mb-8 mx-5 pa-6':'mx-auto mb-10 pa-12'"
    max-width="550px">
      <span
      class="mb-3 canvas-title"
      :class="mobile?'mb-1':'text-uppercase'">
        {{ $t('expertise.square.title') }}
      </span>
      <span class="Montserrat--text canvas-text">{{ $t('expertise.square.text') }}</span>
      <ClassicButton
      v-if="!mobile"
      class="mt-6 mb-0"
      bold
      :text="$t('cta.contact')"
      :to="localePath('/contact')"/>
    </v-sheet>

    <!--------- MOBILE BUTTON --------->
    <div class="centering">
      <ClassicButton
      v-if="mobile"
      class="mt-3 mb-15 mx-auto"
      bold
      :text="$t('cta.contact')"
      :to="localePath('/contact')"/>
    </div>


  </div>

</template>

<script lang="ts">

import ExpertiseBloc from '~/components/organisms/ExpertiseBloc.vue';
import ClassicButton from '~/components/molecules/ClassicButton.vue';
import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { useDisplay } from 'vuetify';

export default {
    name: 'ExpertisePage',
    components: { ExpertiseBloc, ClassicButton },
    setup() {
        const display = useDisplay()
        const mobile = isMobile(display);
        const localePath = useLocalePath()
        return {
            mobile,
            localePath
        };
    },
}

</script>

<style scoped>

.canvas-title{
  font-family: 'Yeseva One';
  font-size: 13px;
  letter-spacing: 3px;
  font-weight: lighter;
}

.canvas-text{
  font-size: 13px;
}

.canvas{
  margin-top: 100px;
}

@media (max-width:600px) {
  .canvas-title{
    font-family: 'Calibri';
    font-size: 20px;
    letter-spacing: 0.5px;
    font-weight: bolder;
  }

  .canvas-text{
    font-size: 17px;
    line-height: 26px;
  }

.canvas{
  margin-top: 20px;
}

}

.expertise-title{
  max-width: 1300px;
  letter-spacing: 1.1;
}



.title-container{
  max-width: 1300px;
}

@media (max-width:600px) {
.title-container, .expertise-title{
  max-width: 90% !important;  
}
}

</style>