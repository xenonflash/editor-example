<template>
  <div class="page-list">
    page list
    <div class="page-item">1</div>
    <div class="page-item">2</div>
    <div class="page-item">3</div>
    <div class="page-item">4</div>
    <div class="page-item">5</div>
    <div class="page-item">6</div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'page-list'
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