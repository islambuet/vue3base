<template>
    <LoadingAccessDeny v-if="$systemFunctions.statusTaskLoaded==-2"/>  
    <SiteOffline v-else-if="$systemFunctions.statusTaskLoaded==-3"/>    
    <router-view/>    
</template>

<script>
import LoadingAccessDeny from "@/components/busy-states/LoadingAccessDeny.vue";
import SiteOffline from "@/components/busy-states/SiteOffline.vue";

export default {
  components: {
    SiteOffline,
    LoadingAccessDeny,
  },
};
</script>

