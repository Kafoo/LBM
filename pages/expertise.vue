<template>

  <div>

    <!--------- TITLE --------->

    <v-container :class="mobile?'mb-8 mt-4 line-height-2':'mb-15 mt-8'">
      <ClassicTitle
      class="title-container mx-auto"
      :class="mobile?'small':''"
      :text="[$t('expertise.title')]"
      :left="mobile"
      quote
      />
    </v-container>

    <!--------- BLOCS --------->

    <ExpertiseBloc
    :title="$t('expertise.blocs[0].title')"
    :text="$t('expertise.blocs[0].text')"    
    :img="$t('expertise.blocs[0].image')"    
    >
      <template v-slot:button>
        <ClassicButton
        small
        v-if="!mobile"
        :text="$t('expertise.blocs[0].cta')"
        class="mt-5 mr-auto mb-auto ml-0"
        bold/>
      </template>
    </ExpertiseBloc>

    <ExpertiseBloc
    :title="$t('expertise.blocs[1].title')"
    :text="$t('expertise.blocs[1].text')"    
    :img="$t('expertise.blocs[1].image')"    
    reverse>
      <template v-slot:button>
        <ClassicButton
        small
        v-if="!mobile"
        :text="$t('expertise.blocs[1].cta')"
        class="mt-5 ml-auto mb-auto mr-0"
        bold/>
      </template>
    </ExpertiseBloc>

    <ExpertiseBloc
    :title="$t('expertise.blocs[2].title')"
    :text="$t('expertise.blocs[2].text')"    
    :img="$t('expertise.blocs[2].image')"    
    >
      <template v-slot:button>
        <ClassicButton
        small
        v-if="!mobile"
        :text="$t('expertise.blocs[2].cta')"
        class="mt-5 mr-auto mb-auto ml-0"
        bold/>
      </template>
    </ExpertiseBloc>

    <ExpertiseBloc
    :title="$t('expertise.blocs[3].title')"
    :text="$t('expertise.blocs[3].text')"    
    :img="$t('expertise.blocs[3].image')"    
    reverse>
      <template v-slot:button>
        <ClassicButton
        small
        v-if="!mobile"
        :text="$t('expertise.blocs[3].cta')"
        class="mt-5 ml-auto mb-auto mr-0"
        bold/>
      </template>
    </ExpertiseBloc>

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