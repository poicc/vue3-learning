<template>
  <!-- 半透明黑色背景 -->
  <transition name="fade">
    <div v-if="showMenu" class="side-menu__bg" @click="$emit(`bg-click`)" />
  </transition>

  <!-- 菜单列表内容 -->
  <transition name="left-in">
    <div v-if="showMenu" class="side-menu__list">
      <!-- 渲染列表数据 -->
      <div
        v-for="(menu, index) in menus"
        :key="`menu-${menu.title}-${index}`"
        class="side-menu__list--item"
      >
        <a :href="menu.target">{{ menu.title }}</a>
      </div>
    </div>
  </transition>
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

<style scoped lang="scss">
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
    a {
      text-decoration: none;
      color: #000;
      font-size: 17px;
      padding: 15px;
    }
    a:hover {
      // color: rgb(106, 146, 137);
    }

    a:active {
      // color: rgb(62, 90, 109);
    }
  }
}
</style>