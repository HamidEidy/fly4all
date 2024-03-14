// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


  build: {
    transpile: ['@vuepic/vue-datepicker']
},
  css: ["~/assets/main.scss"],
  
//   runtimeConfig: {
//     public: {
//         apiBase: "",
//     },
// },

  // devtools: { enabled: true }

})
