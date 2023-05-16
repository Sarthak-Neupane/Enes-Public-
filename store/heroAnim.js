import { defineStore } from 'pinia'

export const useHeroAnimStore = defineStore('heroAnim', {
    state: () => ({
        animating: null,
    }),
    getters: {
        isAnimating: (state) => state.animating,
    },
    actions: {
        setAnimating(animating) {
            this.animating = animating
        },
    },
})
