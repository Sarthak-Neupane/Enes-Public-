<template>
    <div class="relative h-full">
        <section
            class="pt-20 lg:pt-32 pb-9 px-2 sm:px-5 lg:px-7 bg-light text-dark flex flex-col gap-5 lg:gap-10 relative z-20">
            <h1 class="text-2xl sm:text-4xl lg:text-3xl xl:text-5xl py-2 lg:font-semibold overflow-y-hidden">
                <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0"
                    :y-percent="-100" :animate="true" @complete="revealNav">
                    View All My Works
                    <Icon name="teenyicons:top-right-outline" class="text-center" :size="getIconSize" />
                </AnimsAnimLines>
            </h1>
            <div class="w-full grid gap-5 grid-cols-1 lg:grid-cols-4" ref="container">
                <NuxtLink to="/works" class="cursor-none col-span-4 relative">
                    <div class="absolute top-0 left-0 bg-light w-full h-full z-50 origin-bottom cardOverlay"></div>
                    <Cards src="/images/Works/ImageThree.jpg" name="Project One" category="Hobby" type="Website"
                        :order="getOrder(1)" @change="changeIcon" @default="defaultIcon"
                        :aspect="getAspect('aspect-[2.5/1]')">
                    </Cards>
                </NuxtLink>
                <NuxtLink to="/works" class="cursor-none col-span-4 lg:col-span-2 relative">
                    <div class="absolute top-0 left-0 bg-light w-full h-full z-50 origin-bottom cardOverlay"></div>
                    <Cards src="/images/Works/ImageTwo.jpg" name="Project One" category="Hobby" type="Website"
                        :order="getOrder(1)" @change="changeIcon" @default="defaultIcon"
                        :aspect="getAspect('aspect-square')">
                    </Cards>
                </NuxtLink>
                <NuxtLink to="/works" class="cursor-none col-span-4 lg:col-span-2 relative">
                    <div class="absolute top-0 left-0 bg-light w-full h-full z-50 origin-bottom cardOverlay"></div>
                    <Cards src="/images/Works/ImageOne.jpg" name="Project One" category="Hobby" type="Website"
                        :order="getOrder(1)" @change="changeIcon" @default="defaultIcon"
                        :aspect="getAspect('aspect-square')">
                    </Cards>
                </NuxtLink>
                <NuxtLink to="/works" class="cursor-none col-span-4 lg:col-span-4 relative">
                    <div class="absolute top-0 left-0 bg-light w-full h-full z-50 origin-bottom cardOverlay"></div>
                    <Cards src="/images/Works/ImageFour.jpg" name="Project One" category="Hobby" type="Website"
                        :order="getOrder(1)" @change="changeIcon" @default="defaultIcon"
                        :aspect="getAspect('aspect-[2/1]')">
                    </Cards>
                </NuxtLink>
            </div>
        </section>
        <div class="h-screen bg-dark px-2 xl:px-7 flex flex-col justify-end items-stretch absolute bottom-0 left-0 z-0 w-full"
            ref="footer">
            <SectionsFooter class="text-light bg-dark" @change="emitIconChange" @default="emitIconDefault" />
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore()

const action = ref(false)
const ctx = ref()
const container = ref(null)
const footer = ref()

const revealNav = () => {
    console.log('reveal')
    animStore.setAnimating(false)
}

onMounted(() => {
    action.value = true
    gsap.to(container.value, {
        ease: "none",
        scrollTrigger: {
            trigger: footer.value,
            start: "top top",
            endTrigger: container.value,
            end: "bottom +=100%",
            pin: footer.value,
            scrub: true,
            pinSpacer: true,
        },
    })
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


const emits = defineEmits(['change', 'default'])

const emitIconChange = (data) => {
    emits('change', data)
}

const emitIconDefault = (v) => {
    emits('default', v)
}

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