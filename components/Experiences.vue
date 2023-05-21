<template>
    <div class="flex flex-col justify-center items-start custom_experiences" >
        <h2 class="text-light opacity-70">{{title}}</h2>
        <h3 class="text-lg font-normal max-w-[10rem]">{{subtitle}}</h3>
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