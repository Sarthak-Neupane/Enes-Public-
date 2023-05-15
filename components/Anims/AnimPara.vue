<template>
    <div ref="paraSelector" class="">
        <slot></slot>
    </div>
</template>


<script setup>
const { $gsap: gsap } = useNuxtApp();

const paraSelector = ref(null);

// onMounted(()=>{
//     const t1 = gsap.timeline();
//     const para = paraSelector.value
//     t1.from(para, {
//         duration: 4,
//         opacity: 0,
//         ease: 'power2.out'
//     })
// })

</script>