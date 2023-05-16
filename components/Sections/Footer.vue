<template>
    <div class="text-dark px-2 pb-4">
        <div class="pt-4">
            <div class="my-4">
                <h1 class="font-semibold text-5xl lg:text-4xl break-words">Let's Build Together</h1>
            </div>
            <div class="">
                <h1
                    class="text-3xl lg:my-8 lg:text-7xl underline underline-offset-8 font-light max-w-screen-sm lg:max-w-full break-words">
                    hello@loremgmail.com</h1>
            </div>
        </div>
        <div
            class="mt-8 lg:mt-14 w-full flex justify-center items-start flex-col lg:flex-row lg:justify-between gap-4 lg:items-end">
            <ul class="text-left flex flex-col justify-start items-start">
                <li data-action="instagram" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <a href="https://www.instagram.com">
                        <AnimsAnimLinks text="Instagram" :action="instagram" @done="completeAnim('instagram')">
                        </AnimsAnimLinks>
                    </a>
                </li>
                <li data-action="twitter" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <a href="https://www.twitter.com">
                        <AnimsAnimLinks text="Twitter" :action="twitter" @done="completeAnim('twitter')">
                        </AnimsAnimLinks>
                    </a>
                </li>
                <li data-action="github" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <a href="https://www.github.com">
                        <AnimsAnimLinks text="Github" :action="github" @done="completeAnim('github')">
                        </AnimsAnimLinks>
                    </a>
                </li>
            </ul>
            <ul class="text-left">
                <li>Address</li>
                <li>Phone</li>
            </ul>
            <div class="text-xs w-full text-right lg:w-max">
                created by Sarthak Neupane
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();

const { $gsap: gsap } = useNuxtApp();

const instagram = ref(false)
const twitter = ref(false)
const github = ref(false)
    const switchActions = (action, value)=>{
    switch (action) {
        case 'instagram':
            instagram.value = value
            break;
        case 'twitter':
            twitter.value = value
            break;
        case 'github':
            github.value = value
            break;
        default:
            break;
    }
}

const mouseenter = (e) => {
    const action = e.target.dataset.action
    switchActions(action, true)
}

const completeAnim = (v) => {
    console.log(v)
    switchActions(v, false)
}
</script>