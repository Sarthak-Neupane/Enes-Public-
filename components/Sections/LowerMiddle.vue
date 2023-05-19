<template>
    <div class="text-light w-full px-2 flex justify-center items-start flex-col pb-5" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: '',
        zIndex: 'z-50'
    })">
        <p class="py-10 text-2xl xl:text-4xl">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla expedita laboriosam culpa nisi error repellat nihil ipsam similique in. Ratione animi facere dolore praesentium, repellat unde accusamus fugit perspiciatis similique soluta iusto reprehenderit.
        </p>
        <NuxtLink to="/about" data-action="action" @mouseenter="mouseenter" class="w-fit px-1 py-1 text-xl font-bold relative z-50 mix-blend-difference text-light">
                <AnimsAnimLinks text="About" :action="action" @done="completeAnim" :underline="true"></AnimsAnimLinks>
            </NuxtLink>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
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