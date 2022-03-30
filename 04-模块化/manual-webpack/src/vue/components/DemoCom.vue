<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "DemoCpn",
  props: {
    message:{
      type: "String",
      default: "Hello Vue 111"
    }
  },
  data() {
    return {
      
    };
  },
};
</script>
<style scoped></style>
