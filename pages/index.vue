<template>
    <section
        class="min-h-screen max-h-screen h-screen flex flex-col justify-end items-start md:justify-center xl:justify-end px-2 xl:px-7 pb-12"
        ref="hero">
        <SectionsHero @change="emitIconChange" @default="emitIconDefault"></SectionsHero>
    </section>
    <section class="min-h-screen bg-light rounded-t-2xl px-2 xl:px-7 relative" ref="middle">
        <SectionsWorks @change="emitIconChange" @default="emitIconDefault"></SectionsWorks>
    </section>
    <section class="bg-dark px-2 xl:px-7" ref="lowerMiddle">
        <SectionsAbout @change="emitIconChange" @default="emitIconDefault"></SectionsAbout>
    </section>
    <section class="relative min-h-screen h-full">
        <section class="bg-light rounded-b-2xl px-2 xl:px-7 relative top-0 left-0 w-full h-full z-10 translate-y-0" ref="blogs">
            <SectionsBlogs @change="emitIconChange" @default="emitIconDefault"></SectionsBlogs>
        </section>
        <section class="h-screen bg-dark px-2 xl:px-7 flex flex-col justify-end items-stretch absolute bottom-0 left-0 z-0 w-full" ref="footer">
            <SectionsFooter @change="emitIconChange" @default="emitIconDefault" class="text-light bg-dark z-0 h-[70vh]"></SectionsFooter>
        </section>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore()

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
const blogs = ref(null)


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
    gsap.to(blogs.value, {
        ease: "none",
        scrollTrigger: {
            trigger: footer.value,
            start: "top top",
            endTrigger: blogs.value,
            end: width.value > 1024 ? "bottom top" : "bottom +=40%",
            pin: footer.value,
            scrub: true,
            pinSpacer: true,
        },
    })
})

onBeforeRouteLeave((to, from, next) => {
    animStore.setAnimating(true)
    next()
});

</script>
