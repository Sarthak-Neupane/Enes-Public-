<template>
    <section
        class="pt-20 lg:pt-32 pb-9 px-2 sm:px-5 lg:px-7 bg-light text-dark flex flex-col gap-5 lg:gap-10 relative z-20 rounded-b-2xl">
        <h1 class="text-2xl sm:text-4xl lg:text-3xl xl:text-5xl py-2 overflow-y-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100"
                :animate="true" @complete="revealNav">
                View All My Works
                <Icon name="teenyicons:top-right-outline" class="text-center" :size="getIconSize" />
            </AnimsAnimLines>
        </h1>
        <div class="w-full grid gap-5 grid-cols-1 lg:grid-cols-4" ref="container">
            <NuxtLink to="/works/project1" class="col-span-4 relative">
                <div class="absolute top-0 left-0 bg-light w-full h-full z-50 origin-bottom cardOverlay"></div>
                <Cards src="/images/Works/One.jpg" name="Project One" category="Hobby" type="Website"
                    :order="getOrder(1)" @change="changeIcon" @default="defaultIcon" :aspect="getAspect('aspect-[2.5/1]')">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works/project2" class="col-span-4 lg:col-span-2 relative">
                <div class="absolute top-0 left-0 bg-light w-full h-full z-50 origin-bottom cardOverlay"></div>
                <Cards src="/images/Works/Two.jpg" name="Project One" category="Hobby" type="Website"
                    :order="getOrder(1)" @change="changeIcon" @default="defaultIcon" :aspect="getAspect('aspect-square')">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works/project3" class="col-span-4 lg:col-span-2 relative">
                <div class="absolute top-0 left-0 bg-light w-full h-full z-50 origin-bottom cardOverlay"></div>
                <Cards src="/images/Works/Three.jpg" name="Project One" category="Hobby" type="Website"
                    :order="getOrder(1)" @change="changeIcon" @default="defaultIcon" :aspect="getAspect('aspect-square')">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works/project4" class="col-span-4 lg:col-span-4 relative">
                <div class="absolute top-0 left-0 bg-light w-full h-full z-50 origin-bottom cardOverlay"></div>
                <Cards src="/images/Works/Four.jpg" name="Project One" category="Hobby" type="Website"
                    :order="getOrder(1)" @change="changeIcon" @default="defaultIcon" :aspect="getAspect('aspect-[2/1]')">
                </Cards>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore()

const action = ref(false)
const ctx = ref()
const container = ref(null)

const revealNav = () => {
    console.log('reveal')
    animStore.setAnimating(false)
}

onMounted(() => {
    action.value = true
    ctx.value = gsap.context((self) => {
        const cards = self.selector('.cardOverlay')
        gsap.to(cards, {
            scaleY: 0,
            delay: 0.3,
            duration: 1.2,
            ease: 'power4.out',
            stagger: {
                each: 0.4,
                from: 'start'
            },
        })
    }, container.value)
})

const getOrder = (v) => {
    if (width.value > 1024) {
        return 0
    } else {
        return v
    }
}

const getAspect = (v) => {
    if (width.value >= 1024) {
        return v
    } else if (width.value >= 768) {
        return 'aspect-video'
    } else {
        return 'aspect-square'
    }
}


const changeIcon = (v) => {
    emits('change', v)
}

const defaultIcon = (v) => {
    emits('default', v)
}

const getIconSize = computed(() => {
    if (width.value > 1024) {
        return '30px'
    } else {
        return '20px'
    }
})

onBeforeRouteLeave((to, from, next) => {
    animStore.setAnimating(true)
    next()
});
</script>