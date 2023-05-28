<template>
    <section class="bg-dark pt-32 lg:pt-40 grid grid-cols-12 px-2 sm:px-9 lg:px-7 relative z-20 text-light  rounded-b-2xl" ref="container">
        <AboutHeadline class="mb-16 lg:mb-24" :action="action" @complete="proceedOtherAnims" />
        <div class="col-span-6" v-if="width >= 1024">
        </div>
        <div class="col-span-12 lg:col-span-6 mb-24 lg:mb-36">
            <p class="text-sm max-w-lg opacity-0 mb-8" id="About_Paragraph">Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Aperiam
                voluptate incidunt accusamus neque dolor esse voluptatem molestiae, voluptatum dolorum ullam
                perspiciatis,
                culpa dicta nemo commodi. Eos voluptates atque ipsum ipsam.</p>
            <div class="relative">
                <div class="absolute inset-0 w-full h-full bg-dark rounded-md scale-y-1 origin-bottom" id="About_Image">
                </div>
                <nuxt-img src="enes/Leonardo_Diffusion_monochrom_avantgarde_complex_website_portfo_1.jpg"
                    class="rounded-md object-cover sm:aspect-video lg:aspect-auto"></nuxt-img>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-4 mb-12">
            <div class="overflow-hidden">
                <h1 class="text-2xl translate-y-full" id="About_Skills_Headline">Everything I've Done</h1>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-8 lg:pt-24 flex flex-wrap mb-24 lg:mb-36 font-extralight lg:text-lg"
            id="About_Skills">
            <Skills title="Prouct Development" class="opacity-0 translate-y-10 About_Skills_Each" />
            <Skills title="Motion Graphics" class="opacity-0 translate-y-10 About_Skills_Each" />
            <Skills title="Brand Design" class="opacity-0 translate-y-10 About_Skills_Each" />
            <Skills title="Brand Development" class="opacity-0 translate-y-10 About_Skills_Each" />
            <Skills title="Product Design" class="opacity-0 translate-y-10 About_Skills_Each" />
        </div>
        <div class="col-span-12 lg:col-span-4 mb-16">
            <div class="overflow-hidden">
                <h1 class="text-2xl translate-y-full" id="About_Experiences_Headline">Everywhere I've Worked</h1>
            </div>
        </div>
        <div id="About_Experiences"
            class="col-span-12 lg:col-span-6 flex justify-start sm:justify-between lg:justify-start items-center gap-11 lg:gap-56 font-light opacity-70 lg:opacity-100 mb-24 lg:mb-36">
            <div class="flex flex-col gap-12">
                <Experiences title="2022 - 2024" subtitle="Creative Director Basic"
                    class="w-full opacity-0 translate-y-10  About_Experiences_Each"></Experiences>
                <Experiences title="2019 - 2021" subtitle="Senior Digital Designer R/GA"
                    class="w-full opacity-0 translate-y-10  About_Experiences_Each"></Experiences>
                <Experiences title="2015 - 2016" subtitle="Junior Designer AKQA"
                    class="w-full opacity-0 translate-y-10  About_Experiences_Each"></Experiences>
            </div>
            <div class="flex flex-col gap-12">
                <Experiences title="2021 - 2022" subtitle="Design Director Play"
                    class="w-full opacity-0 translate-y-10  About_Experiences_Each"></Experiences>
                <Experiences title="2017 - 2018" subtitle="Digital Designer Google"
                    class="w-full opacity-0 translate-y-10  About_Experiences_Each"></Experiences>
                <Experiences title="2011 - 2014" subtitle="Design Intern AKQA"
                    class="w-full opacity-0 translate-y-10  About_Experiences_Each"></Experiences>
            </div>
        </div>
    </section>
    <section
        class="bg-light text-dark h-screen flex flex-col justify-end items-stretch px-2 xl:px-7 z-[0] relative -mt-[100vh]"
        ref="footer">
        <SectionsFooter @change="emitIconChange" @default="emitIconDefault" class="text-dark bg-light h-[70vh]">
        </SectionsFooter>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore()

const action = ref(false)

const emits = defineEmits(['change', 'default'])

const emitIconChange = (data) => {
    emits('change', data)
}

const emitIconDefault = (v) => {
    emits('default', v)
}

const container = ref()
const footer = ref()


onMounted(() => {
    action.value = true
    setTimeout(() => {
        ScrollTrigger.create({
            trigger: footer.value,
            pin: true,
            start: "bottom bottom",
            end: "+=60%",
        });
    }, 500);
})


const proceedOtherAnims = () => {

    ctx.value = gsap.context((self) => {
        const About_Image = self.selector('#About_Image')
        const About_Paragraph = self.selector('#About_Paragraph')
        const About_Skills_Headline = self.selector('#About_Skills_Headline')
        const About_Skills = self.selector('#About_Skills')
        const About_Experiences_Headline = self.selector('#About_Experiences_Headline')
        const About_Experiences = self.selector('#About_Experiences')
        const About_Skills_Each = self.selector('.About_Skills_Each')
        const About_Experiences_Each = self.selector('.About_Experiences_Each')

        const timeline = gsap.timeline()

        timeline.to(About_Paragraph, {
            duration: 1,
            opacity: 0.5,
        })

        timeline.to(About_Image, {
            duration: 1,
            scaleY: 0,
            ease: 'power4.inOut',
            onStart: () => {
                animStore.setAnimating(false)
            }
        }, '-=1')

        gsap.to(About_Skills_Headline, {
            duration: 1,
            y: 0,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: About_Skills_Headline,
                start: 'top 70%',
            }
        })

        gsap.to(About_Skills_Each, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: About_Skills,
                start: 'top 70%',
            }
        })

        gsap.to(About_Experiences_Headline, {
            duration: 1,
            y: 0,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: About_Experiences_Headline,
                start: 'top 70%',
            }
        })

        gsap.to(About_Experiences_Each, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: About_Experiences,
                start: 'top 70%',
            }
        })


    }, container.value)
}

const ctx = ref()

onBeforeRouteLeave((to, from, next) => {
    animStore.setAnimating(true)
    next()
});

</script>