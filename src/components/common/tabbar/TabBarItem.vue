<template>
  <div class='tab-bar-item' @click='itemClick'>
    <!-- 在所有插槽外面加一个盒子用来设置属性，防止插槽被替换后属性会没了 -->
    <div v-if='!isActive'><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style='activeStyle'><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      // type:Stirng,
      default:'red'
    }
  },
  data(){
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      // return !this.$route.path.indexOf(this.path)
      return this.$route.path==this.path
    },
    activeStyle(){
      // console.log(this.isActive ? {color:this.activeColor}:{});
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 3px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>