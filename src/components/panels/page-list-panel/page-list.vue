<template>
  <div class="page-list">
    page list
    <div class="page-item">
      <el-button type="text" @click="addScene">
        <el-icon name='plus'></el-icon>
      </el-button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'page-list',
  methods: {
    addScene() {
      
    }
  }
}
</script>
<style lang="stylus">
  .page-item
    margin: 10px
    border: 1px solid #ccc
    cursor: pointer
    height: 100px
    text-align: center
</style>