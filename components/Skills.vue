<template>
    <div class="w-full text-left pt-3 border-light border-b-[1px] border-solid border-opacity-50 pb-2 relative" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <h1 class="" ref="headline">{{title}}</h1>
        <div class="absolute top-0 left-0 w-full h-full bg-light scale-y-0 origin-bottom mix-blend-difference" ref="overlay"></div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
const { $gsap: gsap } = useNuxtApp()

const { width } = useWindowSize()

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

const overlay = ref()
const headline = ref()


const mouseenter = () => {
    if(width.value < 1024) return
    if(overlay.value === undefined || headline.value === undefined) return
    const timeline = gsap.timeline()
    timeline.to(overlay.value, {
        duration: 0.5,
        scaleY: 1,
        ease: 'power3.out'
    })
    timeline.to(headline.value, {
        paddingLeft: '1rem',
        textDecoration: 'underline',
        fontStyle: 'italic',
        ease: 'power3.out'
    }, "-=0.5")
}

const mouseleave = () => {
    if(width.value < 1024) return
    if(overlay.value === undefined || headline.value === undefined) return
    const timeline = gsap.timeline()
    timeline.to(overlay.value, {
        duration: 0.5,
        scaleY: 0,
        ease: 'power3.out'
    })
    timeline.to(headline.value, {
        paddingLeft: '0rem',
        textDecoration: 'none',
        fontStyle: 'normal',
        ease: 'power3.out'
    }, "-=0.5")
}

</script>