
<template>
  <div class="stage-panel">
    <div ref="stageCore" class="stage-core">
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import Stage from '@/editorImpl/stage'
import Node from '@/editorImpl/node'

export default {
  name: "stage-panel",

  mounted() {
    const stage = new Stage(this.$refs.stageCore)
    console.log(stage)
    const rect = new Node(stage)
    console.log(rect)
    stage.add(rect)
  },
};
</script>
<style lang="stylus">
.stage-panel {
  background: #ddd;
  height: 100%;
  padding: 20px;

  &::before {
    content: '';
    display: table;
  }
}

.stage-core {
  height: 100%;
  background: #fff;
  position: relative;
}
</style>