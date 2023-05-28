<template>
    <Transition @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave" @leave="onLeave">
        <MobileNav @clicked="toggleMobileNav" v-if="mobileNav" :navAction="navAction" class="z-50" />
    </Transition>
    <section class="bg-transparent lg:cursor-none font-['Inter_Tight']" ref="mainSection" v-if="mountedValue"
        @mousemove="mousemove" @mouseenter="mouseenterSection">
        <CursorParent v-if="width >= 1024" :mouseX="mouseX" :mouseY="mouseY" :icon="icon" :size="size" :z-index="zIndex"
            :color="color" :mix-blend="mixBlend"></CursorParent>
        <nav ref="nav" v-if="width && width >= 768"
            class="-translate-y-full opacity-0 w-full text-light mix-blend-difference flex items-center sm:px-9 px-7 h-16 z-50 fixed top-0 left-0"
            :class="route.path !== '/' ? 'justify-between' : 'justify-end'">
            <NuxtLink to="/" v-show="route.path !== '/'">
                <h1 data-action="logo" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3 text-3xl font-bold">
                    <AnimsAnimLinks text="En." :action="logo" @done="completeAnim('logo')"></AnimsAnimLinks>
                </h1>
            </NuxtLink>
            <ul class="flex justify-center items-center gap-16 text-md font-medium ">
                <NuxtLink to="/works">
                    <li data-action="action1" @mouseenter="mouseenter" @mouseleave="mouseleave"
                        class="flex justify-center items-center gap-3">
                        <AnimsAnimLinks text="Works" :action="action1" @done="completeAnim('action1')"></AnimsAnimLinks>
                    </li>
                </NuxtLink>
                <NuxtLink to="/about">
                    <li data-action="action2" @mouseenter="mouseenter" @mouseleave="mouseleave"
                        class="flex justify-center items-center gap-3">
                        <AnimsAnimLinks text="About" :action="action2" @done="completeAnim('action2')"></AnimsAnimLinks>
                    </li>
                </NuxtLink>
                <NuxtLink to="/blogs">
                    <li data-action="action3" @mouseenter="mouseenter" @mouseleave="mouseleave"
                        class="flex justify-center items-center gap-3">
                        <AnimsAnimLinks text="Blogs" :action="action3" @done="completeAnim('action3')"></AnimsAnimLinks>
                    </li>
                </NuxtLink>
                <NuxtLink to="/contact">
                    <li data-action="action4" @mouseenter="mouseenter" @mouseleave="mouseleave"
                        class="flex justify-center items-center gap-3">
                        <AnimsAnimLinks text="Contact" :action="action4" @done="completeAnim('action4')"></AnimsAnimLinks>
                    </li>
                </NuxtLink>
            </ul>
        </nav>
        <div class="bg-dark" v-else>
            <div ref="nav" class="-translate-y-full fixed top-0 left-0 w-full z-[100] h-[8vh] px-3 bg-dark flex justify-end items-center text-light">
                <div @click="toggleMobileNav" class="">
                    <!-- <Icon name="iconamoon:menu-burger-horizontal" class="w-6 h-6" /> -->
                    Menu
                </div>
            </div>
        </div>
        <NuxtPage @change="changeIcon" @default="defaultIcon" ref="page" />
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const { $gsap: gsap } = useNuxtApp();

const MobileNav = defineAsyncComponent(() => import('~/components/MobileNav.vue'))

const mobileNav = ref(false)

const bodyClass = computed(() => {
    return {
        'overflow-hidden': mobileNav.value
    }
})

const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value
}

useHead({
    bodyAttrs: {
        class: bodyClass
    }
})

const route = useRoute();

const { width } = useWindowSize();

const navAction = ref(false)

const action1 = ref(false)
const action2 = ref(false)
const action3 = ref(false)
const action4 = ref(false)
const logo = ref(false)

const mouseX = ref(0)
const mouseY = ref(0)

const nav = ref()
const page = ref()

const icon = ref("radix-icons:dot-filled")
const size = ref("30px")
const color = ref("text-light")
const zIndex = ref('z-50')
const mixBlend = ref('mix-blend-difference')


const mountedValue = ref(false)

const animStore = useHeroAnimStore()

const { animating } = storeToRefs(animStore)


onMounted(() => {
    mountedValue.value = true
})

const switchActions = (action, value) => {
    switch (action) {
        case 'logo':
            logo.value = value
            break;
        case 'action1':
            action1.value = value
            break;
        case 'action2':
            action2.value = value
            break;
        case 'action3':
            action3.value = value
            break;
        case 'action4':
            action4.value = value
            break;
        default:
            break;
    }
}

const mouseenter = (e) => {
    const action = e.target.dataset.action
    switchActions(action, true)
}

const completeAnim = (v) => {
    switchActions(v, false)
}

watch(animating, (v) => {
    if (v === false) {
        gsap.to(nav.value, {
            opacity: 1,
            yPercent: 0,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        })
    } else {
        gsap.to(nav.value, {
            opacity: 0,
            yPercent: -100,
            y: -100,
            duration: 1,
            ease: 'power2.out'
        })
    }
})

const mousemove = (e) => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
}

const defaultIcon = (v) => {
    icon.value = v ? v.icon : 'radix-icons:dot-filled'
    size.value = v ? v.size : '30px'
    zIndex.value = v ? v.zIndex : 'z-50'
    color.value = v ? v.color : 'text-light'
    mixBlend.value = v ? v.mixBlend : 'mix-blend-difference'
}

const changeIcon = (v) => {
    icon.value = v.icon
    size.value = v.size
    zIndex.value = v.zIndex
    color.value = v.color
    mixBlend.value = v.mixBlend
}

const mouseenterSection = (e) => {
    defaultIcon()
}

const onBeforeEnter = (el) => {
    gsap.set(el, {
        yPercent: -100,
        y: -100
    })
}

const onEnter = (el, done) => {
    gsap.fromTo(el, {
        yPercent: -100,
        y: -100
    }, {
        opacity: 1,
        yPercent: 0,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        onStart: () => {
            navAction.value = true
        },
        onComplete: () => {
            done()
        }
    })
}

const onBeforeLeave = (el) => {
    // gsap.set(el, {
    //     opacity: 1,
    //     yPercent: 0,
    //     y: 0
    // })
}

const onLeave = (el, done) => {
    // gsap.to(el, {
    //     yPercent: -100,
    //     y: -100,
    //     duration: 1,
    //     ease: 'power2.out',
    //     onComplete: ()=>{
    //         done()
    //     }
    // })
    navAction.value = false
    done()
}

</script>