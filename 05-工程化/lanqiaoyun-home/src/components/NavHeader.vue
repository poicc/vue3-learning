<template>
  <div class="header-container">
    <!-- 左边侧边栏模块 -->
    <i class="header-container__search icon-search" @click="toggleMenu"/>
    <!-- 中间 logo -->
    <div class="header-container__image">
      <img
        class="header-container__image"
        src="https://static.shiyanlou.com/lanqiao/mobile/frontend/dist/img/logo.73d39b2.svg"
      />
    </div>
    <!-- 右边菜单模块 -->
    <div class="header-container__right">
      <i class="header-container__right--notice icon-notice" />
      <i class="header-container__right--notice icon-menu" />
      <img class="header-container__right--img" src="../assets/image/1.jpg" />
    </div>
  </div>

  <!-- 侧边菜单 -->
  <side-menu :show-menu="showMenu" @bg-click="toggleMenu"></side-menu>
</template>

<script>
import { ref } from "vue";
//引入侧边栏组件
import SideMenu from "./side-menu";
export default {
  name: "Header",
  components: {
    SideMenu
  },
  setup() {
    let showMenu = ref(false); //是否显示侧边栏菜单 默认不显示
    //切换侧边菜单显示
    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    return {
      showMenu,
      toggleMenu
    };
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  // 左边菜单按钮
  &__search {
    flex: 1;
    font-size: 22px;
    color: #666;
  }
  // 中间 logo 图片
  &__image {
    width: 69px;
    height: 20px;
    object-fit: fill;
  }
  // 右边菜单模块
  &__right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    // 通知图标
    &--notice {
      font-size: 22px;
      color: #666;
    }
    // 搜索图标
    &--menu {
      font-size: 22px;
      color: #666;
      margin-left: 10px;
    }
    // 用户头像
    &--img {
      margin-left: 12px;
      width: 34px;
      height: 34px;
      object-fit: fill;
      border-radius: 50%;
      overflow: hidden;
      align-self: flex-end;
    }
  }
}
</style>