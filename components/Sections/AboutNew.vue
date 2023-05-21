<template>
    <div ref="container" class="text-light w-full bg-dark py-10 grid grid-cols-4" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: '',
        zIndex: 'z-50'
    })">
    <div class="col-span-4 relative">
        <div>
            <NuxtLink to="/about">
                <div class="relative">
                    <nuxt-img src="enes/Leonardo_Diffusion_monochrom_avantgarde_complex_website_portfo_3.jpg" class="my-0 mx-auto rounded-md" fit="contain" > </nuxt-img>
                    <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 rounded-md"></div>
                </div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden text-light">
                    <h1 class="text-8xl text-center font-medium whitespace-nowrap translate-x-1/2" id="About_Picture_Headline">ABOUT ME</h1>
                    <p class="text-2xl text-center font-light whitespace-nowrap translate-x-1/2" id="About_Picture_Subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
            </NuxtLink>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { $gsap: gsap } = useNuxtApp();

const { width } = useWindowSize();
const hover = ref(false)

const mouseenter = () => {
    if (width.value < 1024) {
        return
    }
    hover.value = true
}

const completeAnim = () => {
    hover.value = false
}

const container = ref()

const ctx = ref()

onMounted(()=>{
    ctx.value = gsap.context((self)=>{
        const headline = self.selector('#About_Picture_Headline')
        const subtitle = self.selector('#About_Picture_Subtitle')
        const timeline = gsap.timeline({
            
        })
        timeline.to(headline, {
            duration: 1,
            xPercent: -100,
            scrollTrigger: {
                trigger: headline,
                start: 'top 90%',
                scrub: true
            }
        })
        timeline.to(subtitle, {
            duration: 1,
            xPercent: -150,
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 90%',
                scrub: true
            }
        })
    }, container.value)
})

</script>