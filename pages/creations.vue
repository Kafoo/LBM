<template>
  <div class="mb-15">
  
    <!--------- DESKTOP TITLE --------->

    <v-sheet
    v-if="!mobile"
    class="ma-6 mt-15 mb-10 d-flex flex-column align-center"
    position="relative">
        <HorizontalDivider/>
        <ClassicTitle
        class="my-4"
        :text="[$t('creations.title')]"
        :class="mobile?'medium':''"
        :left="mobile"/>
        <HorizontalDivider/>

    </v-sheet>

    <!--------- MOBILE TITLE -------->

    <v-sheet
    v-else
    class="ma-6 mt-15 mb-10 d-flex flex-column align-center"
    position="relative">
        <hr/>
        <h1
        class="creations-mobile-title text-text text-uppercase my-4"
        >
          {{ $t('creations.title') }}
        </h1>
        <hr/>

    </v-sheet>
    <!--------- SUBTITLE --------->

    <v-sheet class="mx-8 mt-0 mb-0 d-flex flex-column"
    position="relative"
    :class="mobile?'':'align-center'">
        <ClassicTitle
        class="my-4 small"
        :text="[$t('creations.subtitle')]"
        :class="mobile?'medium':''"
        :left="mobile"/>

    </v-sheet>

    <!--------- TEXT --------->
    <v-sheet
    class="centering text-center mt-0 mb-2 creations-text"
    :class="mobile?'mx-8':'mx-auto'"
    max-width="400px">
      <p
      class="text-black"
      :class="mobile?'text-left':''"
      >{{ $t('creations.text') }}
        <br> <b>{{ $t('creations.last') }}</b>
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

    <!--------- DESKTOP CATCH --------->

    <v-sheet
    class="ma-6 d-flex flex-column creations-catch"
    position="relative"
    :class="mobile?'canvas backgrounded mt-3 mb-5 pa-4':'mb-0 mt-10 align-center'">
        <ClassicTitle
        class="my-4 small"
        :text="[$t('creations.catch')]"/>

    </v-sheet>

    <!--------- CTA CONTACT --------->
    <div class="centering">
      <ClassicButton class="mt-4 mx-auto"
      bold
      :small="!MobileDrawer"
      :text="$t('cta.contact')"
      :to="localePath('/contact')"/>
    </div>
  </div>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import ClassicTitle from '~/components/atoms/ClassicTitle.vue';
import ArrowIcon from '~/components/atoms/ArrowIcon.vue';
import LabeledPicture from '~/components/molecules/LabeledPicture.vue';
import HorizontalDivider from '~/components/atoms/HorizontalDivider.vue';
import ClassicButton from '~/components/molecules/ClassicButton.vue';
import MobileDrawer from '~/components/organisms/MobileDrawer.vue';

export default {

  name: 'CreationsPage',

  components: { ClassicTitle, ArrowIcon, LabeledPicture, HorizontalDivider, ClassicButton },

  setup () {
    const mobile = isMobile()
    return {
      mobile
    }
  }
}

</script>

<style scoped>

hr {
  border: none;
  border-top: 3px solid black;
  color: #333;
  height: 4px;
  width: 25px;
}

.creation-labeled-picture{
  margin: 0 0 50px 0;
}

.creations-mobile-title{
  font-size: 18px;
  font-family: 'Montserrat';
  letter-spacing: 7px;
  font-weight: bolder;
  text-shadow: 1px 0px 0 black;
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
    margin: 30px auto 50px auto;
  }
  
  
  .creations-text p{
    line-height: 28px;
  }

  .creations-catch{
    font-size: 30px;
  }

}

</style>
