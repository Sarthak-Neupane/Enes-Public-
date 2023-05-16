<template>
    <div ref="cursor" class="pointer-events-none fixed z-[1000] -top-3 -left-3 h-6 w-6 rounded mix-blend-difference bg-light ">
        
    </div>
</template>

<script setup>
const { $gsap: gsap } = useNuxtApp();

const props = defineProps({
    x: {
        type: Number,
        default: 0
    },
    y: {
        type: Number,
        default: 0
    }
})

const cursor = ref(null);


watch(() => props.x, (newVal, oldVal) => {
    console.log('x', newVal, oldVal)
    gsap.to(cursor.value, {
        x: newVal,
        duration: 0.2,
        stagger: 0.2,
        ease: 'power2.out'
    })
})

watch(() => props.y, (newVal, oldVal) => {
    console.log('y', newVal, oldVal)
    gsap.to(cursor.value, {
        y: newVal,
        duration: 0.2,
        stagger: 0.2,
        ease: 'power2.out'
    })
})

</script>