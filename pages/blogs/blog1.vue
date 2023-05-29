<template>
    <section class="pt-20 min-h-screen bg-light">

    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore();

onMounted(()=>{
    animStore.setAnimating(false)
})

</script>