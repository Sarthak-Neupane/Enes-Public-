<template>
    <nav ref="nav" v-if="width && width >= 768"
        class="-translate-y-full opacity-0 w-full text-light mix-blend-difference flex items-center sm:px-9 px-7 h-16 z-50 fixed top-0 left-0"
        :class="route.path !== '/' ? 'justify-between' : 'justify-end'">
        <NuxtLink to="/" v-show="route.path !== '/'">
            <h1 data-action="logo" @mouseenter="mouseenter" @mouseleave="mouseleave"
                class="flex justify-center items-center gap-3 text-3xl font-bold">
                <AnimsAnimLinks text="En." :action="logo" @done="completeAnim('logo')"></AnimsAnimLinks>
            </h1>
        </NuxtLink>
        <ul class="flex justify-center items-center gap-16 text-md font-medium ">
            <NuxtLink to="/works">
                <li data-action="action1" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <AnimsAnimLinks text="Works" :action="action1" @done="completeAnim('action1')"></AnimsAnimLinks>
                </li>
            </NuxtLink>
            <NuxtLink to="/about">
                <li data-action="action2" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <AnimsAnimLinks text="About" :action="action2" @done="completeAnim('action2')"></AnimsAnimLinks>
                </li>
            </NuxtLink>
            <NuxtLink to="/blogs">
                <li data-action="action3" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <AnimsAnimLinks text="Blogs" :action="action3" @done="completeAnim('action3')"></AnimsAnimLinks>
                </li>
            </NuxtLink>
            <NuxtLink to="/contact">
                <li data-action="action4" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <AnimsAnimLinks text="Contact" :action="action4" @done="completeAnim('action4')"></AnimsAnimLinks>
                </li>
            </NuxtLink>
        </ul>
    </nav>
    <div class="" v-else>
        <div ref="nav"
            class="-translate-y-full fixed top-0 left-0 w-full z-[100] h-[8vh] px-3 flex justify-end items-center mix-blend-difference text-light">
            <div @click="toggleMobileNav" class="">
                <Icon name="iconamoon:menu-burger-horizontal" class="w-6 h-6" />
            </div>
        </div>
    </div>
</template>


<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const { $gsap: gsap } = useNuxtApp();

const emits = defineEmits(['openMobileNav'])

// const MobileNav = defineAsyncComponent(() => import('~/components/MobileNav.vue'))

// const mobileNav = ref(false)

const toggleMobileNav = () => {
    // mobileNav.value = !mobileNav.value
    emits('openMobileNav')
}

const route = useRoute();

const { width } = useWindowSize();


const action1 = ref(false)
const action2 = ref(false)
const action3 = ref(false)
const action4 = ref(false)
const logo = ref(false)

const nav = ref()
const animStore = useHeroAnimStore()

const { animating } = storeToRefs(animStore)


const switchActions = (action, value) => {
    switch (action) {
        case 'logo':
            logo.value = value
            break;
        case 'action1':
            action1.value = value
            break;
        case 'action2':
            action2.value = value
            break;
        case 'action3':
            action3.value = value
            break;
        case 'action4':
            action4.value = value
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
    switchActions(v, false)
}

watch(animating, (v) => {
    if (v === false) {
        gsap.to(nav.value, {
            opacity: 1,
            yPercent: 0,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        })
    } else {
        gsap.to(nav.value, {
            opacity: 0,
            yPercent: -100,
            y: -100,
            duration: 1,
            ease: 'power2.out'
        })
    }
})


</script>