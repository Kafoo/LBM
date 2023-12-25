<template>
  <div>
      <v-sheet
      class="d-flex flex-column picture-container"
      >
        <v-img
        :src=imageSrc
        width="240px"
        height="400px"
        ></v-img>
        <v-sheet
        :class="sm?'mt-1':'mt-3'">
          <p class="text-uppercase Yeseva--text sous-image mt-3">{{ text }}</p>
        </v-sheet>
      </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isSm } from '~/ts/functions/composition/displayHelpers'

export default defineComponent({
  props: {
    imageSrc: { type: String, default: "/pictures/Dior-303.jpg" },
    text: String
  },
  setup () {
    const sm = isSm(window)
    return {
      sm
    }
  }
})
</script>

<style scoped>

.sous-image{
  letter-spacing: 3px;
  font-size: 12px;
}

.picture-container{
  margin-left: 20px;
  margin-right: 20px;
  max-width: 240px;

}

@media (max-width: 960px) {
  .picture-container{
    margin-left: 12px;
    margin-right: 12px;
  }
}

@media (max-width: 820px) {
  .picture-container{
    margin-left: 8px;
    margin-right: 8px;
    max-width: 210px;
  }
}

@media (max-width: 700px) {
  .picture-container{
    margin-left: 3px;
    margin-right: 3px;
    max-width: 180px;
  }
}

</style>
