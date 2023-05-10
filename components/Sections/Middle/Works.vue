<template>
    <div class="text-dark py-10 px-2">
        <div>
            <h1 class="text-4xl font-light w-[12rem]">Featured Works</h1>
        </div>
        <div class="my-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Cards src="/images/imOne.jpg" name="Project One" category="Hobby" type="Website" :order="getOrder(1)"></Cards>
            <Cards src="/images/imTwo.jpg" name="Project Two" category="Hobby" type="Website" :order="getOrder(2)"></Cards>
            <Cards src="/images/imThree.jpg" name="Project Three" category="Hobby" type="Application" :order="getOrder(3)"></Cards>
        </div>
        <div class="w-full text-left">
            <NuxtLink class="text-xl underline-offset-8 underline font-bold" to="/works">See All</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const getOrder = (v)=>{
    if(width.value > 1024) {
        return 0
    } else {
        return v
    }
}

</script>