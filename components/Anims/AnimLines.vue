<template>
    <div ref="lineSelector" :class="returnClass">
        <slot></slot>
    </div>
</template>


<script setup>
const { $gsap: gsap } = useNuxtApp();
const lineSelector = ref(null);

const props = defineProps({
    duration: {
        type: Number,
        default: 1
    },
    yPercent: {
        type: Number,
        default: -100
    },
    opacity: {
        type: Number,
        default: 1
    },
    ease: {
        type: String,
        default: 'power2.out'
    },
    action: {
        type: Boolean,
        default: false
    },
    trigger: {
        type: Object,
        // required: true
    },
    animate: {
        type: Boolean,
        default: false
    }
})

const returnClass = computed(()=>{
    if(props.animate){
        if(props.yPercent === 0){
            return "translate-y-0"
        } else {
            return "translate-y-full"
        }
    } else {
        return "translate-y-0"
    }
})

const emits = defineEmits(['complete'])


watch(() => props.action, (v) => {
    if (v) {
        gsap.to(lineSelector.value, {
            duration: props.duration,
            yPercent: props.yPercent,
            opacity: 1,
            ease: props.ease,
            onComplete: () => {
                emits('complete')
            }
        })
    } else {
        gsap.to(lineSelector.value, {
            duration: props.duration,
            yPercent: 0,
            opacity: 0,
            ease: props.ease,
        })
    }
})

</script>