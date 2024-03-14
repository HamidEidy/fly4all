// import Datepicker from 'vue3-datepicker'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default defineNuxtPlugin(nuxtApp =>{
    return nuxtApp.vueApp.component('VueDatePicker', VueDatePicker)
})