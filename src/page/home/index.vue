<template>
  <div class="home">
      首页
      <div class='div_1'></div>
       <el-button>默认按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{

    }
  },
  created(){
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100%;
  background:red;
  >div{
    width:100%;
    height:100px;
    background:yellow;
  }
}
</style>
