<template>
    <section class="pt-20 lg:pt-32 pb-9 px-2 lg:px-7 bg-light text-dark flex flex-col gap-5 lg:gap-10">
        <h1 class="text-2xl lg:text-3xl xl:text-5xl py-2 lg:font-semibold overflow-y-hidden">
            <AnimsAnimLines :action="action" :trigger="{}" :duration="1" ease="power2.out" :opacity="0" :y-percent="-100"
                :animate="true">
                View All My Works <Icon name="teenyicons:top-right-outline" class="text-center" size="30px" />
            </AnimsAnimLines>
        </h1>
        <div class="w-full grid gap-5 grid-cols-1 lg:grid-cols-4">
            <NuxtLink to="/works" class="cursor-none col-span-4" >
                <Cards src="/images/Works/ImageThree.jpg" name="Project One" category="Hobby" type="Website" :order="getOrder(1)" @change="changeIcon" @default="defaultIcon" :aspect="aspect">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works" class="cursor-none col-span-4 lg:col-span-2" >
                <Cards src="/images/Works/ImageTwo.jpg" name="Project One" category="Hobby" type="Website" :order="getOrder(1)" @change="changeIcon" @default="defaultIcon" :aspect="aspect">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works" class="cursor-none col-span-4 lg:col-span-2" >
                <Cards src="/images/Works/ImageOne.jpg" name="Project One" category="Hobby" type="Website" :order="getOrder(1)" @change="changeIcon" @default="defaultIcon" :aspect="aspect">
                </Cards>
            </NuxtLink>
            <NuxtLink to="/works" class="cursor-none col-span-4 lg:col-span-2" >
                <Cards src="/images/Works/ImageFour.jpg" name="Project One" category="Hobby" type="Website" :order="getOrder(1)" @change="changeIcon" @default="defaultIcon" :aspect="aspect">
                </Cards>
            </NuxtLink>
        </div>
    </section>
    <SectionsFooter class="bg-dark text-light px-2 lg:px-7" />
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();

const { width } = useWindowSize();

const aspect = ref(width.value > 1024 ? 'aspect-video' : 'aspect-square')

const animStore = useHeroAnimStore()

const action = ref(false)

onMounted(()=>{
    animStore.setAnimating(false)
    action.value = true
})


const emits = defineEmits(['change', 'default'])

const getOrder = (v) => {
    if (width.value > 1024) {
        return 0
    } else {
        return v
    }
}


const changeIcon = (v) => {
    emits('change', v)
}

const defaultIcon = (v)=>{
    emits('default', v)
}


</script>