<script  lang="ts">
import { ref,computed, onMounted } from "vue";
import {useUsersStore} from '../stores/users'  
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const {loadUsers } =useUsersStore()
    const {users,headers } = storeToRefs(useUsersStore())
   
   
    onMounted(() => {
      loadUsers();
    });
    return {
      users,
      headers
      
    }
  }
}
</script>

<template>
  <div>
 
    <h2>Users</h2>
   
    <div class="list-group" style="max-height:50vh;overflow:auto">
      <a v-for="user in users" class="list-group-item list-group-item-action ">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{user.firstName}} {{user.lastName}}</h5>
          <small>
            <img :src="user.avatar" class="figure-img img-fluid rounded" style="max-width:30px" />
          </small>
        </div>
        <p class="mb-1">{{user.email}}</p>
      </a>
    </div>
    <h2>Headers</h2>
    <div class="list-group">
      <a v-for="header in headers" class="list-group-item list-group-item-action ">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1"><b>{{header.key}}</b>={{header.value}}</h5>

        </div>
      </a>
    </div>
  </div>
</template>
