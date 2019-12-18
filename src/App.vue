<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
      <main-tab-bar></main-tab-bar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!-- <router-view></router-view> -->
    </div>
     
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar'
// import jq from 'jquery'
// console.log(jq);

export default {
  name:'App',
  components:{
   MainTabBar,
  }
}
// console.log(TabBarItem);
// console.log(TabBar);

</script>
<style>
</style>
