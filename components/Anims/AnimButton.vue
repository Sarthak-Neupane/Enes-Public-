<template>
    <button :class="getClass" ref="button">
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
    },
    animate: {
        type: Boolean,
        default: false
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
    } else {
        gsap.to(button.value, {
            opacity: 0,
            duration: props.duration,
            ease: 'power2.out'
        })
    }
})

const getClass = computed(()=>{
    if(props.animate){
        return "opacity-0"
    }else{
        return ""
    }
})

</script>