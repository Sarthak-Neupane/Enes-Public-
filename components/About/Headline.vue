<template>
    <div class="text-5xl font-normal col-span-9" v-if="width > 1280">
        <h1 class="w-full py-1 overflow-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100"
                :animate="true">
                I combine my experience in product and
            </AnimsAnimLines>
        </h1>
        <h1 class="w-full py-1 overflow-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100"
                :animate="true">
                brand to solve problems, tell stories, and create
            </AnimsAnimLines>
        </h1>
        <h1 class="w-full py-1 overflow-hidden">
            <AnimsAnimLines @complete="revealNav" :action="action" :trigger="{}" :duration="1" ease="power2.out"
                :opacity="0" :y-percent="-100" :animate="true">
                compelling experiences.
            </AnimsAnimLines>
        </h1>
    </div>
    <div class="col-span-12" v-else>
        <h1 class="w-full text-4xl font-medium overflow-hidden translate-y-1/4 opacity-0" ref="Mobile_Headline">
            <span class="min-w-max opacity-0 pointer-events-none">Gap</span> I combine my experience in product and brand to
            solve problems, tell stories, and create compelling experiences.
        </h1>
    </div>
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