<template>
    <div class="text-5xl font-normal col-span-9" v-if="width >= 1280">
        <h1 class="w-full py-2 overflow-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100"
                :animate="true">
                My thoughts on design,
            </AnimsAnimLines>
        </h1>
        <h1 class="w-full py-2 overflow-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100"
                :animate="true">
                technology and events.
            </AnimsAnimLines>
        </h1>
    </div>
    <div class="col-span-12 overflow-hidden " v-else>
        <h1 class="w-full text-4xl font-medium translate-y-1/2 opacity-0" ref="Mobile_Headline">
            <span class="min-w-max opacity-0 pointer-events-none">Gap</span> My thoughts on design,
            technology and events.
        </h1>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();

const { width } = useWindowSize();

const emits = defineEmits(['complete'])
const props = defineProps({
    action: {
        type: Boolean,
        default: false
    }
})

// const complete = () => {
//     emits('complete')
// }

const Mobile_Headline = ref(null)

watch(() => props.action, (newVal, oldVal) => {
    if (newVal) {
        const timeline = gsap.timeline()
        timeline.to(Mobile_Headline.value, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
            onComplete: () => {
                emits('complete')
            }
        })
    }
})
</script>