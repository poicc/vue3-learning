<template>
  <div><demo-com /></div>
</template>

<script>
import DemoCom from "./components/DemoCom.vue";
export default {
  name: "DemoCpn",
  components: {
    DemoCom,
  },
  data() {
    return {
      message: "Hello Vue 111",
    };
  },
};
</script>
<style scoped></style>
