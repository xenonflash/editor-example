<template>
  <div class="page-list">
    page list
    <div class="page-item add-scene" @click="addScene">
      <el-icon name='plus' style="font-size: 25px"></el-icon>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { Mutations } from '@/store/mutations'
export default {
  name: 'page-list',
  methods: {
    addScene() {
      this.$store.commit(Mutations.addScene)
    }
  }
}
</script>
<style lang="stylus">
  .page-item
    margin: 10px
    border: 1px solid #ccc
    height: 100px
    text-align: center
    display: flex
    align-items center
    justify-content center
    &:hover
      border-color: #999
  
  .add-scene
    cursor pointer
  
</style>