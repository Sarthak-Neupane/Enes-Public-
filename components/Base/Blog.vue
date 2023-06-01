<template>
    <section class="pt-20 pb-5 rounded-b-2xl lg:pt-52 px-2 lg:px-7 min-h-screen bg-light" ref="container">
        <div class="max-w-full mx-auto sm:max-w-2xl lg:max-w-screen-sm xl:max-w-screen-md">
            <div class="flex flex-col justify-start items-start gap-2 sm:gap-3">
                <span class="text-accent text-sm">{{ category }}</span>
                <h1 class="text-2xl lg:text-3xl 2xl:text-4xl text-dark font-medium">
                    {{ title }}
                </h1>
            </div>
            <div class="my-5 overflow-hidden rounded-md">
                <img :src="cover" class="w-full rounded-md scale-110 aspect-square sm:aspect-video object-cover"
                    id="heroImage" />
            </div>
            <div class="text-dark flex flex-col gap-5">
                <slot>

                </slot>
            </div>
            <div class="text-accent text-sm my-10">
                {{ date }}
            </div>
            <div>
                <a class="twitter-share-button" :href="href" data-size="large">
                    Tweet</a>
            </div>
        </div>
        <div class="mt-20 mb-5 lg:mb-8 text-4xl font-light">
            Related Articles
        </div>
        <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            <NuxtLink v-for="article in relatedArticles" :key="article.to" :to="article.to"
                class="col-span-1 sm:col-span-2 lg:col-span-1 ">
                <BlogCards :src="article.src" :alt="article.alt" :category="article.category">
                    {{ article.title }}
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

const animStore = useHeroAnimStore();

const href = ref(`https://twitter.com/intent/tweet?url=${window.location.href}`)

const container = ref(null)

const props = defineProps({
    uniqueIdNumber: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
})

const relatedArticles = ref([])

const getAllMetadataArticles = (v) => {
    switch (v) {
        case 1:
            return {
                title: 'Blog One',
                category: 'Tech',
                src: '/images/Blog/TechOne.jpg',
                alt: 'BlogImageOne',
                to: '/blogs/blog1'
            }
        case 2:
            return {
                title: 'Blog Two',
                category: 'Fashion',
                src: '/images/Blog/FashionOne.jpg',
                alt: 'BlogImageTwo',
                to: '/blogs/blog2'
            }

        case 3:
            return {
                title: 'Blog Three',
                category: 'Design',
                src: '/images/Blog/DesignOne.jpg',
                alt: 'BlogImageThree',
                to: '/blogs/blog3'
            }

        case 4:
            return {
                title: "Blog Four",
                category: 'Tech',
                src: '/images/Blog/TechTwo.jpg',
                alt: 'BlogImageThree',
                to: '/blogs/blog4'
            }

        case 5:
            return {
                title: 'Blog Five',
                category: 'Fashion',
                src: '/images/Blog/FashionTwo.jpg',
                alt: 'BlogImageThree',
                to: '/blogs/blog5'
            }

        case 6:
            return {
                title: "Blog Six",
                category: 'Design',
                src: '/images/Blog/DesignTwo.jpg',
                alt: 'BlogImageThree',
                to: '/blogs/blog6'
            }

        default:
            return {
                error: 'No related articles found'
            }
    }
}

// GET THREE RANDOM NUMBERS FOR RELATED ARTICLES BUT NOT THE CURRENT ARTICLE, AND NOT DUPLICATES
const getRandomNumbers = computed(() => {
    const randomNumbers = []
    while (randomNumbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 6) + 1
        if (randomNumbers.indexOf(randomNumber) === -1 && randomNumber !== props.uniqueIdNumber) {
            randomNumbers.push(randomNumber)
        }
    }
    return randomNumbers
})

const ctx = ref()

onMounted(() => {
    animStore.setAnimating(false)
    const randoms = getRandomNumbers.value
    randoms.forEach(number => {
        relatedArticles.value.push(getAllMetadataArticles(number))
    })

    ctx.value = gsap.context((self) => {
        const image = self.selector('#heroImage')
        gsap.to(image, {
            scale: 1,
            transformOrigin: 'center center',
            ease: 'none',
            scrollTrigger: {
                trigger: image,
                start: 'top 70%',
                end: 'bottom top',
                scrub: true,
            },
        })
    }, container.value)
})

</script>

<style scoped>
p {
    margin: 2rem 0 !important;
}
</style>