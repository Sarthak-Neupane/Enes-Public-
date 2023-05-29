<template>
    <section class="bg-dark relative z-20" ref="container">
        <div class="h-[80vh] xl:h-screen bg-dark pt-20 pb-10 px-4 sm:px-7 lg:px-9 relative" ref="hero">
            <nuxt-img :src="props.Hero_Image.src" class="aspect-auto h-full w-full object-cover rounded-md" alt="">
            </nuxt-img>
            <div class="absolute top-0 left-0 w-full h-full bg-dark z-10 rounded-md origin-bottom" ref="heroImageOverlay" ></div>
        </div>
        <div class="rounded-b-2xl py-5 xl:py-10 px-4 sm:px-5 lg:px-7 rounded-t-2xl bg-light relative" ref="middle">
            <div class="grid grid-cols-2 gap-5 lg:gap-0">
                <div class="col-span-2 lg:col-span-1">
                    <h1 class="text-4xl xl:text-5xl">
                        <slot name="Project_Name"></slot>
                    </h1>
                </div>
                <div
                    class="2xl:max-w-xl text-accent col-span-2 lg:col-span-1 flex flex-col justify-start items-start gap-5 lg:gap-8 2xl:gap-12">
                    <slot name="Project_Description_First_Section">

                    </slot>
                    <div class="pt-4 w-full flex flex-col gap-4 lg:justify-start lg:flex-row lg:items-stretch">
                        <WorkInnerType :title="props.Project_Core_Bullet_Points.First.Upper"
                            :subtitle="props.Project_Core_Bullet_Points.First.Lower" class="flex-1"></WorkInnerType>
                        <WorkInnerType :title="props.Project_Core_Bullet_Points.Second.Upper"
                            :subtitle="props.Project_Core_Bullet_Points.Second.Lower" class="flex-1"></WorkInnerType>
                        <WorkInnerType :title="props.Project_Core_Bullet_Points.Third.Upper"
                            :subtitle="props.Project_Core_Bullet_Points.Third.Lower" class="flex-1"></WorkInnerType>
                        <WorkInnerType :title="props.Project_Core_Bullet_Points.Fourth.Upper"
                            :subtitle="props.Project_Core_Bullet_Points.Fourth.Lower" class="flex-1"></WorkInnerType>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="rounded-md overflow-hidden col-span-2 lg:col-span-1">
                    <nuxt-img  :src="props.Section_Two_Images.One.src"
                        class="scrollEffectImage scale-110 lg:aspect-auto h-full w-full object-cover rounded-md"
                        :alt="props.Section_Two_Images.One.alt"> </nuxt-img>
                </div>
                <div class="rounded-md overflow-hidden col-span-2 lg:col-span-1">
                    <nuxt-img  :src="props.Section_Two_Images.Two.src"
                        class="scrollEffectImage scale-110 lg:aspect-auto h-full w-full object-cover rounded-md"
                        :alt="props.Section_Two_Images.Two.alt"> </nuxt-img>
                </div>
            </div>
            <div class="grid grid-cols-2 mt-8 text-accent">
                <div class="col-span-2 sm:col-span-1">
                    <h2 class="text-2xl mb-3 text-dark">
                        <slot name="Project_Headline_Second_Section"></slot>
                    </h2>
                    <slot name="Project_Description_Second_Section"></slot>
                </div>
            </div>
            <div class="grid grid-cols-2 mt-8 lg:mt-14">
                <div class="overflow-hidden rounded-md col-span-2">
                    <nuxt-img  :src="props.Section_Three_Big_Image.src"
                        class="scrollEffectImage scale-110 aspect-square lg:aspect-[16/8] h-full w-full object-cover rounded-md"
                        :alt="props.Section_Three_Big_Image.alt">
                    </nuxt-img>
                </div>
            </div>
            <div class="grid grid-cols-2 mt-8 gap-4 2xl:gap-8">
                <div class="rounded-md overflow-hidden col-span-2 lg:col-span-1">
                    <nuxt-img  :src="props.Double_Section.Image.src"
                        class="scrollEffectImage scale-110 aspect-square lg:aspect-[2/2.2] h-full w-full object-cover rounded-md"
                        :alt="props.Double_Section.Image.alt">
                    </nuxt-img>
                </div>
                <div class="2xl:max-w-xl col-span-2 lg:col-span-1 flex flex-col justify-between text-accent gap-4">
                    <h2 class="text-2xl mb-3 mt-8 text-dark">
                        <slot name="Project_Headline_Third_Section"></slot>
                    </h2>
                    <slot name="Project_Description_Third_Section"></slot>
                    <div class="pt-4 w-full flex flex-col gap-4 text-accent">
                        <WorkInnerType :title="props.Double_Section.Credits.One.Upper"
                            :subtitle="props.Double_Section.Credits.One.Lower" class="flex-1"></WorkInnerType>
                        <WorkInnerType :title="props.Double_Section.Credits.Two.Upper"
                            :subtitle="props.Double_Section.Credits.Two.Lower" class="flex-1"></WorkInnerType>
                        <WorkInnerType :title="props.Double_Section.Credits.Three.Upper"
                            :subtitle="props.Double_Section.Credits.Three.Lower" class="flex-1"></WorkInnerType>
                        <WorkInnerType :title="props.Double_Section.Credits.Four.Upper"
                            :subtitle="props.Double_Section.Credits.Four.Lower" class="flex-1"></WorkInnerType>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-5 lg:gap-0 mt-16 lg:mt-28">
                <div class="col-span-2 lg:col-span-1">
                    <h1 class="text-4xl xl:text-5xl">Next project</h1>
                </div>
                <NuxtLink :to="nextProjectProps.link" class="col-span-2 lg:col-span-1 ">
                    <Cards class="aspect-square lg:aspect-video" :src="nextProjectProps.Imgsrc" :name="nextProjectProps.name"
                        :category="nextProjectProps.category" :type="nextProjectProps.type" :order="3">
                    </Cards>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();
const animStore = useHeroAnimStore();

const defProps = defineProps({
    props: {
        type: Object,
        required: true,
    },
    nextProjectProps:{
        type: Object,
        required: true,
    }
})
const ctx = ref()

const container = ref(null);
const hero = ref(null);
const middle = ref(null);
const heroImageOverlay = ref()

onMounted(() => {
    ScrollTrigger.create({
        trigger: hero.value,
        start: "top top",
        endTrigger: middle.value,
        end: "top top",
        pin: hero.value,
        pinSpacing: false,
        scrub: true,
    });
    ctx.value = gsap.context((self)=>{
        gsap.to(heroImageOverlay.value, {
            delay: 0.5,
            scaleY: 0,
            duration: 1,
            ease: "power4.out",
            onComplete: () => {
                animStore.setAnimating(false)
            }
        })
        const scrollEffectImage = [...self.selector('.scrollEffectImage')]
        scrollEffectImage.forEach((el) => {
            gsap.to(el, {
                scale: 1,
                transformOrigin: 'center center',
                ease: 'none',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%',
                    end: 'bottom top',
                    scrub: true,
                },
            })
        })
    }, container.value)
})
</script>