import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAPIStore = defineStore({
    id: 'api',
    state: () => ({
        apiBaseURI: useStorage('apiBaseURI', ''),
    }),
    getters: {
        getBaseURI():string {
            return this.apiBaseURI
        }
    },
    actions: {
        setBaseURI(uri:string) {
            this.apiBaseURI=uri;
        }

    },
})