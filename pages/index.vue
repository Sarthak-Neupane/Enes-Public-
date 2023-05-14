<template>
    <section class="lg:min-h-screen lg:max-h-screen h-[100dvh] flex flex-col justify-end items-start px-2 xl:px-7 pb-12" ref="hero">
        <SectionsHero></SectionsHero>
    </section>
    <section class="min-h-screen bg-light rounded-t-2xl px-2 xl:px-7 relative" ref="middle">
        <SectionsMiddleWorks></SectionsMiddleWorks>
    </section>
    <section class="bg-dark px-2 xl:px-7" ref="lowerMiddle">
        <SectionsLowerMiddle></SectionsLowerMiddle>
    </section>
    <section class="px-2 xl:px-7 bg-light" ref="footer">
        <SectionsFooter></SectionsFooter>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';


const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();

const hero = ref(null)
const middle = ref(null)
const lowerMiddle = ref(null)
const footer = ref(null)

const uncover = gsap.timeline({ paused: true })


onMounted(() => {

    gsap.set(footer.value, { yPercent: 100 })
    uncover.to(footer.value, { yPercent: 0, ease: 'none' });

    ScrollTrigger.create({
        trigger: hero.value,
        start: "top top",
        endTrigger: middle.value,
        end: "top top",
        pin: hero.value,
        pinSpacing: false,
        scrub: true,
    });

    ScrollTrigger.create({
        trigger: lowerMiddle.value,
        start: 'top 80%',
        end: '+=75%',
        animation: uncover,
        scrub: true,
    })
})

</script>
