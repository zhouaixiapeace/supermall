<template>
  <div id="home">
    <nav-bar class='home-nav'>
      <span slot='center'>购物街</span>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view></feature-view>
    <tab-control class='tab-control' :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
      <li>lalalla</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  data(){
    return {
      banners:[],
      recommends:[],
      titles:[],
      goods:{
        pop:{
          page:0,
          list:[]
        },
        new:{
          page:0,
          list:[]
        },
        sell:{
          page:0,
          list:[]
        }
      }
    }
  },
  created(){
    // 请求数据
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    // this.getHomeGoods('new');
    // this.getHomeGoods('sell');
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        console.log(res);
      this.goods[type].list.push(...res.data.list);
      })
    }
  }
}
</script>

<style>
#home{
  padding-top:44px;
}
.home-nav{
  background-color: var(--color-tint);
  color:#fff;
  
  position:fixed;
  left: 0;
  right: 0;
  top: 0;

  z-index: 9;
  
}
.tab-control{
  position:sticky;
  top:44px;
}
</style>