<template>
    <div class="relative h-full">
    <section ref="container" class="relative z-20 sm:max-h-[100vh] sm:min-h-[100vh] lg:max-h-none sm:flex sm:flex-col sm:justify-between">
        <div class="lg:h-[100vh] bg-dark px-2 sm:px-9 lg:px-7 pt-10 lg:pt-28 mb-16 lg:mb-0">
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
                        <button class="w-full bg-light text-dark mt-3 sm:mt-8 lg:mt-4 py-2 rounded-md font-medium">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    </section>   
    <div class="h-screen bg-light px-2 xl:px-7 flex flex-col justify-end items-stretch absolute bottom-0 left-0 z-0 w-full" ref="footer">
        <SectionsFooter class="text-dark bg-light" @change="emitIconChange" @default="emitIconDefault" />
    </div>
</div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore()

const container = ref()
const footer = ref()

const ctx = ref()

onMounted(() => {

    gsap.to(container.value, {
        ease: "none",
        scrollTrigger: {
            trigger: footer.value,
            start: "top top",
            endTrigger: container.value,
            end: "bottom +=40%",
            pin: footer.value,
            scrub: true,
            pinSpacer: true,
        },
    })

    ctx.value = gsap.context((self)=>{
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

const getTextAreaRows = computed(()=>{
    if(width.value >= 1024){
        return 5
    } else if(width.value >= 648){
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

const emits = defineEmits(['change', 'default'])

const emitIconChange = (data) => {
    emits('change', data)
}

const emitIconDefault = (v) => {
    emits('default', v)
}
</script>