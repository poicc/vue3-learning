<template>
  <div class="home">
    <div v-for="(item, index) in itemList" :key="index" class="item">
      <item :item="item" @submitValue="goLogin"></item>
    </div>
  </div>
</template>

<script>
import  caculateTimeago  from "@/utils/time.js";
import Item from "@/components/Item";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    Item,
  },
  data() {
    return {
      itemList: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    goLogin(param) {
      alert("关注成功:" + param);
    },
    init() {
      axios
        .get("/special")
        .then((res) => {
          console.log(res);
          res.data.forEach(item => {
            item.updated = caculateTimeago(item.updated)
          });
          this.itemList = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .item {
    width: 80%;

  }
}
</style>
