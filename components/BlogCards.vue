<template>
    <div class="flex flex-col justify-start items-start" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <div class="relative">
            <img :src="src" :alt="alt" class="rounded-md object-cover aspect-square xl:aspect-[3/4]" ref="img" >
            <div class=" absolute h-full w-full bg-gradient-to-b from-[rgba(13,13,13,0.5)] via-transparent to-[rgba(13,13,13,0.5)] top-0 left-0 rounded-md opacity-1 lg:opacity-0"
                ref="overlay"></div>
            <div class="absolute top-3 right-3 opacity-0" ref="icon">
                <Icon name="iconoir:arrow-tr" class="text-center text-light" size="25px" />
            </div>
        </div>
        <div class="flex flex-col justify-start items-start gap-2 mt-3 px-2">
            <AnimsAnimButton :scaleOverride="true" :action="action" :duration="1" :animate="animate"
                cursorType="cursor-pointer"
                class=" border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md">
                {{ category }}
            </AnimsAnimButton>
            <p class="text-lg font-normal w-full">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize()

const { $gsap: gsap } = useNuxtApp();

const action = ref(width.value < 1024 ? true : false);
const animate = ref(width.value < 1024 ? false : true);

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
})

const overlay = ref()
const icon = ref()

const img = ref()

onMounted(() => {
    action.value = true
})

const mouseenter = () => {
    if (width.value < 1024) return
    gsap.to(icon.value, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    })
    gsap.to(overlay.value, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    })
}

const mouseleave = () => {
    if (width.value < 1024) return
    gsap.to(icon.value, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    })
    gsap.to(overlay.value, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    })
}

</script>