<template>
    <div ref="cursor" class="pointer-events-none fixed text-light"
        :class="[zIndex, mixBlend]">
        <div class="h-full w-full">
            <Icon :name="icon" :size="size" :class="color" />
        </div>
    </div>
</template>

<script setup>
const { $gsap: gsap } = useNuxtApp();

const props = defineProps({
    mouseX: {
        type: Number,
        default: 0
    },
    mouseY: {
        type: Number,
        default: 0
    },
    zIndex: {
        type: String,
        default: 'z-50'
    },
    icon: {
        type: String,
        default: 'radix-icons:dot-filled'
    },
    size: {
        type: String,
        default: '30px'
    },
    color: {
        type: String,
        default: 'text-light'
    },
    mixBlend: {
        type: String,
        default: 'mix-blend-difference'
    }
})

const cursor = ref(null);


watch(() => props.mouseX, (newVal, oldVal) => {
    gsap.to(cursor.value, {
        left: (newVal - cursor.value.offsetWidth / 2),
        duration: 0.2,
        stagger: 0.2,
        ease: 'power2.out'
    })
})

watch(() => props.mouseY, (newVal, oldVal) => {
    gsap.to(cursor.value, {
        top: (newVal - cursor.value.offsetHeight / 2),
        duration: 0.2,
        stagger: 0.2,
        ease: 'power2.out'
    })
})

</script>