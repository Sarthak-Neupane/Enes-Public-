<template>
    <div class="w-full text-left pt-3 border-light border-b-[1px] border-solid border-opacity-50 pb-2 relative">
        <h1 class="">{{title}}</h1>
        <div class="absolute top-0 left-0 w-full h-full bg-light scale-y-0 origin-bottom mix-blend-difference"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>