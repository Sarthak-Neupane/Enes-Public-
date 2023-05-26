<template>
    <div class="text-dark px-2 flex flex-col justify-end items-stretch" @mouseenter="$emit('change', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: '',
        zIndex: 'z-50'
    })" ref="container">
        <div class="pt-4">
            <h1 class="my-4 py-2 font-semibold text-5xl md:text-4xl lg:text-4xl break-words" id="Headline_Contact">Let's
                Build Together</h1>
            <h1 class="text-3xl lg:my-8 md:my-5 md:text-5xl lg:text-7xl underline underline-offset-8 font-light max-w-screen-sm lg:max-w-full break-words"
                id="Headline_Mail">
                hello@loremgmail.com</h1>
        </div>
        <div id="Footer_Contact"
            class="mt-8 md:mt-12 lg:mt-14 w-full flex justify-center items-start flex-col md:flex-row md:justify-between gap-4 md:items-end">
            <ul class="text-left z-50 relative flex flex-col justify-start items-start">
                <li data-action="instagram" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <a href="https://www.instagram.com" class="cursor-none relative z-40">
                        <AnimsAnimLinks text="Instagram" :action="instagram" @done="completeAnim('instagram')">
                        </AnimsAnimLinks>
                    </a>
                </li>
                <li data-action="twitter" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <a href="https://www.twitter.com" class="cursor-none">
                        <AnimsAnimLinks text="Twitter" :action="twitter" @done="completeAnim('twitter')">
                        </AnimsAnimLinks>
                    </a>
                </li>
                <li data-action="github" @mouseenter="mouseenter" @mouseleave="mouseleave"
                    class="flex justify-center items-center gap-3">
                    <a href="https://www.github.com" class="cursor-none">
                        <AnimsAnimLinks text="Github" :action="github" @done="completeAnim('github')">
                        </AnimsAnimLinks>
                    </a>
                </li>
            </ul>
            <ul class="text-left">
                <li>Address</li>
                <li>Phone</li>
            </ul>
            <div class="text-xs w-full text-right md:w-max">
                created by Sarthak Neupane
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();

const { $gsap: gsap } = useNuxtApp();

const emits = defineEmits(['change', 'default'])

const instagram = ref(false)
const twitter = ref(false)
const github = ref(false)
const switchActions = (action, value) => {
    switch (action) {
        case 'instagram':
            if (value) {
                emits('change', {
                    icon: 'skill-icons:instagram',
                    size: '20px',
                    color: 'text-dark',
                    zIndex: 'z-10',
                    mixBlend: 'mix-blend-normal'
                })
            }
            instagram.value = value
            break;
        case 'twitter':
            if (value) {
                emits('change', {
                    icon: 'skill-icons:twitter',
                    size: '20px',
                    color: 'text-dark',
                    zIndex: 'z-10',
                    mixBlend: 'mix-blend-normal'
                })
            }
            twitter.value = value
            break;
        case 'github':
            if (value) {
                emits('change', {
                    icon: 'skill-icons:github-light',
                    size: '20px',
                    color: 'text-dark',
                    zIndex: 'z-10',
                    mixBlend: 'mix-blend-normal'
                })
            }
            github.value = value
            break;
        default:
            break;
    }
}

const ctx = ref()

const mouseenter = (e) => {
    const action = e.target.dataset.action
    switchActions(action, true)
}

const completeAnim = (v) => {
    switchActions(v, false)
}

const mouseleave = (e) => {
    emits('default', {
        icon: 'radix-icons:dot-filled',
        size: '30px',
        color: '',
        zIndex: 'z-50',
        mixBlend: 'mix-blend-difference'
    })
}

const container = ref()

// onMounted(()=>{
//     ctx.value = gsap.context((self)=>{
//         const headlineContact = self.selector('#Headline_Contact')
//         const headlineMail = self.selector('#Headline_Mail')
//         const footerContact = self.selector('#Footer_Contact')

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: container.value,
//                 start: 'top 80%',
//                 // end: 'bottom 20%',
//             }
//         })

//         tl.from(headlineContact, {
//             y: 100,
//             opacity: 0,
//             duration: 1,
//             ease: 'power4.out'
//         })
//         .from(headlineMail, {
//             y: 100,
//             opacity: 0,
//             duration: 1,
//             ease: 'power4.out'
//         }, '-=0.7')
//         .from(footerContact, {
//             opacity: 0,
//             duration: 1,
//             ease: 'power4.out'
//         }, '-=0.5')

//     }, container.value)
// })

onUnmounted(() => {
    ctx.value.revert()
})

</script>