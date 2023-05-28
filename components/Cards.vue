<template>
    <div class="relative col-span-1 rounded-lg" @mouseenter="mouseenter" @mouseleave="mouseleave" :class="[aspect]">
        <nuxt-img :src="src" class="h-full w-full object-cover rounded-lg" />
        <div class="absolute z-20 top-0 w-full h-full l-0 p-3 md:p-5 lg:p-6 xl:p-7 flex flex-col justify-between items-start rounded-lg"
            ref="card">
            <div class="w-full flex items-center" :class="getTheOrder(1)">
                <AnimsAnimButton :action="action" :duration="1" :animate="animate" cursorType="cursor-pointer"
                    class=" border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md">
                    {{ category }}
                </AnimsAnimButton>
            </div>
            <div class="text-light w-full">
                <h2 class="text-3xl xl:text-4xl font-light w-full overflow-hidden py-1"
                    :class="getTheOrder(2)">
                    <anims-anim-lines :action="action" :duration="1" :yPercent="-100" :opacity="0" :ease="'power2.out'"
                        :animate="animate">
                        {{ name }}
                    </anims-anim-lines>
                </h2>
                <p class="font-extralight overflow-hidden xl:text-xl xl:font-light" :class="getTheOrder(2)">
                    <anims-anim-lines :action="action" :duration="1" :yPercent="-100" :opacity="0" :ease="'power2.out'"
                        :animate="animate">
                        {{ type }}
                    </anims-anim-lines>
                </p>
            </div>
        </div>
        <div ref="overlay"
            class=" absolute h-full w-full bg-gradient-to-b from-[rgba(13,13,13,0.5)] via-transparent to-[rgba(13,13,13,0.5)] top-0 left-0 rounded-lg opacity-1 lg:opacity-0">
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { $gsap: gsap } = useNuxtApp();

const emits = defineEmits(['change', 'default'])


const props = defineProps({
    src: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    aspect: {
        type: String,
        required: false,
        default: "aspect-[3/4]"
    }
})

const { width } = useWindowSize();

const overlay = ref(null)

const getTheOrder = (v) => {
    if (v === 1) {
        if (props.order % 2 === 0) {
            return "justify-end"
        }
        else {
            return "justify-start"
        }
    } else if (v === 2) {
        if (props.order % 2 == 0) {
            return "text-left"
        } else {
            return "text-right"
        }
    }
}

const action = ref(width.value < 1024 ? true : false);
const animate = ref(width.value < 1024 ? false : true);

const mouseenter = () => {
    if (width.value < 1024) return;
    emits('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: 'text-light',
        zIndex: 'z-50',
        mixBlend: 'mix-blend-normal'
    });
    gsap.to(overlay.value, {
        duration: 0.5,
        opacity: 1,
        ease: "power2.out"
    })
    action.value = true;
}

const mouseleave = () => {
    if (width.value < 1024) return;
    emits('default', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: 'text-light',
        zIndex: 'z-50',
        removeMixBlend: false
    })
    gsap.to(overlay.value, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out"
    })
    action.value = false;
}

</script>