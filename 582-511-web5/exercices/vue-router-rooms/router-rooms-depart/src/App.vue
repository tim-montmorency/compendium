<template>
  <div id="app">
     <!-- 
    TODO : Dans ce fichier: Changer la <home-view> ici par ce qui doit s'afficher via Router Vue 
    https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#etape-5-utiliser-dans-appvue 
    -->

    <home-view></home-view>
  </div>
</template>


<script>
export default {
  name: 'App'
};
</script>




<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

#app {
  padding: 1rem;
}
</style>