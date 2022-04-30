<template>
  <v-card>
    <banner/>
    <v-row align="start" class="mt-1">
      <v-col cols="12" md="3" class="mr-6">
        <side-bar></side-bar>
      </v-col>
      <v-col cols="12" md="8" class="ml-12">
        <router-view />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import SideBar from '../components/SideBar'
import Banner from '../components/Banner'

export default {
  name: 'My',
  components: {
    SideBar,
    Banner,
  },
  data() {
    return {
      id: 0,
    }
  },
  created() {
    this.id = this.$route.params.id
    alert('你要访问的用户id为：' + this.id)
    this.axios({
      method: 'GET',
      url: '/user/' + this.id,
    }).then((res) => {
      console.log(res.data.data.id)
      this.$store.commit('visit', res.data.data)
    })
  },
}
</script>
<style lang="scss" scoped>
.v-card {
  width: 85%;
  margin: 0 auto;
  min-height: 600px;
}
</style>
