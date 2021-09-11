<template>
  <div id="system_main_container"> 
    <Loading v-show="$systemFunctions.statusDataLoaded == 0" />
    <Loading v-if="statusSiteLoaded == 0" />
    <LoadingFailed v-else-if="statusSiteLoaded == -1" />
  </div>
</template>
<script>
//import ThemeDefault from "./components/themes/ThemeDefault.vue";
//import ThemeSingle from "./components/themes/ThemeSingle.vue";
import Loading from "@/components/busy-states/Loading.vue";
import LoadingFailed from "@/components/busy-states/LoadingFailed.vue";

export default {
  components: {
    Loading,
    LoadingFailed,
    // ThemeDefault,
    // ThemeSingle,
  },
  data() {
    return {
      statusSiteLoaded: 0, //Loading=0,success=0,failed=-1  only this page
    };
  },
  mounted() {
    this.$systemFunctions.setPageTitle(this.$systemFunctions.getLabel("label_site_title"));   
    this.init(); 
  },
  methods: {
    init()
    {
      this.statusSiteLoaded =1;
    }
  }
}
</script>
