<template>
    <div class="text-dark py-10 px-2" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: '',
        zIndex: 'z-50',
        mixBlend: 'mix-blend-difference'
    })" 
    >
        <div>
            <h1 class="text-4xl font-light md:font-semibold lg:w-full w-[12rem]">Featured Works</h1>
        </div>
        <div class="my-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <NuxtLink to="/works" class="cursor-none" >
                <Cards src="/images/imOne.jpg" name="Project One" category="Hobby" type="Website" :order="getOrder(1)" @change="changeIcon" @default="defaultIcon">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works" class="cursor-none">
                <Cards src="/images/imTwo.jpg" name="Project Two" category="Tech" type="Website" :order="getOrder(2)" @change="changeIcon" @default="defaultIcon">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works" class="cursor-none">
                <Cards src="/images/imThree.jpg" name="Project Three" category="Hobby" type="Application"
                    :order="getOrder(3)"  @change="changeIcon" @default="defaultIcon">
                </Cards>
            </NuxtLink>
        </div>
        <div class="w-fit text-left">
            <NuxtLink to="/works" data-action="action" @mouseenter="mouseenter"
                class="w-fit px-1 py-1 text-xl font-bold relative z-50 mix-blend-difference text-light">
                <AnimsAnimLinks text="Works" :action="action" @done="completeAnim" :underline="true"></AnimsAnimLinks>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const emits = defineEmits(['change', 'default'])

const getOrder = (v) => {
    if (width.value > 1024) {
        return 0
    } else {
        return v
    }
}

const action = ref(false)

const mouseenter = () => {
    if (width.value < 1024) {
        return
    }
    action.value = true

}

const completeAnim = () => {
    action.value = false
}

const changeIcon = (v) => {
    emits('change', v)
}

const defaultIcon = (v)=>{
    emits('default', v)
}

</script>