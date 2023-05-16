<template>
    <div ref="container">
        <span v-for="char in text" class="translate-y-0 inline-block" :class="getClass">{{ char }}</span>
    </div>
</template>

<script setup>
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
    const characters = [...container.value.querySelectorAll('span')];
    if (v) {
        gsap.from(characters, {
            duration: 0.8,
            yPercent: 100,
            stagger: 0.1,
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