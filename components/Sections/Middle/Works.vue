<template>
    <div class="text-dark py-10 px-2">
        <div>
            <h1 class="text-4xl font-light md:font-semibold lg:w-full w-[12rem]">Featured Works</h1>
        </div>
        <div class="my-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Cards src="/images/imOne.jpg" name="Project One" category="Hobby" type="Website" :order="getOrder(1)"></Cards>
            <Cards src="/images/imTwo.jpg" name="Project Two" category="Tech" type="Website" :order="getOrder(2)"></Cards>
            <Cards src="/images/imThree.jpg" name="Project Three" category="Hobby" type="Application" :order="getOrder(3)">
            </Cards>
        </div>
        <div class="w-fit text-left">
            <NuxtLink to="/works" data-action="action" @mouseenter="mouseenter" class="w-fit px-1 py-1 text-xl font-bold">
                <AnimsAnimLinks text="Works" :action="action" @done="completeAnim" :underline="true"></AnimsAnimLinks>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

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

</script>