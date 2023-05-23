<template>
    <div ref="container" class="pointer-events-none">
        <span v-for="char in text" class="translate-y-0 inline-block" :class="getClass">{{ char }}</span>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    action: {
        type: Boolean,
        default: false
    },
    underline: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['done'])

const { $gsap: gsap } = useNuxtApp();

const container = ref(null);
// const t1 = gsap.timeline();

watch(() => props.action, (v) => {
    if(width.value < 1024) return
    const characters = [...container.value.querySelectorAll('span')];
    if (v) {
        gsap.from(characters, {
            duration: 0.5,
            yPercent: 100,
            stagger: (0.5 / characters.length) / 2,
            opacity: 0,
            ease: 'back.out(1.7)',
            onComplete: () => {
                emits('done')
            }
        })
    }
})

const getClass = computed(()=>{
    if(props.underline){
        return 'underline underline-offset-8'
    }
})
</script>