<template>
    <nav class="h-[100lvh] fixed top-0 left-0 w-full bg-dark text-light z-50 overflow-hidden" ref="nav">
        <NuxtLink to="/" @click="toggleMobileNav">
            Home
        </NuxtLink>
        <NuxtLink to="/works" @click="toggleMobileNav">
            Works
        </NuxtLink>
        <NuxtLink to="/about" @click="toggleMobileNav">
            About
        </NuxtLink>
        <NuxtLink to="/contact" @click="toggleMobileNav">
            Contact
        </NuxtLink>
    </nav>
</template>

<script setup>
const nav = ref()

const emits = defineEmits(['clicked'])

const toggleMobileNav = () => {
    emits('clicked')
}

</script>