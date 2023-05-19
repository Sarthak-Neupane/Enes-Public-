<template>
    <div class="text-dark px-2 pb-4" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: 'text-dark',
        zIndex: 'z-50'
    })">
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
            <ul class="text-left z-50 relative flex flex-col justify-start items-start">
                <li data-action="instagram" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <a href="https://www.instagram.com" class="cursor-none relative z-40">
                        <AnimsAnimLinks text="Instagram" :action="instagram" @done="completeAnim('instagram')">
                        </AnimsAnimLinks>
                    </a>
                </li>
                <li data-action="twitter" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <a href="https://www.twitter.com" class="cursor-none">
                        <AnimsAnimLinks text="Twitter" :action="twitter" @done="completeAnim('twitter')">
                        </AnimsAnimLinks>
                    </a>
                </li>
                <li data-action="github" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <a href="https://www.github.com" class="cursor-none">
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

const emits = defineEmits(['change', 'default'])

const instagram = ref(false)
const twitter = ref(false)
const github = ref(false)
const switchActions = (action, value) => {
    switch (action) {
        case 'instagram':
            if(value) {
                emits('change', {
                    icon: 'skill-icons:instagram',
                    size: '20px',
                    color: '',
                    zIndex: 'z-10'
                })
            }
            instagram.value = value
            break;
            case 'twitter':
                if(value) {
                    emits('change', {
                        icon: 'skill-icons:twitter',
                        size: '20px',
                        color: '',
                        zIndex: 'z-10'
                    })
                }
                twitter.value = value
            break;
        case 'github':
            if(value){
                emits('change', {   
                        icon: 'skill-icons:github-light',
                        size: '20px',
                        color: '',
                        zIndex: 'z-10'
                    })
            }
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

const mouseleave = (e) => {
    emits('default', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: 'text-dark',
        zIndex: 'z-50'
    })
}
</script>