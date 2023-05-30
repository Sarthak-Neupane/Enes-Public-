<template>
    <div class="text-dark bg-light py-10 px-2" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: 'text-light',
        zIndex: 'z-50',
        mixBlend: 'mix-blend-difference'
    })" 
    ref="container">
        <div class="overflow-hidden py-1">
            <h1 class="text-4xl font-light sm:w-full w-[12rem]" id="Headline_Blogs">Featured Blogs</h1>
        </div>
        <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">    
            <NuxtLink to="/blogs/blog1" class="col-span-1" >
                <BlogCards src="/images/Blogs/Blog1.jpg" alt="BlogImageOne" category="Tech">
                    The Next Big Thing in Tech
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs/blog3" class="col-span-1">
                <BlogCards src="/images/Blogs/Blog2.jpg" alt="BlogImageTwo" category="Design">
                    What Would the World Look Like Without Design?
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs/blog5" class="col-span-1 sm:col-span-2 lg:col-span-1 ">
                <BlogCards src="/images/Blogs/Blog3.jpg" alt="BlogImageThree" category="Fashion">
                    20 Myths About Fashion: Busted
                </BlogCards>
            </NuxtLink>
        </div>
        <div class="w-fit text-left">
            <NuxtLink to="/blogs" data-action="action" @mouseenter="mouseenter"
                class="w-fit px-1 py-1 text-xl font-extralight relative z-40 mix-blend-difference text-light">
                <AnimsAnimLinks text="Blogs" :action="action" @done="completeAnim" :underline="true"></AnimsAnimLinks>
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
        const Headline_Blogs = self.selector('#Headline_Blogs')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.value,
                start: 'top 80%',
                end: 'bottom 20%',
            }
        })

        tl.fromTo(Headline_Blogs, {
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