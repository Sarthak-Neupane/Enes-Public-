import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  }
})