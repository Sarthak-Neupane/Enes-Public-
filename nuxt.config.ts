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
            // 'Poppins': true,
            // 'Montserrat': true,
            // 'Inter Tight': true,
            'Inter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
        display: 'swap',
        // prefetch: true,
        preconnect: true,
        // preload: true,
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
