<template>
    <section class="lg:min-h-screen px-2 lg:px-7 lg:pt-24" ref="hero">
        <SectionsHero></SectionsHero>
    </section>
    <section class="min-h-screen bg-light rounded-t-2xl px-2 lg:px-7 relative" ref="middle">
        <SectionsMiddleWorks></SectionsMiddleWorks>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';


const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();

const hero = ref(null)
const middle = ref(null)

onMounted(() => {
    ScrollTrigger.create({
        trigger: middle.value,
        start: "top bottom",
        end: "top top",
        pin: hero.value,
        pinSpacing: false,
    });
})

</script>
