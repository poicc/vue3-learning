<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
.move {
  animation-duration: 0.6s;
  animation-delay: 0.2s;
}
</style>
