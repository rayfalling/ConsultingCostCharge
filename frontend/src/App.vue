<template>
  <div id="app">
    <mu-appbar style="width: 100%; height: 56px;">
      <mu-button icon slot="left" @click="back">
        <mu-icon value=":iconfont icon-back"></mu-icon>
      </mu-button>
      <div class="mu-appbar-title" slot="right">
        {{ title }}
      </div>
    </mu-appbar>
    <div class="container main">
      <router-view class="scroll"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: ""
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  },
  mounted() {
    this.title = "造价咨询收费计算"
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.main {
  width: 100%;
  height: calc(100% - 56px);
}

.scroll {
  overflow: auto;
  height: 100%;
}
</style>
