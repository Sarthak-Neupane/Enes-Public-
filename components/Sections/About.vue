<template>
    <div ref="container" class="text-light w-full px-2 flex justify-center items-start flex-col py-10" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: '',
        zIndex: 'z-50'
    })">
    <div class="text-4xl font-light md:font-semibold lg:w-full w-[12rem] mb-5 overflow-hidden">
        <h1 class="" ref="header">
            Some More About Me
        </h1>
    </div>
        <p class="font-light text-2xl xl:text-4xl my-5 overflow-hidden" ref="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque enim dignissimos vitae provident! Eius ipsa
            illum, nihil dolorem maxime tempora non, fugiat delectus suscipit magni commodi iste odio ratione explicabo nemo
            quo corporis reprehenderit aspernatur?
        </p>
        <NuxtLink to="/about" data-action="action" @mouseenter="mouseenter"
            class="w-fit px-1 my-3 text-xl font-bold relative z-50 mix-blend-difference text-light">
            <AnimsAnimLinks text="About" :action="hover" @done="completeAnim" :underline="true"></AnimsAnimLinks>
        </NuxtLink>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const { $gsap: gsap } = useNuxtApp();

const { width } = useWindowSize();
const hover = ref(false)

const container = ref()
const paragraph = ref()

const mouseenter = () => {
    if (width.value < 1024) {
        return
    }
    hover.value = true
}

const completeAnim = () => {
    hover.value = false
}

const ctx = ref()

onMounted(()=>{
    ctx.value = gsap.context((self)=>{
        const paragraph = self.selector('p')
        const header = self.selector('h1')
        const link = self.selector('a')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.value,
                start: 'top 70%',
            }
        })

        tl.from(header, {
            yPercent: 100,
            duration: 1,
            ease: 'power2.out',
        })
        tl.from([paragraph, link], {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
        }, '-=.5')
    }, container.value)
})

</script>