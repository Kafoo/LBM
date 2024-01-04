<template>

  <div>

    <!--------- TITLE --------->

    <v-container :class="mobile?'mb-8 mt-4 line-height-2 px-0':'mb-15 mt-8'">
      <ClassicTitle
      class="title-container mx-auto pa-1"
      :class="mobile?'small':''"
      :text="[$t('expertise.title')]"
      :left="mobile"
      quote
      />
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
    :technique="$t('expertise.blocs['+(n-1)+'].carousel.name') == 'technique'"
    />

    <!--------- SQUARE --------->
    <v-sheet
    class="text-text centering flex-column text-center canvas backgrounded"
    :class="mobile?'mb-8 mx-5 pa-4':'mx-auto mb-10 pa-12'"
    max-width="550px">
      <span
      class="mb-1 canvas-title"
      :class="mobile?'':'text-uppercase'">
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
      class="mt-0 mb-15 mx-auto"
      bold
      :text="$t('cta.contact')"
      :to="localePath('/contact')"/>
    </div>


  </div>

</template>

<script lang="ts">

import ClassicTitle from '~/components/atoms/ClassicTitle.vue';
import ExpertiseBloc from '~/components/organisms/ExpertiseBloc.vue';
import ClassicButton from '~/components/molecules/ClassicButton.vue';
import { isMobile } from '~/ts/functions/composition/displayHelpers';

export default {
    name: 'ExpertisePage',
    components: { ClassicTitle, ExpertiseBloc, ClassicButton },
    setup() {
        const mobile = isMobile();
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
    font-size: 18px;
    line-height: 26px;
  }

.canvas{
  margin-top: 20px;
}

}


.title-container{
  max-width: 1300px;
}

@media (max-width:600px) {
.title-container{
  max-width: 90% !important;  
}
}

</style>