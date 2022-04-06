<template>
  <!-- 半透明的黑色背景 -->
  <div v-if="showMenu" class="side-menu__bg" @click="$emit(`bg-click`)"></div>

  <!-- 侧边菜单列表 -->
  <div v-if="showMenu" class="side-menu__list">
    <div
      v-for="(menu, index) in menus"
      :key="index"
      class="side-menu__list--item"
    >
      <a :href="menu.target">{{ menu.title }}</a>
    </div>
  </div>
</template>

<script>
import { MENUS } from "../constants/page";
export default {
  name: "SideMenu",
  props: {
    showMenu: Boolean, //是否显示侧边菜单
  },
  emits: ["bg-click"],
  setup() {
    return {
      menus: MENUS,
    };
  },
};
</script>

<style lang="scss" scoped>
// 背景
.side-menu__bg {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  background: black;
  opacity: 0.5;
  z-index: 10000;
}
// 菜单列表
.side-menu__list {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 50%;
  left: 0;
  background: white;
  z-index: 10001;
  box-shadow: 5px 0px 20px #333;

  &--item {
    padding: 30px 10px;
  }
}
</style>