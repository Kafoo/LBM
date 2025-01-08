<template>

  <v-sheet
  class="d-flex justify-center"
  :class="mobile?'flex-column align-center':''"
  >

    <!----------- TITLE ----------->
    <v-sheet
    :width="mobile?'90%':''"
    :max-width="mobile?'350px':'355px'"
    class="mt-8 d-flex flex-column"
    :class="!mobile?'align-end mr-5':'align-start'">

      <h2
      class="pa-1 line-spaced"
      :class="[backgrounded?'backgrounded':'',
      mobile?'small line-spaced text-left':'medium text-right']"
      >
        <span style="display: inline-block;">
          {{ $t('contact.title.line1') }}
        </span>
        <span style="display: inline-block;">
          {{ $t('contact.title.line2') }}
        </span>
        <span style="display: inline-block;">
          {{ $t('contact.title.line3') }}
        </span>
      </h2>
      
      <p
      class="classic-text pa-1 mt-4"
      :class="[backgrounded?'backgrounded':'',mobile?'text-left break-max':'text-right']">
        {{ $t('contact.text') }}
      </p>
    </v-sheet>


    <!----------- FORM ----------->
    <v-sheet
    :width="mobile?'90%':'300px'"
    :max-width="mobile?'350px':''"
    min-width="250px"
    class="Montserrat--text text--text font-weight-bold mt-6"
    >
      <v-form @submit.prevent v-model="form">

        <!----------- NAME ----------->
        <v-text-field
        hide-details
        maxlength="40"
        :class="backgrounded?'backgrounded':''"
        class="px-1"
        variant="underlined"
        :rules="[rules.required[0]]"
        v-model="name"
        autocomplete="LBM"
        :label="$t('contact.form.name')+' *'"        >
          <template v-if="!mobile" v-slot:prepend-inner>
            <v-icon size="20">mdi-account</v-icon>
          </template>
        </v-text-field>

        <!----------- EMAIL ----------->
        <v-text-field
        hide-details
        maxlength="40"
        :class="backgrounded?'backgrounded':''"
        class="px-1"
        variant="underlined"
        :rules="[rules.required[0], rules.email[0]]"
        v-model="email"
        autocomplete="LBM"
        :label="$t('contact.form.email')+' *'"        >
          <template v-if="!mobile" v-slot:prepend-inner>
            <v-icon size="20">mdi-email</v-icon>
          </template>
        </v-text-field>


        <!----------- PHONE ----------->
        <v-text-field
        hide-details
        maxlength="40"
        :class="backgrounded?'backgrounded':''"
        class="px-1"
        variant="underlined"
        v-model="phoneNumber"
        autocomplete="LBM"
        :label="$t('contact.form.phone')"        >
          <template v-if="!mobile" v-slot:prepend-inner>
            <v-icon size="20">mdi-phone</v-icon>
          </template>
        </v-text-field>

        <!----------- EVENT TYPE ----------->
        <v-text-field
        hide-details
        maxlength="40"
        :class="backgrounded?'backgrounded':''"
        class="px-1"
        variant="underlined"
        v-model="eventType"
        autocomplete="LBM"
        :label="$t('contact.form.eventType')"        >
          <template v-if="!mobile" v-slot:prepend-inner>
            <v-icon size="20">mdi-star</v-icon>
          </template>
        </v-text-field>

        <!----------- GUESTS ----------->
        <v-select
        hide-details
        :class="backgrounded?'backgrounded':''"
        class="px-1"
        variant="underlined"
        autocomplete="LBM"
        v-model="guests"
        :label="$t('contact.form.guests')"
        :items="['50 - 150', '150 - 300', '300 - 500', '500 +']"
        >
          <template v-if="!mobile" v-slot:prepend-inner>
            <svg height="20" viewBox="0 -960 960 960" width="20"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z"/></svg>
          </template>
        </v-select>

        <!----------- DATE ----------->
        <v-text-field
        hide-details
        maxlength="50"
        :class="backgrounded?'backgrounded':''"
        class="px-1"
        variant="underlined"
        v-model="eventDate"
        autocomplete="LBM"
        :placeholder="$t('contact.form.dateplaceholder')"
        :label="$t('contact.form.date')"        >
          <template v-if="!mobile" v-slot:prepend-inner>
            <v-icon size="20">mdi-calendar-month</v-icon>
          </template>
        </v-text-field>

        <!----------- MESSAGE ----------->
        <v-textarea
        hide-details
        maxlength="400"
        :class="backgrounded?'backgrounded':''"
        class="px-1"
        variant="underlined"
        :rules="[rules.required[0]]"
        autocomplete="LBM"
        v-model="message"
        :label="$t('contact.form.message')+' *'"
        no-resize
        rows="2"
        >
          <template v-if="!mobile" v-slot:prepend-inner>
            <svg height="20" viewBox="0 -960 960 960" width="20"><path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Z"/></svg>
          </template>
        </v-textarea>

        <!----------- SUBMIT ----------->
        <div class="submit-container">
          <ClassicButton :text="$t('contact.form.submit')"
          :class="[backgrounded?'backgrounded':'',
          mobile?'mt-10':'mt-5']"
          bold
          :disabled="loading || !form"
          :loading="loading"
          @click.stop="submitForm"/>
        </div>
      </v-form>
    </v-sheet>

    <!----------- ALERT----------->

    <Alert :alert="alert" @close="alert = undefined"/>

  </v-sheet>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ClassicButton from '../molecules/ClassicButton.vue'
import Alert from '../molecules/Alert.vue'
import { isMobile } from '~/ts/functions/composition/displayHelpers'
import { useDisplay } from 'vuetify';

export default defineComponent({

  name: 'ContactForm',

  components: { ClassicButton, Alert },

  props: {
    backgrounded: { type:Boolean, default: false}
  },

  setup () {

    const name = ref(undefined)
    const email = ref(undefined)
    const phoneNumber = ref(undefined)
    const eventType = ref(undefined)
    const guests = ref(undefined)
    const eventDate = ref(undefined)
    const message = ref(undefined)

    const display = useDisplay()
    const mobile = isMobile(display)
    const { t } = useI18n()

    const form = ref(false)
    const loading = ref(false)
    const alert = ref(undefined as Object|undefined)

    const resetValues = () => {
      name.value = undefined
      email.value = undefined
      phoneNumber.value = undefined
      eventType.value = undefined
      guests.value = undefined
      eventDate.value = undefined
      message.value = undefined
    }

    const sendContact = (status:string, errors?:Object) => {
      useFetch('https://lbmapi.kafoo.dev/api/sendcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          status,
          errors,
          name: name.value,
          email: email.value,
          phone: phoneNumber.value,
          eventtype: eventType.value,
          guests: guests.value,
          eventdate: eventDate.value,
          message: message.value,
        },
      });

    }

    const submitForm = () => {
    
      loading.value = true

      try {
        const query = useFetch('https://formie.io/form/22a5feaf-891c-4c89-a6f1-f72cf6f06cbd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            name: name.value,
            email: email.value,
            phone: phoneNumber.value,
            eventtype: eventType.value,
            guests: guests.value,
            eventdate: eventDate.value,
            message: message.value,
          },
        });

        query.then((response:any) =>{

          // ------ SUCCESS ------ 
          if (response.status.value == 'success') {
            sendContact('success')
            alert.value = {msg:t('alerts.form.success'), type:'success'}
            resetValues()

          // ------ ERRORS ------ 
          } else {
            if (response.error.value.data) {              
              const errors = response.error.value.data.errors
              sendContact('error', errors)
              if (errors.email) {              
                alert.value = {
                  msg: t('alerts.form.error.general'),
                  info: t(errors.email[0]),
                  type: 'error'
                }
              } else if (errors.name) {              
                alert.value = {
                  msg: t('alerts.form.error.general'),
                  info: t(errors.name[0]),
                  type: 'error'
                }
              } else if (errors.message) {              
                alert.value = {
                  msg: t('alerts.form.error.general'),
                  info: t(errors.message[0]),
                  type: 'error'
                }
              } else {
                alert.value = {
                  msg:t('alerts.form.error.general'),
                  info:t('alerts.form.error.basicInfo'),
                  type:'error'
                }
              }
            } else {
              alert.value = {
                msg:t('alerts.form.error.general'),
                info:t('alerts.form.error.basicInfo'),
                type:'error'
              }
            }
          }
          loading.value = false
          setTimeout(() => {
            alert.value = undefined
          }, 8000);
        })

      // ------ FAIL ------
      } catch (error) {
        sendContact('error', 'catch')
        alert.value = {
          msg:t('alerts.form.error.general'),
          info:t('alerts.form.error.basicInfo'),
          type:'error'
        }
      }

  
    }

    // ---- RULES ----
    const required = [(v: string) => !!v || 'champs requis'];

    const emailrule = [
      (v: string) =>
        /.+@.+\..+/.test(v) ||
        !v ||
        'invalid email format'
    ];

    const rules = {
      required,
      email: emailrule
    }

    return {
      name,
      email,
      phoneNumber,
      eventType,
      guests,
      eventDate,
      message,
      mobile,
      submitForm,
      rules,
      form,
      loading,
      alert
    }
  }
})

</script>

<style scoped>

.submit-container{
  width: 100%;
  display: flex;
  justify-content: right;
}

@media (max-width: 600px) {
.submit-container{
  justify-content: center;
}
}

svg{
  margin: 0 2px;
  padding: 1px;
  fill: grey;
}

.v-field--error svg{
  fill: rgb(176,0,32);
}
.v-icon{
  margin: 0 1px
}

.classic-text{
  max-width: 250px;
  line-height: 22px;
}

.break-max{
  max-width: 100%;
}

</style>
