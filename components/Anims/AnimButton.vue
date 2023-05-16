<template>
    <button :class="[getClass, cursorType]" ref="button" class="relative" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <div class="border-[1px] border-solid border-light absolute origin-left scale-x-0 w-full h-full bg-light top-0 left-0 rounded-md mix-blend-difference" ref="background"></div>
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
    },
    hover: {
        type: Boolean,
        default: false
    },
    cursorType: {
        type: String,
        default: false
    }
})

const button = ref()
const background = ref()

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

const mouseenter = () => {
    gsap.to(background.value, {
        scaleX: 1,
        duration: 1,
        ease: 'expo.out'
    })
}

const mouseleave = () => {
    gsap.to(background.value, {
        scaleX: 0,
        duration: 1,
        ease: 'expo.out'
    })
}

</script>