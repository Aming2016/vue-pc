<template>
  <div class="layout">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style scoped>
.layout{
    width:100%;
    min-height:100%;
    text-align: center;
}
</style>