<template>
    <div ref="container" class="text-light w-full bg-dark py-10 grid grid-cols-4" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: '',
        zIndex: 'z-50'
    })">
    <div v-if="width > 1024" class="col-span-2 flex flex-col gap-16 justify-center items-start">
        <h1 class="text-4xl font-medium">About Me</h1>
        <p class="text-3xl font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex autem magnam reprehenderit tempora nobis neque molestias nesciunt exercitationem perferendis eligendi quis asperiores consectetur odio dicta voluptates, nostrum quaerat. Ut, assumenda.</p>
        <div class="grid grid-cols-4 flex-1 items-center">
            <div class="col-span-1 flex flex-col gap-5">
                <Experiences title="2022 - 2024" subtitle="Creative Director Basic"></Experiences>
                <Experiences title="2019 - 2021" subtitle="Senior Digital Designer R/GA"></Experiences>
                <Experiences title="2015 - 2016" subtitle="Junior Designer AKQA"></Experiences>
            </div>
            <div class="col-span-2">
            </div>
            <div class="col-span-1 flex flex-col gap-5">
                <Experiences title="2021 - 2022" subtitle="Design Director Play"></Experiences>
                <Experiences title="2017 - 2018" subtitle="Digital Designer Google"></Experiences>
                <Experiences title="2011 - 2014" subtitle="Design Intern AKQA"></Experiences>
            </div>
        </div>
    </div>
        <div class="col-span-4 lg:col-span-2 relative">
            <div class="relative aspect-square flex justify-center items-center">
                <div class="relative flex justify-center items-center">
                    <nuxt-img src="enes/Leonardo_Diffusion_monochrom_avantgarde_complex_website_portfo_3.jpg"
                        class="my-0 mx-auto rounded-md lg:w-10/12" fit="contain"> </nuxt-img>
                    <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 rounded-md"></div>
                </div>
                <div class="absolute origin-center w-full overflow-hidden text-light lg:-rotate-90 lg:-translate-x-0 lg:-translate-y-1/2 lg:top-1/2 lg:left-[40%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:mix-blend-difference">
                    <h1 class="text-8xl lg:text-[10rem] text-center font-medium whitespace-nowrap translate-x-1/2 lg:translate-x-15"
                        id="About_Picture_Headline">ABOUT ME</h1>
                    <p class="text-2xl text-center font-light whitespace-nowrap translate-x-1/2"
                        id="About_Picture_Subtitle" v-if="width < 1024">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
        <NuxtLink to="/about" data-action="action" @mouseenter="mouseenter"
            class="w-fit px-1 text-xl mt-6 font-bold relative z-50 mix-blend-difference text-light">
            <AnimsAnimLinks text="More" :action="hover" @done="completeAnim" :underline="true"></AnimsAnimLinks>
        </NuxtLink>
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

onMounted(() => {
    ctx.value = gsap.context((self) => {
        const headline = self.selector('#About_Picture_Headline')
        const subtitle = self.selector('#About_Picture_Subtitle')
        const timeline = gsap.timeline({

        })
        timeline.to(headline, {
            duration: 1,
            xPercent: width.value > 1024 ? -55 : -100,
            scrollTrigger: {
                trigger: headline,
                start: width.value > 1024 ? 'top 70%' : 'top 90%',
                scrub: true,
            }
        })
        timeline.to(subtitle, {
            duration: 1,
            xPercent: width.value > 1024 ? -100 : -150,
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 90%',
                scrub: true
            }
        })
    }, container.value)
})

</script>