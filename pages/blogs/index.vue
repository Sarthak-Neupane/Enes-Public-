<template>
    <section
        class="pt-20 lg:pt-32 pb-9 px-2 sm:px-5 lg:px-7 bg-light text-dark flex flex-col gap-5 lg:gap-10 relative z-20 rounded-b-2xl">
        <BlogsHeadline :action="action" @complete="revealNav" class="col-span-9 mb-10"></BlogsHeadline>
        <div class="grid grid-cols-9 place-items-center gap-9" ref="container">
            <NuxtLink to="/blogs" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog1.jpg" alt="BlogImageOne" category="Tech">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus repellat repudiandae?
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog2.jpg" alt="BlogImageOne" category="Tech">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus repellat repudiandae?
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog3.jpg" alt="BlogImageOne" category="Tech">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus repellat repudiandae?
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog2.jpg" alt="BlogImageOne" category="Tech">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus repellat repudiandae?
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog3.jpg" alt="BlogImageOne" category="Tech">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus repellat repudiandae?
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog1.jpg" alt="BlogImageOne" category="Tech">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus repellat repudiandae?
                </BlogCards>
            </NuxtLink>
        </div>
    </section>
    <section
        class="bg-dark text-light h-screen flex flex-col justify-end items-stretch px-2 xl:px-7 z-[0] relative -mt-[100vh]"
        ref="footer">
        <SectionsFooter @change="emitIconChange" @default="emitIconDefault" class="text-light bg-dark h-[70vh]">
        </SectionsFooter>
    </section>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import { useHeroAnimStore } from '~/store/heroAnim';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { width } = useWindowSize();

const animStore = useHeroAnimStore()

const action = ref(false)
const ctx = ref()
const container = ref(null)
const footer = ref()

const revealNav = () => {
    animStore.setAnimating(false)
    ctx.value = gsap.context((self)=>{
        const items = [...self.selector('a')]
        gsap.set(items, {autoAlpha: 0})
        // gsap.to(items, {
        //     autoAlpha: 1,
        //     stagger: 0.1,
        //     duration: 0.5,
        // })
        gsap.fromTo(items, {
            autoAlpha: 0,
            y: width.value > 1024 ? 20 : 10,
        }, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.1,
            duration: 1,
        })
    }, container.value)
}

onMounted(() => {
    action.value = true
    setTimeout(() => {
        ScrollTrigger.create({
            trigger: footer.value,
            pin: true,
            start: "bottom bottom",
            end: "+=60%",
        });
    }, 500);
})


const emits = defineEmits(['change', 'default'])

const emitIconChange = (data) => {
    emits('change', data)
}

const emitIconDefault = (v) => {
    emits('default', v)
}


onBeforeRouteLeave((to, from, next) => {
    animStore.setAnimating(true)
    next()
});


</script>