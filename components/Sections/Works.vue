<template>
    <div class="text-dark bg-light py-10 px-2" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: 'text-light',
        zIndex: 'z-50',
        mixBlend: 'mix-blend-difference'
    })" 
    ref="container">
        <div class="overflow-hidden">
            <h1 class="text-4xl font-light sm:font-normal sm:w-full w-[12rem]" id="Headline_Work">Featured Works</h1>
        </div>
        <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">    
            <NuxtLink to="/works/project1" class="col-span-1" >
                <Cards src="/enes/Leonardo_Creative_monochrom_avantgarde_website_portfolio_asymm_2.jpg" name="Project One" category="Hobby" type="Website" :order="getOrder(1)" @change="changeIcon" @default="defaultIcon">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works/project2" class="col-span-1">
                <Cards src="/enes/Leonardo_Diffusion_monochrom_avantgarde_complex_website_portfo_1.jpg" name="Project Two" category="Tech" type="Website" :order="getOrder(2)" @change="changeIcon" @default="defaultIcon">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works/project3" class="col-span-1 sm:col-span-2 lg:col-span-1 ">
                <Cards class="sm:aspect-video lg:aspect-[3/4]" src="/enes/Leonardo_Diffusion_monochrom_avantgarde_complex_website_portfo_3.jpg" name="Project Three" category="Hobby" type="Application"
                    :order="getOrder(3)"  @change="changeIcon" @default="defaultIcon">
                </Cards>
            </NuxtLink>
        </div>
        <div class="w-fit text-left">
            <NuxtLink to="/works" data-action="action" @mouseenter="mouseenter"
                class="w-fit px-1 py-1 text-xl font-medium relative z-40 mix-blend-difference text-light">
                <AnimsAnimLinks text="Works" :action="action" @done="completeAnim" :underline="true"></AnimsAnimLinks>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>  
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const { $gsap: gsap } = useNuxtApp();

const emits = defineEmits(['change', 'default'])

const getOrder = (v) => {
    if (width.value > 1024) {
        return 0
    } else {
        return v
    }
}

const action = ref(false)

const mouseenter = () => {
    if (width.value < 1024) {
        return
    }
    action.value = true

}

const completeAnim = () => {
    action.value = false
}

const changeIcon = (v) => {
    emits('change', v)
}

const defaultIcon = (v)=>{
    emits('default', v)
}

const container = ref()

const ctx = ref()

onMounted(()=>{
    ctx.value = gsap.context((self)=>{
        const Headline_Work = self.selector('#Headline_Work')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.value,
                start: 'top 80%',
                end: 'bottom 20%',
            }
        })

        tl.fromTo(Headline_Work, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out'
        })

    }, container.value)
})

</script>