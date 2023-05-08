<template>
    <div ref="lineSelector">
        <slot></slot>
    </div>
</template>


<script setup>
const { $gsap: gsap } = useNuxtApp();

const lineSelector = ref(null);

// onMounted(()=>{
//     const t1 = gsap.timeline();
//     const lines = lineSelector.value
//     t1.from(lines, {
//         duration: 2,
//         yPercent: 100,
//         opacity: 0,
//         ease: 'power2.out'
//     })
// })

</script>