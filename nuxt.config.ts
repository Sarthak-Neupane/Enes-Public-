// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
         '@nuxtjs/tailwindcss',
         '@nuxtjs/google-fonts',
         '@vueuse/nuxt',
         'nuxt-icon',
         '@nuxt/image-edge',
         '@pinia/nuxt',
    ],

    googleFonts: {
        families: {
            'Poppins': true,
            'Montserrat': true,
        }
    },

    build: {
        transpile: ['gsap']
    },

    app:{
        head:{
            bodyAttrs: {
                class: 'bg-dark'
            }
        }
    }
})
