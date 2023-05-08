<template>
    <div class="relative">
        <img v-if="width && width < 1024" class="mb-10" src="/images/ImageThree.jpg" alt="">
        <div class="absolute top-0 left-0 h-full w-full z-10 bg-gradient-to-b from-dark via-transparent to-dark"></div>
    </div>
    <div
        class="relative z-20 -mt-40 flex flex-col justify-center items-start gap-5 text-7xl font-medium lg:mt-0 lg:w-full lg:flex-row lg:justify-center lg:text-[13rem] lg:font-bold">
        <AnimsAnimChar text="ENES" class="text-justify flex justify-center items-center gap-[1px]"> </AnimsAnimChar>
        <AnimsAnimChar text="YÜKSEK" class="flex justify-center items-center gap-[1px]"> </AnimsAnimChar>
    </div>
    <div class="my-8 text-sm flex justify-center items-center gap-4 lg:flex-row-reverse" v-if="width >= 1024">
        <p class="lg:font-medium">Designing And Developing Brands</p>
        <div class="flex-1 h-[1px] max-h-[1px] bg-light"></div>
    </div>
    <div class="my-7">
        <h2 class=" text-xl lg:text-2xl lg:font-semibold overflow-y-hidden">
            <AnimsAnimLines>
                Developer Lorem, ipsum.
            </AnimsAnimLines>
        </h2>
        <p class="mt-3 lg:max-w-md font-light">
            <AnimsAnimPara>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                voluptatum ea eum explicabo eaque dolores pariatur aperiam similique voluptates excepturi?
            </AnimsAnimPara>
        </p>
        <button class="mt-7 lg:mt-10 border-[1px] border-solid border-light px-3 text-sm py-1 rounded-md">Request
            Project</button>
    </div>
    <div v-if="width && width > 1024" class="w-full mt-12 flex justify-start lg:justify-end items-center">
       <ul class="flex flex-col gap-3 font-semibold">
        <li><button class=" border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md">From Germany</button></li>
        <li><button class=" border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md">Available for freelance</button></li>
       </ul>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';


const { $gsap: gsap } = useNuxtApp();

const { width } = useWindowSize();

</script>