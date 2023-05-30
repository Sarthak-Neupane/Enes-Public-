<template>
    <div ref="container" class="text-light w-full bg-dark py-10 grid grid-cols-4 rounded-b-lg" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: 'text-light',
        zIndex: 'z-50'
    })">
        <div class="col-span-4 lg:col-span-2 flex flex-col gap-16 justify-center items-start px-2 mb-10">
            <div class="overflow-hidden">
                <h1 class="text-4xl font-medium" id="About_Headline">About Me</h1>
            </div>
            <p class="text-xl md:text-2xl xl:text-3xl font-light" id="About_Paragraph">Lorem ipsum, dolor sit amet
                consectetur
                adipisicing elit. Ex autem magnam reprehenderit tempora nobis neque molestias nesciunt exercitationem
                perferendis eligendi quis asperiores consectetur odio dicta voluptates, nostrum quaerat. Ut, assumenda.</p>
            <div class="grid grid-cols-4 flex-1 items-center gap-5 lg:gap-0" id="About_More">
                <div class="col-span-3 sm:col-span-1 flex flex-col gap-5">
                    <Experiences title="2022 - 2024" subtitle="Creative Director Basic" class="lg:max-w-[10rem]">
                    </Experiences>
                    <Experiences title="2019 - 2021" subtitle="Senior Digital Designer R/GA" class="lg:max-w-[10rem]">
                    </Experiences>
                    <Experiences title="2015 - 2016" subtitle="Junior Designer AKQA" class="lg:max-w-[10rem]"></Experiences>
                </div>
                <div class="sm:col-span-2">
                </div>
                <div class="col-span-4 sm:col-span-1 flex flex-col gap-5">
                    <Experiences title="2021 - 2022" subtitle="Design Director Play" class="lg:max-w-[10rem]"></Experiences>
                    <Experiences title="2017 - 2018" subtitle="Digital Designer Google" class="lg:max-w-[10rem]">
                    </Experiences>
                    <Experiences title="2011 - 2014" subtitle="Design Intern AKQA" class="lg:max-w-[10rem]"></Experiences>
                </div>
            </div>
        </div>
        <div class="col-span-4 lg:col-span-2 relative my-10">
            <div class="relative aspect-square flex justify-center items-center">
                <div class="relative flex justify-center items-center">
                    <nuxt-img src="enes/Leonardo_Diffusion_monochrom_avantgarde_complex_website_portfo_3.jpg"
                        class="my-0 mx-auto rounded-md sm:w-9/10 lg:w-10/12 relative z-10" fit="contain"> </nuxt-img>
                    <nuxt-img src="pattern.svg"
                        class="absolute z-0 top-5 -left-5 xl:-top-7 xl:-left-7 invert w-full h-full rounded-md"></nuxt-img>
                </div>
                <!-- <div
                    class="z-20 absolute origin-center w-full overflow-hidden text-light lg:-rotate-90 lg:-translate-x-0 lg:-translate-y-1/2 lg:top-1/2 lg:left-[40%] -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 lg:mix-blend-difference">
                    <h1 class="z-20 text-8xl sm:text-[11rem] lg:text-[10rem] text-center whitespace-nowrap translate-x-1/2 lg:translate-x-15 font-bold"
                        id="About_Picture_Headline">ABOUT ME</h1>
                </div> -->
                <div
                    class="z-20 absolute origin-center w-full text-light lg:-rotate-90 lg:-translate-x-0 lg:-translate-y-1/2 lg:top-1/2 lg:left-[40%] -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 lg:mix-blend-difference flex justify-between items-center overflow-hidden">
                    <h1 class="About_Text_Loop flex-[0_0_100%] text-8xl sm:text-[11rem] lg:text-[10rem] text-center font-bold flex-nowrap whitespace-nowrap px-3">ABOUT ME</h1>
                    <h1 class="About_Text_Loop flex-[0 0 100%] text-8xl sm:text-[11rem] lg:text-[10rem] text-center font-bold flex-nowrap whitespace-nowrap px-3">ABOUT ME</h1>
                </div>
            </div>
        </div>
        <div class="w-fit text-left">
            <NuxtLink to="/about" data-action="action" @mouseenter="mouseenter"
                class="w-fit px-1 text-xl font-extralight relative z-40 mix-blend-difference text-light">
                <AnimsAnimLinks text="More" :action="hover" @done="completeAnim" :underline="true"></AnimsAnimLinks>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const loop = ref()
const loopHeading = ref()

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
        // const headlineImg = self.selector('#About_Picture_Headline')

        loopHeading.value = self.selector('.About_Text_Loop')

        const headline = self.selector('#About_Headline')
        const subtitle = self.selector('#About_Paragraph')
        const more = self.selector('.custom_experiences')

        loop.value = useLooper(loopHeading.value, {
            repeat: -1,
            center: true,
            paddingRigth: 50,
        })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container.value,
                start: 'top 80%',
            }
        })

        timeline.from(headline, {
            duration: 1,
            yPercent: 100,
            opacity: 0,
            ease: 'power4.out'
        })
        timeline.from(subtitle, {
            duration: 1,
            yPercent: 10,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.5')
        timeline.from(more, {
            duration: 1,
            yPercent: 10,
            opacity: 0,
            ease: 'power4.out',
            stagger: 0.05
        }, '-=0.5')

        // gsap.to(headlineImg, {
        //     duration: 1,
        //     xPercent: width.value > 1024 ? -65 : -100,
        //     scrollTrigger: {
        //         trigger: headlineImg,
        //         start: width.value > 1024 ? 'top 70%' : 'top 90%',
        //         scrub: true,
        //     }
        // })
    }, container.value)
})

</script>