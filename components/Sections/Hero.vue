<template>
    <div class="w-full">
        <div
            class="relative z-20 flex flex-col justify-center items-start gap-5 text-7xl font-medium lg:mt-0 lg:w-full lg:flex-row lg:justify-center lg:text-[13rem] lg:font-bold">
            <AnimsAnimChar text="ENES" class="text-justify flex justify-center items-center gap-[1px]" @done="revealOtherAnims"> </AnimsAnimChar>
            <AnimsAnimChar text="YÜKSEK" class="flex justify-center items-center gap-[1px]" > </AnimsAnimChar>
        </div>
        <div class="my-8 text-sm flex justify-center items-center gap-4 flex-row-reverse">
            <p class="lg:font-medium">Designing And Developing Brands</p>
            <div class="flex-1 h-[1px] max-h-[1px] bg-light w-full"></div>
        </div>
    </div>
    <div class="xl:my-10 xl:pb-10">
        <h2 class=" text-xl lg:text-2xl lg:font-semibold overflow-y-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100" :animate="true"  >
                Developer Lorem, ipsum.
            </AnimsAnimLines>
        </h2>
        <p class="mt-3 lg:max-w-md font-light overflow-y-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100" :animate="true"  >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                voluptatum ea eum explicabo eaque dolores pariatur aperiam similique voluptates excepturi?
            </AnimsAnimLines>
        </p>
        <button class="mt-7 mb-7 lg:mt-10 border-[1px] border-solid border-light px-3 text-sm py-1 rounded-md overflow-hidden">
            Request A Project
        </button>
    </div>

    <div v-if="width && width > 1024"
        class="w-full absolute right-4 bottom-4 flex justify-start lg:justify-end items-center">
        <ul class="flex flex-col gap-3 font-semibold">
            <li><button class=" border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md">From
                    Germany</button></li>
            <li><button
                    class=" border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md">Available
                    for freelance</button></li>
        </ul>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { $gsap: gsap } = useNuxtApp();

const action = ref(false)

const { width } = useWindowSize();

const revealOtherAnims = () => {
    action.value = true
}

</script>