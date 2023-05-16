import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, Flip)
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
      Flip,
    },
  }
})