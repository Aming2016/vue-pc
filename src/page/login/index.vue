<template>
  <div class="login">
      登陆页面
      {{value|vfiltervalue}}
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      value:1
    }
  }
}
</script>

<style scoped>
.login{
    width:100%;
    font-size:20px;
    text-align: center;
}
</style>