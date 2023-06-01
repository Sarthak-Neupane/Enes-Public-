<template>
    <div>
        <SeoKit />
        <Transition @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave" @leave="onLeave">
            <MobileNav @clicked="toggleMobileNav" v-if="mobileNav" :navAction="navAction" class="z-50" />
        </Transition>
        <section class="lg:cursor-none font-['Inter']" :class="getBackgroundColorForBody" ref="mainSection"
            v-if="mountedValue" @mousemove="mousemove" @mouseenter="mouseenterSection">
            <CursorParent class="z-[1000]" v-if="width >= 1024" :mouseX="mouseX" :mouseY="mouseY" :icon="icon" :size="size"
                :z-index="zIndex" :color="color" :mix-blend="mixBlend"></CursorParent>
            <NavBar @openMobileNav="toggleMobileNav"></NavBar>
            <section class=" pointer-events-none">
                <div class="pointer-events-auto relative z-10">
                    <NuxtPage @change="changeIcon" @default="defaultIcon" ref="page" />
                </div>
                <SectionsFooter v-if="mountFooter" @change="changeIcon" @default="defaultIcon"
                    class="pointer-events-auto z-0 sticky bottom-0" :class="getColorForFooter">
                </SectionsFooter>
            </section>
        </section>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';



useHead({
  link: [
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "57x57",
      href: "/favicons/apple-touch-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "114x114",
      href: "/favicons/apple-touch-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "72x72",
      href: "/favicons/apple-touch-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "144x144",
      href: "/favicons/apple-touch-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "60x60",
      href: "/favicons/apple-touch-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "120x120",
      href: "/favicons/apple-touch-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "76x76",
      href: "/favicons/apple-touch-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "152x152",
      href: "/favicons/apple-touch-icon-152x152.png",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-196x196.png",
      sizes: "196x196",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-128.png",
      sizes: "128x128",
    },
  ],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "msapplication-TileColor", content: "#FFFEFF" },
    { name: "msapplication-TileImage", content: "/mstile-144x144.png" },
    { name: "msapplication-square70x70logo", content: "/mstile-70x70.png" },
    {
      name: "msapplication-square150x150logo",
      content: "/favicons/mstile-150x150.png",
    },
    {
      name: "msapplication-wide310x150logo",
      content: "/favicons/mstile-310x150.png",
    },
    {
      name: "msapplication-square310x310logo",
      content: "/favicons/mstile-310x310.png",
    },
  ],
})

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
const mouseX = ref(0)
const mouseY = ref(0)

const nav = ref()
const page = ref()

const icon = ref("radix-icons:dot-filled")
const size = ref("30px")
const color = ref("text-light")
const zIndex = ref('z-[1000]')
const mixBlend = ref('mix-blend-difference')


const mountedValue = ref(false)
const mountFooter = ref(false)

const animStore = useHeroAnimStore()

const { animating } = storeToRefs(animStore)

onMounted(() => {
    mountedValue.value = true
    setTimeout(() => {
        mountFooter.value = true
    }, 50);
})

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

const getBackgroundColorForBody = computed(() => {
    switch (route.path) {
        case '/':
            return 'bg-dark'
        case '/about':
            return 'bg-light'
        case '/contact':
            return 'bg-light '
        case '/works':
            return 'bg-dark'
        case '/works/[slug]':
            return 'bg-dark'
        case 'blogs':
            return 'bg-dark text-light'
        case 'blogs/[slug]':
            return 'bg-dark text-light'
        default:
            return 'bg-dark'
    }
})


const getColorForFooter = computed(() => {
    switch (route.path) {
        case '/':
            return 'bg-dark text-light'
        case '/about':
            return 'bg-light text-dark'
        case '/contact':
            return 'bg-light text-dark '
        case '/works':
            return 'bg-dark text-light'
        case '/works/[slug]':
            return 'bg-dark text-light'
        case 'blogs':
            return 'bg-dark text-light'
        case 'blogs/[slug]':
            return 'bg-dark text-light'
        default:
            return 'bg-dark text-light'
    }
})

</script>