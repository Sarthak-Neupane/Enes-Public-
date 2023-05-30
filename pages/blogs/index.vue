<template>
    <section
        class="pt-20 lg:pt-32 pb-9 px-2 sm:px-5 lg:px-7 bg-light text-dark flex flex-col gap-5 lg:gap-10 relative z-20 rounded-b-2xl">
        <BlogsHeadline :action="action" @complete="revealNav" class="col-span-9 mb-10"></BlogsHeadline>
        <div class="grid grid-cols-9 place-items-center gap-9" ref="container">
            <NuxtLink to="/blogs/blog1" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog1.jpg" alt="BlogImageOne" category="Tech">
                    The Next Big Thing in Tech
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs/blog2" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog2.jpg" alt="BlogImageOne" category="Fashion">
                    The Ugly Truth About Fashion
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs/blog3" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog3.jpg" alt="BlogImageOne" category="Design">
                    What Would the World Look Like Without Design?
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs/blog4" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog2.jpg" alt="BlogImageOne" category="Tech">
                    This Week's Top Stories About Tech
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs/blog5" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog3.jpg" alt="BlogImageOne" category="Fashion">
                    20 Myths About Fashion: Busted
                </BlogCards>
            </NuxtLink>
            <NuxtLink to="/blogs/blog6" class="col-span-10 xl:col-span-3 opacity-0" >
                <BlogCards src="/images/Blogs/Blog1.jpg" alt="BlogImageOne" category="Design">
                    Why You're Failing at Design
                </BlogCards>
            </NuxtLink>
        </div>
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
})


onBeforeRouteLeave((to, from, next) => {
    animStore.setAnimating(true)
    next()
});


</script>