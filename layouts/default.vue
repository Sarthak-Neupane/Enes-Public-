<template>
    <section class="bg-dark text-light" v-if="mountedValue">
        <ClientOnly>
            <template #fallback>
                <a href="/">Projects</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </template>
            <nav ref="nav" v-if="width && width > 1024" class="opacity-0 w-full bg-transparent mix-blend-difference flex justify-end items-center  pr-7 h-16 z-50 fixed top-0 left-0">
                <ul class="flex justify-center items-center gap-16 text-md font-medium ">
                    <NuxtLink to="/">
                        <li data-action="action1"  @mouseenter="mouseenter" @mouseleave="mouseleave" class="flex justify-center items-center gap-3">
                            <AnimsAnimLinks text="Projects" :action="action1" @done="completeAnim('action1')"></AnimsAnimLinks>
                        </li>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <li data-action="action2"  @mouseenter="mouseenter" @mouseleave="mouseleave" class="flex justify-center items-center gap-3">
                            <AnimsAnimLinks text="About" :action="action2" @done="completeAnim('action2')"></AnimsAnimLinks>
                        </li>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <li data-action="action3"  @mouseenter="mouseenter" @mouseleave="mouseleave" class="flex justify-center items-center gap-3">
                            <AnimsAnimLinks text="Contact" :action="action3" @done="completeAnim('action3')"></AnimsAnimLinks>
                        </li>
                    </NuxtLink>
                </ul>
            </nav>
            <nav ref="nav" v-else class="opacity-0 fixed z-[100] top-3 right-4 mix-blend-difference">
                <div class="">
                    <Icon name="iconamoon:menu-burger-horizontal" class="w-6 h-6" />
                </div>
            </nav>
        </ClientOnly>
        <slot ></slot>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';
import { storeToRefs } from 'pinia';

const { width } = useWindowSize();

const { $gsap: gsap } = useNuxtApp();

const action1 = ref(false)
const action2 = ref(false)
const action3 = ref(false)

const nav = ref()

const mountedValue = ref(false)

const animStore = useHeroAnimStore()

const { animating } = storeToRefs(animStore)

onMounted(()=>{
    mountedValue.value = true
})

const switchActions = (action, value)=>{
    switch (action) {
        case 'action1':
            action1.value = value
            break;
        case 'action2':
            action2.value = value
            break;
        case 'action3':
            action3.value = value
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

watch(animating, (v)=>{
    if(v === false){
        gsap.to(nav.value, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        })
    }
})

</script>