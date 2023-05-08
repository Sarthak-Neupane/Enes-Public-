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
        trigger: hero.value,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: true,
        // scrub: true,
        onToggle: self => console.log("toggled, isActive:", self.isActive),
        onUpdate: self => {
            console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
        }
    });
})

</script>
