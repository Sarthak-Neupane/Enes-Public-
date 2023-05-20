<template>
    <section class="min-h-[100dvh] pt-20 lg:pt-32">
        <h1>hello</h1>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore()

onMounted(()=>{
    animStore.setAnimating(false)
})

</script>