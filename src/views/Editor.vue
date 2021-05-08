<template>
  <div class="home">
    <menu-bar></menu-bar>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="rowHeight"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[0, 0]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <component :is="item.i"></component>
      </grid-item>
    </grid-layout>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import MenuBar from '@/components/menu-bar'
import FooterBar from '@/components/footer-bar'
import PageListPanel from '@/components/panels/page-list-panel'
import StagePanel from '@/components/panels/stage-panel'
import PropertyPanel from '@/components/panels/property-panel'
// @ is an alias to /src
export default {
  name: 'editor',
  data() {
    return {
      rowHeight: 30,
      layout: [
        // { x: 2, y: 0, w: 2, h: 4, i: "1" },
        // { x: 4, y: 0, w: 2, h: 5, i: "2" },
        // { x: 4, y: 0, w: 2, h: 5, i: "3" },
        // { x: 4, y: 0, w: 2, h: 5, i: "4" },
      ],
    };
  },
  components: {
    MenuBar,
    FooterBar,
    PageListPanel: PageListPanel.view,
    StagePanel: StagePanel.view,
    PropertyPanel: PropertyPanel.view
  },
  mounted() {
    this.calcRowHeight()
    this.initPanels()
  },
  methods: {
    calcRowHeight() {
      this.rowHeight = (window.innerHeight - 50) / 100
    },
    initPanels() {
      this.layout = [
        PageListPanel,
        StagePanel,
        PropertyPanel
      ].map(item => item.layout)
    }
  }
};
</script>
