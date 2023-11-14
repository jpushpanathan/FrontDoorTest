<script  lang="ts">
import { ref } from "vue";
import { useAPIStore } from '../stores/api'
import { useUsersStore } from '../stores/users'
export default {
  setup() {
    const { apiBaseURI, setBaseURI } = useAPIStore()
    const { loadUsers,usedCachedEndpoint,setCachedEndpointToggle } = useUsersStore()
    const apiURL = ref(apiBaseURI)
    const useCachedUrlToggle = ref(usedCachedEndpoint)
    function updateAPIURL() {
      setBaseURI(apiURL.value);
      loadUsers();
    }
    
    function useChangedEndpointChanged(){
      setCachedEndpointToggle(useCachedUrlToggle.value)
    }

    return {
      useCachedUrlToggle,
useChangedEndpointChanged,
      apiURL,
      updateAPIURL
    }
  }
}
</script>
  

<template>
  <div class="greetings">
    <h1 class="green"> Azure Front Door Demo</h1>
    <h3>
      Welcome to this sample app for azure front door testing

    </h3>
    <label>API BaseURL(https://example.com)</label>
    <input class="form-control" v-model="apiURL" />
    <button class="btn btn-sm btn-link" @click="updateAPIURL">Update</button>
    <div class="form-check form-switch">
  <input class="form-check-input" @change="useChangedEndpointChanged" v-model="useCachedUrlToggle" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Use API Cached Endpoint</label>
</div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
