<template>
    <div class="w-full">
        <div
            class="relative z-20 flex flex-col justify-center items-start gap-5 text-7xl font-medium lg:mt-0 lg:w-full lg:flex-row lg:justify-center lg:text-[13rem] lg:font-bold">
            <AnimsAnimChar text="ENES" class="text-justify flex justify-center items-center gap-[1px]"
                @done="revealOtherAnims"> </AnimsAnimChar>
            <AnimsAnimChar text="YÜKSEK" class="flex justify-center items-center gap-[1px]"> </AnimsAnimChar>
        </div>
        <div class="my-8 text-sm relative flex justify-start" ref="group">
            <p class="lg:font-medium absolute bg-dark px-3 top-0 right-0 -translate-y-1/2 overflow-hidden" ref="movingText">
                <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0"
                    :y-percent="-100" :animate="true">
                    Designing and Developing Brands
                </AnimsAnimLines>
            </p>
            <div class="h-[1px] max-h-[1px] bg-light w-0" ref="line"></div>
        </div>
    </div>
    <div class="xl:my-10 xl:pb-10">
        <h2 class=" text-xl lg:text-2xl lg:font-semibold overflow-y-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100"
                :animate="true">
                Developer Lorem, ipsum.
            </AnimsAnimLines>
        </h2>
        <p class="mt-3 lg:max-w-md font-light overflow-y-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100"
                :animate="true">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                voluptatum ea eum explicabo eaque dolores pariatur aperiam similique voluptates excepturi?
            </AnimsAnimLines>
        </p>
        <AnimsAnimButton class="mt-7 mb-7 lg:mt-10 border-[1px] border-solid border-light px-3 text-sm py-1 rounded-md "
            :action="action" :duration="2">
            Request A Project
        </AnimsAnimButton>
    </div>

    <div v-if="width && width > 1024"
        class="w-full absolute right-4 bottom-4 flex justify-start lg:justify-end items-center">
        <ul class="flex flex-col gap-3 font-semibold">
            <li>
                <AnimsAnimButton :action="action" :duration="2"
                    class=" border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md">From
                    Germany</AnimsAnimButton>
            </li>
            <li>
                <AnimsAnimButton :action="action" :duration="2"
                    class="border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md">
                    Available
                    for freelance</AnimsAnimButton>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();

const action = ref(false)

const movingText = ref()
const group = ref()
const line = ref()


const getLineWidth = () => {
    const lineWidth = (((group.value.offsetWidth) - (line.value.offsetWidth)))
    return lineWidth
}

const { width } = useWindowSize();

const revealOtherAnims = () => {

    const t1 = gsap.timeline({
        onUpdate: () => {
            if (t1.progress() > 0.4) {
                action.value = true
            }
        }
    })

    t1.to(line.value, {
        width: getLineWidth,
        duration: 1.5,
        ease: 'power2.out'
    })

    // action.value = true
}

</script>

<style scoped>.theGroup.reorder {
    flex-direction: row-reverse !important;
}</style>