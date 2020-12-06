<template>
  <div>
    <mu-list>
      <mu-list-item button :ripple="true" v-for="item in lists" :key="item.index" @click.native="jump(item.index)">
        <mu-list-item-title>{{ item.name }}</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
import ConfigLoader from "@/libs/ConfigLoader";

export default {
  name: "ListView",
  data() {
    return {
      version: 0,
      lists: []
    }
  },
  methods: {
    async jump(index) {
      await setTimeout(async () => {
        await this.$router.push({
          name: "Calculate",
          params: {
            version: this.version,
            index: index
          }
        })
      }, 200)
    }
  },
  mounted() {
    if ("version" in this.$route.params) {
      this.version = this.$route.params.version
      this.lists = ConfigLoader.configItemList(this.version)
    }
  }
}
</script>

<style scoped>

</style>