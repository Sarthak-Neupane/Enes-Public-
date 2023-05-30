<template>
    <nav class="h-[100lvh] bg-dark text-light flex justify-center flex-col items-start gap-3 text-5xl px-2 sm:px-7 font-normal fixed top-0 left-0 w-full z-50 overflow-hidden"
        ref="nav">
        <NuxtLink to="/works" @click="toggleMobileNav" class="-translate-y-5 opacity-0">
            Works
        </NuxtLink>
        <NuxtLink to="/about" @click="toggleMobileNav" class="-translate-y-5 opacity-0">
            About
        </NuxtLink>
        <NuxtLink to="/blogs" @click="toggleMobileNav" class="-translate-y-5 opacity-0">
            Blogs
        </NuxtLink>
        <NuxtLink to="/contact" @click="toggleMobileNav" class="-translate-y-5 opacity-0">
            Contact
        </NuxtLink>
    </nav>
</template>

<script setup>

const { $gsap: gsap } = useNuxtApp()

const nav = ref()

const props = defineProps({
    navAction: {
        type: Boolean,
        required: true
    }
})

watch(() => props.navAction, (val) => {
    const links = [...nav.value.querySelectorAll('a')]
    if (val) {
        gsap.to(links, {
            delay: 0.3,
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.2,
            ease: 'power4.out'
        })
    } else {
        // gsap.to(nav.value, {
        //     duration: 0.5,
        //     y: '-100%',
        //     opacity: 0,
        //     ease: 'power4.out'
        // })
    }
})

const emits = defineEmits(['clicked'])

const toggleMobileNav = () => {
    emits('clicked')
}

</script>