<template>
    <section class="pt-32 lg:pt-40 grid grid-cols-12 px-2 lg:px-7">
        <AboutHeadline class="mb-16 lg:mb-24" />
        <div class="col-span-6" v-if="width > 1024">
        </div>
        <div class="col-span-12 lg:col-span-6 mb-24 lg:mb-36">
            <p class="text-sm max-w-lg opacity-50 mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                voluptate incidunt accusamus neque dolor esse voluptatem molestiae, voluptatum dolorum ullam perspiciatis,
                culpa dicta nemo commodi. Eos voluptates atque ipsum ipsam.</p>
            <div class="relative">
                <div class="absolute inset-0 w-full h-full bg-dark rounded-md scale-y-0"></div>
                <nuxt-img src="enes/Leonardo_Diffusion_monochrom_avantgarde_complex_website_portfo_1.jpg"
                    class="rounded-md"></nuxt-img>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-4 mb-12">
            <h1 class="text-2xl">Everything I've Done</h1>
        </div>
        <div class="col-span-12 lg:col-span-8 lg:pt-24 flex flex-wrap mb-24 lg:mb-36 font-light lg:text-lg">
            <Skills title="Prouct Development" />
            <Skills title="Motion Graphics" />
            <Skills title="Brand Design" />
            <Skills title="Brand Development" />
            <Skills title="Product Design" />
        </div>
        <div class="col-span-12 lg:col-span-4 mb-16">
            <h1 class="text-2xl">Everywhere I've Worked</h1>
        </div>
        <div
            class="col-span-12 lg:col-span-6 flex justify-start items-center gap-11 lg:gap-56 font-light opacity-75 lg:opacity-100 mb-24 lg:mb-36">
            <div class="flex flex-col gap-12">
                <Experiences title="2022 - 2024" subtitle="Creative Director Basic" class="w-full"></Experiences>
                <Experiences title="2019 - 2021" subtitle="Senior Digital Designer R/GA" class="w-full"></Experiences>
                <Experiences title="2015 - 2016" subtitle="Junior Designer AKQA" class="w-full"></Experiences>
            </div>
            <div class="flex flex-col gap-12">
                <Experiences title="2021 - 2022" subtitle="Design Director Play" class="w-full"></Experiences>
                <Experiences title="2017 - 2018" subtitle="Digital Designer Google" class="w-full"></Experiences>
                <Experiences title="2011 - 2014" subtitle="Design Intern AKQA" class="w-full"></Experiences>
            </div>
        </div>
    </section>
    <SectionsFooter class="text-dark bg-light" />
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore()

const action = ref(false)

const revealNav = () => {
    animStore.setAnimating(false)
}

const Mobile_Headline = ref(null)

onMounted(() => {
    action.value = true
    gsap.to(Mobile_Headline.value, {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: 'power4.out'
    })
})

</script>