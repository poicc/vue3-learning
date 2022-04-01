<template>
  <h3>圆桌</h3>
  <div class="about flex-justify-center">
    <list :cardList="list"></list>
  </div>
</template>

<script>
import List from "@/components/List";
import axios from "axios";
export default {
  name: "AboutView",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.init();
  },
  components: {
    List,
  },
  methods: {
    init() {
      axios
        .get("/table")
        .then((res) => {
          console.log(res);
          this.list = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped lang="less">
</style>