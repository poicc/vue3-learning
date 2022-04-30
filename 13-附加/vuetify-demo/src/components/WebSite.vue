<template>
  <v-card
    class="d-flex align-center"
    hover
    href="https://github.com/poicc"
    target="_blank"
  >
    <v-avatar size="50" class="ml-3">
      <v-img :src="logoImg"></v-img>
    </v-avatar>
    <div>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ subTitle }}</v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "WebSite",
  props: ["url", "logoImg", "title", "subTitle"],
};
</script>

<style>
</style>