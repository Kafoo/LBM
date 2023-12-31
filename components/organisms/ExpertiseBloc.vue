<template>
  <v-sheet
  class="centering mx-auto flex-wrap flex-wrap-reverse"
  :class="[reverse?'flex-row-reverse':'',
  mobile?'':'mb-15']"
  color="blue">

    <!--------- TITLE + TEXT + IMAGE --------->
    <v-sheet
    class="mb-4 d-flex flex-column"
    :class="reverse&&!mobile?'ml-6':!mobile?'mr-6':''"
    position="relative"
    >

      <!--------- TITLE + TEXT --------->
      <v-sheet
      :width="mobile?'95%':'415px'"
      class="d-flex flex-column ma-auto pa-2"
      :class="[windowWidth<826?'align-center':reverse?'align-end':'align-start',
      mobile?'mb-6':'mt-8']">

        <!--------- TITLE --------->
        <HorizontalDivider v-if="!mobile"/>
        <ClassicTitle
        v-if="!mobile"
        class="my-3 small"
        :text="[title]"
        :class="mobile?'medium':''"
        :left="!reverse&&windowWidth>825"
        :right="reverse&&windowWidth>825"
        backgrounded/>
        <HorizontalDivider v-if="!mobile"/>

        <!--------- TEXT --------->
        <p
        class="bloc-text"
        :class="[windowWidth<826&&!mobile?'text-center':reverse&&!mobile?'text-right':'text-left',
        mobile?'mt-4':'mt-8']"
        >
          <span class="backgrounded">
            {{ text }}
          </span>
        </p>

      </v-sheet>

      <ClassicButton
      small
      v-if="!mobile"
      :text="btnText"
      class="mt-5 mb-auto backgrounded"
      :class="windowWidth<826?'mx-auto':reverse?'ml-auto mr-0':'mr-auto ml-0'"
      bold
      @click.stop="popup=true"
      />

      <!--------- CAROUSEL POPUP OLD --------->
      <!--
      <v-dialog v-if="popup" v-model="popup">
        <CarouselPopup
        @close="popup = false"
        :images="carouselImages"
        :ephemere="ephemere"/>
      </v-dialog>
      -->

      <!--------- CAROUSEL POPUP --------->
      <CarouselCustomPopup
        v-if="popup"
        @close="popup = false"
        :images="carouselImages"
        :ephemere="ephemere"
      />

    </v-sheet>

    <!--------- IMAGE --------->
    <v-sheet :width="mobile?'95%':'370px'" style="position: relative;">
      <v-img aspect-ratio="1" cover :src="img">
        <template v-slot:placeholder><AtomsProgress/></template>
      </v-img>
      <div v-if="mobile" class="mobile-expertise-title text-uppercase cursor" @click.stop="popup = true">
        {{ title }}
      </div>
    </v-sheet>
  
  </v-sheet>
</template>

<script lang="ts">

import { isMobile, useWindowWidth } from '~/ts/functions/composition/displayHelpers';
import ClassicTitle from '../atoms/ClassicTitle.vue';
import HorizontalDivider from '../atoms/HorizontalDivider.vue';
import ClassicButton from '../molecules/ClassicButton.vue';
import CarouselPopup from '../organisms/CarouselPopup.vue'
import CarouselCustomPopup from '../organisms/CarouselCustomPopup.vue'
import { useDisplay } from 'vuetify';

export default {

  name: 'ExpertiseBloc',

  components: { ClassicTitle, HorizontalDivider, ClassicButton, CarouselPopup, CarouselCustomPopup },

  props: {
    title: { type: String, default: '' },
    text: { type: String, default: '' },
    img: { type: String, default: '' },
    btnText: { type: String, default: '' },
    reverse: { type:Boolean, default: false},
    carouselName: { type:String, default: ''},
    carouselAmount: { type:String, default: ''},
    ephemere: { type:Boolean, default: false}
  },

  setup (props) {
    const display = useDisplay()
    const mobile = isMobile(display)
    const windowWidth = useWindowWidth(display)

    const popup = ref(false)

    let carouselImages = []
    const amount = parseInt(props.carouselAmount)
    for (let i = 0; i < amount; i++) {
      carouselImages.push('/expertise-carousels/'+props.carouselName+'/'+(i+1)+'.jpg')
    }

    return {
      mobile,
      popup,
      carouselImages,
      windowWidth
    }
  }
}

</script>

<style scoped>

.bloc-text{
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.5px;
}

@media (max-width:600px) {
.bloc-text{
  font-size: 18px;
  line-height: 30px;
}
}

.mobile-expertise-title{
  font-family: 'Yeseva One';
  font-size: 27px;
  letter-spacing: 4px;
  padding: 30px;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: rgba(255, 255, 255, 0.878);
  background-color: rgba(0, 0, 0, 0.522);
  z-index: 1;
}

</style>
