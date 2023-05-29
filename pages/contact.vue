<template>
    <section ref="container"
        class="relative z-10">
        <div class="lg:h-[100vh] h-screen bg-dark text-light px-2 sm:px-9 lg:px-7 pt-10 lg:pt-28 mb-16 lg:mb-0 rounded-b-2xl">
            <div class="col-span-10 grid-flow-row mt-20 mb-10 lg:my-15 overflow-hidden">
                <h1 class="text-5xl" id="Contact_Headline">Reach Out</h1>
            </div>
            <div class="grid grid-cols-10" id="Contact_Form">
                <div class="col-span-0 lg:col-span-5"></div>
                <div class="col-span-10 lg:col-span-5">
                    <p class="max-w-md opacity-70">Whether it's a conversation about all things design or thinking about a
                        potential project or opportunity, get in touch</p>
                    <form class="w-full mt-10 pb-4">
                        <div class="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-4 w-full">
                            <input type="text"
                                class="bg-light bg-opacity-5 text-light py-2 w-full md:w-1/2 px-3 rounded-md focus:outline-none"
                                placeholder="Name">
                            <input type="text"
                                class="bg-light bg-opacity-5 text-light py-2 w-full md:w-1/2 px-3 rounded-md focus:outline-none"
                                placeholder="Email">
                        </div>
                        <textarea
                            class="mt-4 sm:mt-8 lg:mt-4 rounded-md py-2 px-3 bg-light bg-opacity-5 text-light resize-none w-full focus:outline-none"
                            placeholder="Message" id="" :rows="getTextAreaRows"></textarea>
                        <button
                            class="w-full bg-light text-dark mt-3 sm:mt-8 lg:mt-4 py-2 rounded-md font-medium">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore()

const container = ref()

const ctx = ref()

onMounted(() => {
    ctx.value = gsap.context((self) => {
        const headline = self.selector('#Contact_Headline')
        const form = self.selector('#Contact_Form')

        const timeline = gsap.timeline({
            onComplete: () => {
                animStore.setAnimating(false)
            },
            ease: 'power4.out'
        })

        timeline
            .from(headline, {
                yPercent: 100,
                opacity: 0,
                duration: 1
            })
            .from(form, {
                opacity: 0,
                yPercent: 10,
                duration: 0.75
            }, '-=0.5')

    }, container.value)
})

const getTextAreaRows = computed(() => {
    if (width.value >= 1024) {
        return 5
    } else if (width.value >= 648) {
        return 7
    } else {
        return 6
    }
})

onUnmounted(() => {
    ctx.value.revert()
})

onBeforeRouteLeave((to, from, next) => {
    animStore.setAnimating(true)
    next()
});
</script>