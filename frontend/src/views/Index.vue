<template>
  <div>
    <mu-flex align-items="center" justify-content="center" style="height: 100%">
      <MainCard v-for="item in lists" :key="item.year" :title="item.title" :year="item.year"
                @click.native="redirect(item.year)"></MainCard>
    </mu-flex>
  </div>
</template>

<script>
import ConfigLoader from "@/libs/ConfigLoader"
import MainCard from "@/Components/MainCard";

export default {
  name: "Index",
  components: {
    MainCard
  },
  data() {
    return {
      lists: []
    }
  },
  methods: {
    async redirect(version) {
      await setTimeout(async () => {
        await this.$router.push({
          name: 'ListView',
          params: {
            version: version
          }
        })
      }, 400)
    }
  },
  mounted() {
    this.lists = ConfigLoader.title
  }
}
</script>

<style scoped>

</style>