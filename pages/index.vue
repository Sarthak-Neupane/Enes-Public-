<template>
        <div>
            <div class="relative">
                <img v-if="width && width < 1024" class="mb-10" src="/images/ImageThree.jpg" alt="">
                <div class="absolute top-0 left-0 h-full w-full z-10 bg-gradient-to-b from-dark via-transparent to-dark"></div>
            </div>
            <div class="relative z-20 -mt-40 flex flex-col justify-center items-start gap-5 text-7xl font-medium lg:mt-10 lg:w-full lg:flex-row lg:justify-center lg:text-[13rem] lg:font-bold">
                <div class="text-justify flex justify-center items-center gap-[1px]">
                    <span>E</span>
                    <span>N</span>
                    <span>E</span>
                    <span>S</span>
                </div>
                <div class="flex justify-center items-center gap-[1px]">
                    <span>Y</span>
                    <span>Ü</span>
                    <span>K</span>
                    <span>S</span>
                    <span>E</span>
                    <span>K</span>
                </div>
            </div>
            <div class="my-8 text-sm flex justify-center items-center gap-4 lg:flex-row-reverse" v-if="width >= 1024">
                <p class="lg:font-medium">Designing And Developing Brands</p>
                <div class="flex-1 h-[1px] max-h-[1px] bg-light"></div>
            </div>
            <div class="mt-7">
                <h2 class=" text-xl lg:text-2xl lg:font-semibold">Developer From Germany</h2>
                <p class="mt-3 lg:max-w-md font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatum ea eum explicabo eaque dolores pariatur aperiam similique voluptates excepturi?</p>
            </div>
        </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';


const { $gsap: gsap } = useNuxtApp();

const { width } = useWindowSize();

</script>
