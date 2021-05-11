
<template>
  <div class="stage-panel">
    <div class="stage-core">
      <div class="node"></div>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import Moveable from "moveable";

export default {
  name: "stage-panel",
  mounted() {
    const stage = new Moveable(
      document.querySelector(".stage-core") as HTMLElement,
      {
        draggable: true,
        resizable: true,
        rotatable: true,
        originDraggable: true,
        originRelative: true,
      }
    );
    stage.target = document.querySelector(".node") as HTMLElement;

    let frame = {
      translate: [0, 0],
      rotate: 0,
      transformOrigin: "50% 50%",
    };
    stage
      .on("dragOriginStart", (e) => {
        e.dragStart && e.dragStart.set(frame.translate);
      })
      .on("dragOrigin", (e) => {
        frame.translate = e.drag.beforeTranslate;
        frame.transformOrigin = e.transformOrigin;
      })
      .on("dragStart", (e) => {
        e.set(frame.translate);
      })
      .on("drag", (e) => {
        frame.translate = e.beforeTranslate;
      })
      .on("rotateStart", (e) => {
        e.set(frame.rotate);
      })
      .on("rotate", (e) => {
        frame.rotate = e.beforeRotate;
      })
      .on("resizeStart", (e) => {
        e.setOrigin(["%", "%"]);
        e.dragStart && e.dragStart.set(frame.translate);
      })
      .on("resize", (e) => {
        const beforeTranslate = e.drag.beforeTranslate;
        frame.translate = beforeTranslate;
        e.target.style.width = `${e.width}px`;
        e.target.style.height = `${e.height}px`;
        e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
      })
      .on("render", (e) => {
        const { translate, rotate, transformOrigin } = frame;
        e.target.style.transformOrigin = transformOrigin;
        e.target.style.transform =
          `translate(${translate[0]}px, ${translate[1]}px)` +
          ` rotate(${rotate}deg)`;
      });
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

.node {
  width: 100px;
  height: 100px;
  background: #eee;
}
</style>