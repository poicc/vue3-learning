<template>
  <div class="hello">
    <div>计数值：{{ $store.state.counter }}</div>
    <button @click="addCounter">+5的2倍</button>
    <button @click="subCounter">-5的2倍</button>
  </div>
</template>

<script>
import { COUNTER_ADD, COUNTER_SUB } from "../store/mutation-types";

export default {
  name: "VuexCpnTwo",
  data() {
    return {};
  },
  methods: {
    addCounter() {
      this.$store.commit(COUNTER_ADD, { num: 5, multiple: 2 });
    },
    subCounter() {
      this.$store.commit(COUNTER_SUB, { num: 5, multiple: 2 });
    },
  },
};
</script>

<style scoped>
</style>
