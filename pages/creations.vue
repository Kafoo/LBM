<template>
  <div class="mb-15">
  
    <PageTitle :text="$t('creations.title')"/>

    <!--------- SUBTITLE --------->

    <v-sheet class="mx-8 mt-0 mb-0 d-flex flex-column"
    position="relative"
    :class="mobile?'':'align-center'">
        <h2 class="my-4"
        :class="mobile?'text-left medium':'small'">
          {{ $t('creations.subtitle') }}
        </h2>

    </v-sheet>

    <!--------- TEXT --------->
    <v-sheet
    class="centering-column text-center mt-0 mb-2 creations-text"
    :class="mobile?'mx-8':'mx-auto'"
    max-width="400px">
      <p
      class="text-black mb-2"
      :class="mobile?'text-left':''"
      >{{ $t('creations.text') }}
      </p>
      <p
      class="text-black mb-3"
      :class="mobile?'text-left align-self-start':''"
      >
        <b>{{ $t('creations.last') }}</b>
      </p>
    </v-sheet>

    <div
    class="centering arrow-container">
      <ArrowIcon/>
    </div>

    <!--------- IMAGES --------->
    <v-sheet
    class="d-flex justify-center align-start mt-8 flex-wrap mx-auto"
    :max-width="mobile?'450px':'900px'"
    :class="mobile ?'flex-column':''">

      <LabeledPicture
      class="creation-labeled-picture"
      :imageSrc="$t('creations.images[0].src')"
      :text="$t('creations.images[0].title')"
      short
      />
      <LabeledPicture
      class="creation-labeled-picture"
      :imageSrc="$t('creations.images[1].src')"
      :text="$t('creations.images[1].title')"
      short
      />
      <LabeledPicture
      class="creation-labeled-picture"
      :imageSrc="$t('creations.images[2].src')"
      :text="$t('creations.images[2].title')"
      short
      />
      <LabeledPicture
      class="creation-labeled-picture"
      :imageSrc="$t('creations.images[3].src')"
      :text="$t('creations.images[3].title')"
      short
      />
      <LabeledPicture
      class="creation-labeled-picture"
      :imageSrc="$t('creations.images[4].src')"
      :text="$t('creations.images[4].title')"
      short
      />
      <LabeledPicture
      class="creation-labeled-picture"
      :imageSrc="$t('creations.images[5].src')"
      :text="$t('creations.images[5].title')"
      short
      />

    </v-sheet>

    <!--------- CATCH --------->

    <v-sheet
    class="ma-6 d-flex flex-column creations-catch"
    position="relative"
    :class="mobile?'canvas backgrounded mt-10 mb-5 pa-4':'mb-0 mt-10 align-center'">
        <h2
        class="my-5 line-spaced"
        :class="!mobile?'small backgrounded':'ssmall'"
        >
          {{ $t('creations.catch') }}
        </h2>

    </v-sheet>

    <!--------- CTA CONTACT --------->
    <div class="centering">
      <ClassicButton
      class="mt-4 mx-auto backgrounded"
      bold
      :text="$t('cta.contact')"
      :to="localePath('/contact')"/>
    </div>
  </div>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import ArrowIcon from '~/components/atoms/ArrowIcon.vue';
import LabeledPicture from '~/components/molecules/LabeledPicture.vue';
import HorizontalDivider from '~/components/atoms/HorizontalDivider.vue';
import ClassicButton from '~/components/molecules/ClassicButton.vue';
import PageTitle from '~/components/atoms/PageTitle.vue';
import { useDisplay } from 'vuetify';

export default {

  name: 'CreationsPage',

  components: { ArrowIcon, LabeledPicture, HorizontalDivider, ClassicButton, PageTitle },

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

.creation-labeled-picture{
  margin: 0 0 50px 0;
}

.arrow-container{
  margin: 0 auto 100px auto;
}

@media (max-width: 600px) {
  .creation-labeled-picture{
    margin-left: 0;
    width: 100%;
  }

  .arrow-container{
    margin: 20px auto 50px auto;
  }
  
  
  .creations-text p{
    line-height: 27px;
    font-size: 17px;
  }

}

</style>
