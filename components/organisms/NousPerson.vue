<template>
    <v-container class="d-flex justify-center flex-wrap">
      <div
      class="parent"
      :class="mobile?'mb-8 mt-5':'mr-10 mb-10'"
      >
        <div
        class="child"
        :class="image">
        </div>
      </div>
      <v-sheet
      class="d-flex flex-column Montserrat--text"
      :class="mobile?'text-center align-center':'align-start ml-10'"
      width="500px">
        <v-sheet class="backgrounded d-flex flex-column px-4 py-3" color="secondary">
          <span class="nous-name text-uppercase">{{ name }}
          </span>
          <span class="nous-fonction">{{ fonction }}
          </span>
        </v-sheet>

      <span
      class="mt-8 nous-description backgrounded"
      :class="mobile?'mx-3':''"
      >{{ description }}</span>
    <ClassicButton class="ml-0 mt-5 backgrounded"
    :text="$t('cta.contact')"
    :to="localePath('/contact')"
    :small="!mobile"
    bold/>
      </v-sheet>
    </v-container>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import ClassicButton from '~/components/molecules/ClassicButton.vue';

export default {

  name: 'NousPerson',

  components: { ClassicButton },

  props: {
    name: { type:String, default: ''},
    fonction: { type:String, default: ''},
    description: { type:String, default: ''},
    image: { type:String, default: ''}
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


.parent {
  width: 200px; 
  min-width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 200px;
  border: 3px 3px black;
}

.child {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: 0.2s;
}

.child.nadia{
  background-image: url("public/pictures/nadia.jpg");
}

.child.marc{
  background-image: url("public/pictures/marc.jpg");
}

.parent:hover .child,
.parent:focus .child {
  transform: scale(1.1);
  transition: 0.2s;
}

.nous-name{
  letter-spacing: 1px;
}

.nous-fonction{
  font-weight: bolder;
  letter-spacing: 1px;
}

.nous-description{
  font-size: 15px;
}

</style>
