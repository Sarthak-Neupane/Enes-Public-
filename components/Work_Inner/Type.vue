<template>
    <div class="flex flex-col justify-center items-start" >
        <h2 class="opacity-70">{{title}}</h2>
        <h3 class="text-lg font-normal">{{subtitle}}</h3>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    }
})
</script>