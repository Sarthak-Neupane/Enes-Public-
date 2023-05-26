<template>
    <div class="flex flex-col justify-start items-start">
        <img :src="src" :alt="alt" class="rounded-md aspect-square xl:aspect-auto object-cover">
        <div class="flex flex-col justify-start items-start gap-2 mt-3 px-2">
            <span class="font-extralight text-xs border px-2 py-1 rounded-md bg-dark bg-opacity-10">{{ category  }}</span>
            <p class="text-lg font-normal w-full"><slot></slot></p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
})
</script>