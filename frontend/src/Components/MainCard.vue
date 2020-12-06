<template>
  <div ripple="ripple" class="button-card">
    <div class="button-card-icon">
      <mu-icon size="64" value=":icon-category iconfont"></mu-icon>
      <div>
        <span>{{ year }}</span>
      </div>
      <div>
        <span>{{ title }}</span>
      </div>
    </div>
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

<style>
[ripple] .ripple--container .ripple--body {
  opacity: 0.6 !important;
  background-color: rgba(33, 150, 243, 0.1) !important;
  animation: rippler 400ms;
}
</style>

<style scoped>
.button-card {
  position: relative;
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #fff;
  border-radius: 8px;
  color: #03DAC6;
  border: 1px solid #03DAC6;
}

.button-card-icon {
  height: 100%;
  width: 100%;
  text-align: center;
}

.button-card-icon img {
  height: 64px;
  width: 64px;
  margin: 16px 48px 8px 48px;
  color: #03DAC6;
}
</style>