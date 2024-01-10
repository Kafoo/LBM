<template>
  <div>
      <v-sheet
      class="d-flex flex-column picture-container"
      :class="short?'short':''"
      >
        <v-img
        :src=imageSrc
        cover
        :width="short&&mobile?'100%':'240px'"
        :height="short&&mobile?'460px':short?'320px':'400px'"
        >
          <template v-slot:placeholder><AtomsProgress/></template>
        </v-img>
        <v-sheet
        :class="mobile?'px-4 mt-2':sm?'mt-1':'mt-3'">
          <p class="text-uppercase Yeseva--text sous-image backgrounded mt-3">{{ text }}</p>
        </v-sheet>
      </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isSm, isMobile } from '~/ts/functions/composition/displayHelpers'
import { useDisplay } from 'vuetify';

export default {
  props: {
    imageSrc: { type: String, default: "/pictures/Dior-303.jpg" },
    text: { type: String, default: '' },
    short: { type:Boolean, default: false }
  },
  setup () {
    const display = useDisplay()
    const sm = isSm(display)
    const mobile = isMobile(display)
    return {
      sm,
      mobile
    }
  }
}
</script>

<style scoped>

.sous-image{
  letter-spacing: 3px;
  font-size: 12px;
  padding: 5px;
  line-height: 20px;
  margin-left: -5px;
}

.short .sous-image{
  letter-spacing: 3px;
  font-size: 12px;
}

.picture-container{
  margin-left: 20px;
  margin-right: 20px;
  max-width: 240px;

}

@media (max-width: 960px) {
  .picture-container:not(.short){
    margin-left: 12px;
    margin-right: 12px;
  }
}

@media (max-width: 820px) {
  .picture-container:not(.short){
    margin-left: 8px;
    margin-right: 8px;
    max-width: 210px;
  }
}

@media (max-width: 700px) {
  .picture-container:not(.short){
    margin-left: 3px;
    margin-right: 3px;
    max-width: 180px;
  }
}

@media (max-width: 600px) {
  .picture-container.short{
    margin: 0;
    max-width: 100%;
  }

  .short .sous-image{
    letter-spacing: 2px;
    font-size: 17px;
  }

}

</style>
