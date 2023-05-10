import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
    state: () => ({
        loading: true,
    }),
    getters: {
        isLoading: (state) => state.loading,
    },
    actions: {
        setLoading(loading) {
            this.loading = loading
        },
    },
})
