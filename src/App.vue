<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/modules-tasks">MT</router-link> |
    <router-link to="/modules-tasks/add">add</router-link> |
    <router-link to="/modules-tasks/edit/1">edit</router-link> |
    <router-link to="/about">About</router-link>
  </div>  
  {{$systemFunctions.getLabel("label_site_title")}}
  <router-view/>
</template>
<script>
export default {
  mounted() {
    this.$systemFunctions.setPageTitle(this.$systemFunctions.getLabel("label_site_title"));    
  }
}
</script>
<style>
#system-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
