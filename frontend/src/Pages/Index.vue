<template>
  <div>
    <mu-flex align-self="center" justify-content="center">
      <MainCard v-for="item in list" :key="item.year" :title="item.title" :year="item.year"></MainCard>
    </mu-flex>
  </div>
</template>

<script>
import MainCard from "./Components/MainCard";
import ConfigLoader from "../libs/ConfigLoader"

export default {
  name: "Index",
  components: {
    MainCard
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.list = ConfigLoader.title
  }
}
</script>

<style scoped>

</style>