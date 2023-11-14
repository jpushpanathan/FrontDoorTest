import { defineStore } from 'pinia'
import { useAPIStore } from './api'

export const useUsersStore = defineStore({
    id: 'users',
    state: (): {usedCachedEndpoint:boolean, users: any[], headers: any[] } => ({
        users: [],
        headers: [],
        usedCachedEndpoint:false,
    }),
    getters: {
        getUsers(): any[] {
            return this.users
        },
        getHeaders(): any[] {
            return this.headers
        }
    },
    actions: {
        loadUsers() {
            const { getBaseURI } = useAPIStore();
            let url=`${getBaseURI}/api/Users` + (this.usedCachedEndpoint?'/cached':'')
            fetch(url)
                .then((response) => {
                    this.headers = []
                    response.headers.forEach((val, key) => {
                        let header = { key: key, value: val } ;
                        this.headers.push(header)
                    });
                    return response.json()
                })
                .then((data) => {
                    this.users = data;
                }).catch(err => {
                    alert('Failed to fetch data from api')
                });
        },
        setCachedEndpointToggle(value:boolean){
         this.usedCachedEndpoint=value;
         this.loadUsers();
        }

    },
})