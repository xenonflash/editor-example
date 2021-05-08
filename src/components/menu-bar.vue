<template>
  <div class="menu-bar">
    <div class="menu-item">文件</div>
    <div class="menu-item">编辑</div>
    <div class="menu-item">插入</div>
    <div class="menu-item">视图</div>
    <div class="menu-item">帮助</div>
  </div>
</template>
<script>
export default {
  name: "menu-bar",
};
</script>
<style lang="stylus" scoped>
.menu-bar {
  height: 25px;
  background: #eee;
  border-bottom: 1px solid #ccc;
}

.menu-item {
  line-height: 25px;
  padding: 0 7px;
  display: inline-block
  cursor: pointer
}
</style>