<template>
  <div>
    <mu-ripple>
      {{ title }}
    </mu-ripple>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    title: String,
    year: Number,
  }
}
</script>

<style scoped>

</style>