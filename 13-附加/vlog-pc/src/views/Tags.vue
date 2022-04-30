<template>
  <v-card color="primary lighten-5" hover elevation="12">
    <v-row align="center" justify="center">
      <v-col v-for="(item, index) in tags" :key="index" col="12" md="2" class="shrink">
        <v-chip :color="item.tagColor" label text-color="dark-grey" large class="px-6">
          {{ item.tagName }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Tags',
  data() {
    return {
      tags: []
    }
  },
  created() {
    this.axios.get('/tag/all').then((res) => {
      console.log(res.data.data)
      this.tags = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  width: 85vw;
  margin: 0 auto;
  padding: 10px 30px;
}
</style>
