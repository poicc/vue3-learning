<template>
  <div class="hello">
    <label for="firstName">firstName:</label>
    <input type="text" v-model="$store.state.firstName" id="firstName" />

    <label for="lastName">lastName:</label>
    <input type="text" v-model="$store.state.lastName" id="lastName" />

    <div>VuexCpnThree组件</div>
    <div>
      fullName: {{ $store.state.firstName }} - {{ $store.state.lastName }}
    </div>

    <!-- 错误的触发异步操作 -->
    <!-- <button @click="$store.commit('submitAsync')">触发异步操作</button> -->

    <!-- 正确的触发异步操作 -->
    <!-- <button @click="$store.dispatch('submitActions')">触发异步操作</button> -->

    <button @click="demoAction">触发异步操作</button>
  </div>
</template>

<script>
import { COUNTER_ADD, COUNTER_SUB } from "../store/mutation-types";

export default {
  name: "VuexCpnThree",
  data() {
    return {};
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.firstName;
      },
      set(newVal) {
        this.$store.commit("handleFirstNameVal", newVal);
      },
    },
    lastName: {
      get() {
        return this.$store.state.lastName;
      },
      set(newVal) {
        this.$store.commit("handlelastNameVal", newVal);
      },
    },
  },
  methods: {
    demoAction() {
      this.$store.dispatch("submitActions", "ok").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
</style>
