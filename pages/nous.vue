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
    class="mb-16"
    :name="$t('nous.marc.name')"
    :fonction="$t('nous.marc.fonction')"
    :description="$t('nous.marc.description')"
    image="marc"
    />

    <div class="mb-100">
      <NousEnsemble/>
    </div>

    <div :class="mobile?'mb-10':'mb-100'">
      <NousEquipe/>
    </div>

    <!--------- ENGAGEMENTS --------->
    <div class="centering-column">
      <HorizontalDivider/>
      <ClassicTitle
      class="my-4 small"
      :text="['Nos engagements']"
      :class="mobile?'medium':''"
      :left="mobile"/>
      <HorizontalDivider/>
    </div>

    <!--------- ENGAGEMENTS IMAGES DESKTOP --------->
    <v-sheet v-if="!mobile" class="mt-10 mb-15 d-flex justify-center flex-wrap">

      <div
      v-for="engagement in engagements"
      class="parent flex-grow-0"
      :class="mobile?'':''"
      >
        <div
        class="child"
        :class="engagement.name">
        </div>
        <span class="engagement-title">{{engagement.name}}</span>
      </div>

    </v-sheet>

    <!--------- ENGAGEMENTS IMAGES MOBILE --------->
    <swiper
      v-else
      class="engagements-carousel mx-5 mt-10 mb-15"
      slidesPerView="auto"
      spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
      :modules="modules"
    >
      <swiper-slide v-for="engagement in engagements">
        <v-img :src="engagement.image"></v-img>
        <span class="engagement-title engagement-mobile-title">{{engagement.name}}</span>
      </swiper-slide>
    </swiper>
    

    <!--------- LAST DESKTOP --------->
    <v-sheet
    class="d-flex flex-column nous-catch"
    :max-width="mobile?'':'600px'"
    :class="mobile?'canvas backgrounded mx-6 pa-4':'mx-auto mb-0 mt-10 align-center'">
        <ClassicTitle
        class="my-4 small"
        :text="['“Nous apposons notre signature comme gage de qualité.“']"/>

    </v-sheet>
<!--
    <v-sheet
    :class="mobile?'mx-5 text-center':'ma-auto'"
    max-width="600px">
      <ClassicTitle
      class="my-4 small line-height-2"
      :text="['“Nous apposons notre signature comme gage de qualité.“']"
      :class="mobile?'medium':''"
      :left="mobile"/>
    </v-sheet>
-->
    <!--------- LAST MOBILE --------->


  </div>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import ClassicTitle from '~/components/atoms/ClassicTitle.vue';
import HorizontalDivider from '~/components/atoms/HorizontalDivider.vue';
import ClassicButton from '~/components/molecules/ClassicButton.vue';
import PageTitle from '~/components/atoms/PageTitle.vue';
import NousPerson from '~/components/organisms/NousPerson.vue';
import NousEnsemble from '~/components/molecules/NousEnsemble.vue';
import NousEquipe from '~/components/organisms/NousEquipe.vue';
import { Pagination, Autoplay } from 'swiper/modules';

export default {

  name: 'CreationsPage',

  components: { ClassicTitle, HorizontalDivider, ClassicButton, PageTitle, NousPerson, NousEnsemble, NousEquipe },

  setup () {

    const mobile = isMobile()

    const engagements = [
      {
        name: 'Innovation',
        image: '/pictures/innovation.jpg'
      },
      {
        name: 'Précision',
        image: '/pictures/precision.jpg'
      },
      {
        name: 'Émerveillement',
        image: '/pictures/emerveillement.jpg'
      },
    ]

    return {
      mobile,
      engagements,
      modules: [Pagination, Autoplay]
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

.engagement-title{
  position: absolute;
  top: 45%;
  width: 100%;
  text-align: center;
  color:white;
  font-weight: bolder;
  letter-spacing: 2px;
  font-size: 19px;
  text-shadow:
  1px 1px 30px black,
  1px 1px 30px black,
  1px 1px 30px black,
  1px 1px 30px black,
  1px 1px 30px black;
}

.engagement-mobile-title{
  font-size: 30px;
  text-shadow:
  1px 1px 30px black,
  1px 1px 30px black;
}

.parent {
  position: relative;
  width: 300px; 
  height: 200px;
  margin: 25px;
  overflow: hidden;
}

@media (max-width:1100px) {
.parent {
  margin: 10px;
}
}

.child {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: 0.2s;
}

.child.Innovation{
  background-image: url("public/pictures/innovation.jpg");
}

.child.Précision{
  background-image: url("public/pictures/precision.jpg");
}

.child.Émerveillement{
  background-image: url("public/pictures/emerveillement.jpg");
}

.parent:hover .child,
.parent:focus .child {
  transform: scale(1.1);
  transition: 0.2s;
}

.nous-catch{
  margin-top: 100px;
  margin-bottom: 80px;
  font-size: 30px;
}

</style>
