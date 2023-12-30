<template>
  <v-sheet
  class="centering mx-auto flex-wrap flex-wrap-reverse"
  :class="[reverse?'flex-row-reverse':'',
  mobile?'':'mb-15']"
  color="blue">

    <!--------- TITLE + TEXT + IMAGE --------->
    <v-sheet
    class="mb-8 d-flex flex-column backgrounded"
    :class="[mobile?'':'pa-2',
    reverse&&!mobile?'ml-6':'mr-6']"
    position="relative"
    >

      <!--------- TITLE + TEXT --------->
      <v-sheet
      :width="mobile?'85%':'370px'"
      class="d-flex flex-column ma-auto"
      :class="[reverse?'align-end':'align-start',
      mobile?'mb-5':'mt-8']">

        <!--------- TITLE --------->
        <HorizontalDivider v-if="!mobile"/>
        <ClassicTitle
        v-if="!mobile"
        class="my-3 small"
        :text="[title]"
        :class="mobile?'medium':''"
        :left="!reverse"
        :right="reverse"/>
        <HorizontalDivider v-if="!mobile"/>

        <!--------- TEXT --------->
        <p
        class="bloc-text mt-8"
        :class="reverse&&!mobile?'text-right':'text-left'"
        >
          {{ text }}
        </p>

      </v-sheet>
      <slot name="button"/>
    </v-sheet>

    <!--------- IMAGE --------->
    <v-sheet :width="mobile?'95%':'370px'" style="position: relative;">
      <v-img aspect-ratio="1" cover :src="img"/>
      <div v-if="mobile" class="mobile-expertise-title text-uppercase">{{ title }}</div>
    </v-sheet>
  
  </v-sheet>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import ClassicTitle from '../atoms/ClassicTitle.vue';
import HorizontalDivider from '../atoms/HorizontalDivider.vue';

export default {

  name: 'ExpertiseBloc',

  components: { ClassicTitle, HorizontalDivider },

  props: {
    title: { type: String, default: '' },
    text: { type: String, default: '' },
    img: { type: String, default: '' },
    reverse: { type:Boolean, default: false}
  },

  setup () {
    const mobile = isMobile()
    return {
      mobile
    }
  }
}

</script>

<style scoped>

.bloc-text{
  font-size: 15px;
  line-height: 20px;
}

@media (max-width:600px) {
.bloc-text{
  font-size: 20px;
  line-height: 35px;
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
  z-index: 3
}

</style>
