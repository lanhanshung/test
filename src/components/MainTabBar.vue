<template>
  <!-- 下面是大写的TabBar，在这里可以用tab-bar代替 -->
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img src="../assets/imgs/home.png" slot="item-icon" alt />
      <img src="../assets/imgs/curHome.png" slot="item-icon-active" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="../assets/imgs/category.png" slot="item-icon" alt />
      <img src="../assets/imgs/curCategory.png" slot="item-icon-active" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopCar">
      <img src="../assets/imgs/shopCar.png" slot="item-icon" alt />
      <img src="../assets/imgs/curShopCar.png" slot="item-icon-active" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="../assets/imgs/my.png" slot="item-icon" alt />
      <img src="../assets/imgs/curMy.png" slot="item-icon-active" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../views/tabbar/TabBar";
import TabBarItem from "../views/tabbar/TabBarItem";
export default {
    components:{
        TabBar,
        TabBarItem
    }
  
};
</script>

<style  scoped>
</style>