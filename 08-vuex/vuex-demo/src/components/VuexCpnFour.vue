<template>
  <div class="hello">
    <hr />
    <div>VuexCpnFour组件</div>
    <!-- <div>
        fullName: {{$store.state.firstName}} - {{$store.state.lastName}}
    </div> -->

    <!-- 使用全局计算属性 -->
    <div>fullName: {{ $store.getters.fullName }}</div>
  </div>
</template>

<script>
import { COUNTER_ADD, COUNTER_SUB } from "../store/mutation-types";

export default {
  name: "VuexCpnFour",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>
