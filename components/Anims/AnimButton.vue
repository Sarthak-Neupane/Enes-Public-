<template>
    <button class="opacity-0" ref="button">
            <slot></slot>
    </button>
</template>

<script setup>

const props = defineProps({
    action: {
        type: Boolean,
        default: false
    },
    duration: {
        type: Number,
    }
})

const button = ref()

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();

watch(() => props.action, (newVal, oldVal) => {
    if (newVal) {
        gsap.to(button.value, {
            opacity: 1,
            duration: props.duration,
            ease: 'power2.out'
        })
    }
})

</script>