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
      <h2 class="mt-3 mb-4 small backgrounded"
      :class="mobile?'text-left':''">
        {{ $t('nous.engagements.title') }}
      </h2>
      <HorizontalDivider/>

      <!--
      <ClassicTitle
      class="my-4 small"
      :text="[$t('nous.engagements.title')]"
      :class="mobile?'medium':''"
      :left="mobile"/>
      -->
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
        :class="engagement.slug">
        </div>
        <span class="engagement-title">{{engagement.name}}</span>
      </div>

    </v-sheet>

    <!--------- ENGAGEMENTS IMAGES MOBILE --------->
    <swiper
      v-if="mobile"
      class="engagements-carousel mx-5 mt-10 mb-15"
      slidesPerView="auto"
      spaceBetween="10"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :modules="modules"
    >
      <swiper-slide
      v-for="engagement in engagements">
        <v-img
        width="100%"
        aspect-ratio="1.6"
        :src="engagement.image"
        alt="commitment">
        </v-img>
        <span class="engagement-title engagement-mobile-title">{{engagement.name}}</span>
      </swiper-slide>
    </swiper>
    

    <!--------- LAST --------->
    <v-sheet
    class="d-flex flex-column nous-catch"
    :max-width="mobile?'':'600px'"
    :class="mobile?'canvas backgrounded mx-6 pa-4':'mx-auto mb-0 mt-10 align-center'">
        <h3 
        class="my-4 ssmall line-spaced">
          {{ $t('nous.end') }}
        </h3>

    </v-sheet>


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
import { useDisplay } from 'vuetify';

export default {

  name: 'CreationsPage',

  components: { ClassicTitle, HorizontalDivider, ClassicButton, PageTitle, NousPerson, NousEnsemble, NousEquipe },

  setup () {

    const display = useDisplay()
    const mobile = isMobile(display)
    const { t } = useI18n()

    const engagements = computed({

      get() {


        return [
          {
            name: t('nous.engagements.engag1'),
            image: '/pictures/innovation.jpg',
            slug: 'innovation'
          },
          {
            name: t('nous.engagements.engag2'),
            image: '/pictures/precision.jpg',
            slug: 'precision'
          },
          {
            name: t('nous.engagements.engag3'),
            image: '/pictures/emerveillement.jpg',
            slug: 'emerveillement'
          },
        ]
      },
      // setter
      set(newValue) {
      
      }


    })

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
  top: 42%;
  width: 100%;
  text-align: center;
  color:white;
  font-weight: bolder;
  letter-spacing: 2px;
  font-size: 19px;
}

.engagement-mobile-title{
  font-size: 30px;
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

.child.innovation{
  background-image: url("public/pictures/innovation.jpg");
}

.child.precision{
  background-image: url("public/pictures/precision.jpg");
}

.child.emerveillement{
  background-image: url("public/pictures/emerveillement.jpg");
}

.parent:hover .child,
.parent:focus .child {
  transform: scale(1.1);
  transition: 0.2s;
}

.nous-catch{
  margin-top: 150px;
  margin-bottom: 80px;
  font-size: 30px;
}

</style>
