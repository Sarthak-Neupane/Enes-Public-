<template>
    <section class="bg-dark text-light" v-if="mountedValue">
        <ClientOnly>
            <template #fallback>
                <a href="/">Projects</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </template>
            <nav v-if="width && width > 1024" class="w-full bg-dark flex justify-end items-center pr-7 h-16 z-50 fixed top-0 left-0">
                <ul class="flex justify-center items-center gap-16 text-md font-medium">
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            <nav v-else class="flex justify-end items-center pt-4">
                <div>
                    <Icon name="iconamoon:menu-burger-horizontal" class="w-6 h-6" />
                </div>
            </nav>
        </ClientOnly>
        <slot></slot>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();

const mountedValue = ref(false)

onMounted(()=>{
    mountedValue.value = true
})

</script>