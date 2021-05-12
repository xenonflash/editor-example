<template>
  <div class="menu-bar">
    <!-- TODO 动态生成菜单 -->
    <el-menu
      ref="menu"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      @close="handleClose"
    >
      <el-menu-item index="1">文件</el-menu-item>
      <el-submenu index="2">
        <template slot="title">插入</template>
        <el-menu-item index="2-1">文本</el-menu-item>
        <el-menu-item index="2-2">图片</el-menu-item>
        <el-menu-item index="2-3">音频</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">图形</template>
          <el-menu-item index="2-4-1">矩形</el-menu-item>
          <el-menu-item index="2-4-2">圆形</el-menu-item>
          <el-menu-item index="2-4-3">多边形</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" >视图</el-menu-item>
      <el-menu-item index="4" disabled>帮助</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang='ts'>
// @ts-nocheck
import { Mutations } from '@/store/mutations';

export default {
  name: "menu-bar",
  methods: {
    handleSelect(val: any) {
      console.log(val)
      if (val === '2-4-1') {
        this.$store.commit(Mutations.addNode, 'rect')
      }
    },
    handleClose() {
      (this as any).$refs.menu.activeIndex = ""
    }
  }
};
</script>
<style lang="stylus" scoped>
.menu-bar {
  height: 25px;
  background: #eee;
  border-bottom: 1px solid #ccc;
}

</style>
<style lang="stylus">
.el-menu-demo {
  .el-menu-item,.el-submenu__title {
    height: 25px !important;
    line-height: 25px !important;
    padding: 0 10px !important;
  }
}
</style>