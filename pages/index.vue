<template>
    <section class="min-h-screen max-h-screen h-screen flex flex-col justify-end items-start px-2 xl:px-7 pb-12" ref="hero">
        <SectionsHero @change="emitIconChange" @default="emitIconDefault" ></SectionsHero>
    </section>
    <section class="min-h-screen bg-light rounded-t-2xl px-2 xl:px-7 relative" ref="middle">
        <SectionsWorks @change="emitIconChange" @default="emitIconDefault"></SectionsWorks>
    </section>
    <section class="bg-dark px-2 xl:px-7" ref="lowerMiddle">
        <SectionsAboutNew @change="emitIconChange" @default="emitIconDefault"></SectionsAboutNew>
    </section>
    <section class="px-2 xl:px-7 bg-light" ref="footer">
        <SectionsFooter @change="emitIconChange" @default="emitIconDefault"></SectionsFooter>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();

const emits = defineEmits(['change', 'default'])

const emitIconChange = (data) => {
    emits('change', data)
}

const emitIconDefault = (v) => {
    emits('default', v)
}

const hero = ref(null)
const middle = ref(null)
const lowerMiddle = ref(null)
const footer = ref(null)

const uncover = gsap.timeline({ paused: true })

onMounted(() => {

    // gsap.set(footer.value, { yPercent: 100 })
    // uncover.to(footer.value, { yPercent: 0, ease: 'none' });

    ScrollTrigger.create({
        trigger: hero.value,
        start: "top top",
        endTrigger: middle.value,
        end: "top top",
        pin: hero.value,
        pinSpacing: false,
        scrub: true,
    });

    // ScrollTrigger.create({
    //     trigger: lowerMiddle.value,
    //     start: 'top 70%',
    //     end: '+=75%',
    //     animation: uncover,
    //     scrub: true,
    // })

    // gsap.to(".panel:not(:last-child)", {
    //     yPercent: -100,
    //     ease: "none",
    //     stagger: 0.5,
    //     scrollTrigger: {
    //         trigger: "#container",
    //         start: "top top",
    //         end: "+=300%",
    //         scrub: true,
    //         pin: true
    //     }
    // });


    // gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
})

</script>
