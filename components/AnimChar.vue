<template>
    <div ref="container">
        <span v-for="char in text">{{ char }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
const { $gsap: gsap } = useNuxtApp();

const container = ref(null);

onMounted(() => {
    const t1 = gsap.timeline();
    const characters = container.value.querySelectorAll('span');
    t1.from(characters, {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    })
})


</script>