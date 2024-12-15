<template>
  <div class="cursor"
  :style="mobile?'height:40px;':'height:25px;'"
  >
      <!--
      <v-icon
      class="ma-0 backgrounded"
      :class="mobile?'mx-2':'mr-1'"
      color="text"
      style="position: relative;"
      :size="mobile?40:25"
      >mdi-facebook</v-icon>
      -->
      <a
      href="https://www.instagram.com/lesbonnesmanieres_paris?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D"
      target="_blank"
      rel="noreferrer noopener">
        <MdiIcon 
        icon="mdiInstagram"
        color="#3A3D51"
        style="height:25px;width: 25px;"
        class="social-icon backgrounded"
        :class="mobile?'mx-4':'mr-1'"
        />
      </a>
      <a
      href="https://www.linkedin.com/company/les-bonnes-mani%C3%A8res-paris/"
      target="_blank"
      rel="noreferrer noopener">
        <MdiIcon
        icon="mdiLinkedin"
        color="#3A3D51"
        style="height:25px;width: 25px;"
        class="social-icon backgrounded"
        :class="mobile?'mx-4':'mr-1'"
        />
      </a>
<!--
      <a href="https://www.instagram.com/lesbonnesmanieres_paris?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D"
      target="_blank"
      rel="noreferrer noopener">
        <v-icon
        class="ma-0 backgrounded"
        :class="mobile?'mx-2':'mr-1'"
        color="text"
        style="position: relative;"
        :size="mobile?40:25"
        >mdi-instagram</v-icon>
      </a>
      <a href="https://www.linkedin.com/company/les-bonnes-mani%C3%A8res-paris/"
      target="_blank"
      rel="noreferrer noopener">
      <v-icon
      class="ma-0 backgrounded"
      :class="mobile?'mx-2':'mr-1'"
      color="text"
      style="position: relative;"
      :size="mobile?40:25"
      >mdi-linkedin</v-icon>
      </a>
-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    mobile: { type: Boolean, default: false }
  },
  data () {
    return {
    }
  }
})
</script>

<style scoped>

.social-icon{
  width: 24px;
  height: 24px;
}

@media (max-width:600px) {
  .social-icon{
    transform: scale(1.7);
  }
}

.social-icon:hover{
  cursor: pointer;
  color: rgb(109, 109, 109) !important;
}

</style>
