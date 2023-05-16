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
    },
    play: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['done'])

const { $gsap: gsap } = useNuxtApp();

const container = ref(null);
const t1 = gsap.timeline({});

watch(() => props.play, (newVal, oldVal) => {
    if (newVal) {
        const characters = container.value.querySelectorAll('span');
        t1.from(characters, {
            duration: 1,
            y: 250,
            opacity: 0,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            onComplete: () => {
                emits('done')
            }
        })
    } 
})
</script>