<template>
    <div class="w-full">
        <div
            class="relative z-20 flex flex-col justify-center items-start gap-5 text-7xl font-medium lg:mt-0 lg:w-full lg:flex-row lg:justify-center lg:text-[13rem] lg:font-bold">
            <AnimsAnimChar :play="play" text="ENES" class="text-justify flex justify-center items-center gap-[1px]"
                @done="revealOtherAnims"> </AnimsAnimChar>
            <AnimsAnimChar :play="play" text="YÜKSEK" class="flex justify-center items-center gap-[1px]"> </AnimsAnimChar>
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
    <div class="xl:my-10 xl:pb-10 z-50">
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
        <NuxtLink to="/works" >
            <AnimsAnimButton class="mt-7 mb-7 lg:mt-10 border-[1px] border-solid border-light px-3 text-sm py-1 rounded-md "
                :action="action" :duration="2" :animate="true" cursor-type="cursor-none" @mouseenter="$emit('change', {
                    icon: 'line-md:arrow-small-right',
                    size: '30px',
                    color: 'text-dark',
                    zIndex: 'z-10',
                    addedClass: ''
                })" 
                @mouseleave="$emit('default', {})">
                Request A Project
            </AnimsAnimButton>
        </NuxtLink>
    </div>

    <div v-if="width && width > 1024"
        class="w-full absolute right-4 bottom-4 flex justify-start lg:justify-end items-center">
        <ul class="flex flex-col gap-3 font-semibold">
            <li>
                <AnimsAnimButton cursor-type="cursor-none" :action="action" :duration="2" :animate="true" @mouseenter="$emit('change', {
                    icon: 'radix-icons:dot-filled',
                    size: '30px',
                    color: 'text-light',
                    zIndex: 'z-10',
                    addedClass: 'mix-blend-difference'
                })" 
                @mouseleave="$emit('default', {})"
                    class=" border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md">From
                    Germany</AnimsAnimButton>
            </li>
            <li>
                <AnimsAnimButton cursor-type="cursor-none" :action="action" :duration="2" :animate="true"
                    class="border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md" @mouseenter="$emit('change', {
                    icon: 'radix-icons:dot-filled',
                    size: '30px',
                    color: 'text-light',
                    zIndex: 'z-10',
                    addedClass: 'mix-blend-difference'
                })" 
                @mouseleave="$emit('default', {})">
                    Available
                    for freelance</AnimsAnimButton>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();

const animStore = useHeroAnimStore()

const play = ref(false)
const action = ref(false)

const movingText = ref()
const group = ref()
const line = ref()

const emits = defineEmits(['change', 'default'])

const enterHover = ()=>{
    emits('change', {
                Icon: 'material-symbols:send-rounded',
                size: '30px',
                color: 'text-dark'
            })
}


const getLineWidth = () => {
    const lineWidth = (((group.value.offsetWidth) - (line.value.offsetWidth)))
    return lineWidth
}

const { width } = useWindowSize();

const revealOtherAnims = () => {

    const t1 = gsap.timeline({
        onComplete: () => {
            animStore.setAnimating(false)
            action.value = true
        }
    })

    t1.to(line.value, {
        width: getLineWidth,
        duration: 1.5,
        ease: 'expo.in'
    })
}

onMounted(()=>{
    play.value = true
})

</script>
