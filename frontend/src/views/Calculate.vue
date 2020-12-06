<template>
  <div>
    <mu-container fluid style="margin-top: 16px">
      <mu-flex align-items="center" justify-content="center" style="padding: 0 16px;">
        <mu-text-field v-model="value" :placeholder="config['cost']" :label="config['name']"
                       :suffix="config['unit']" full-width @keyup="limit" @change="compute"></mu-text-field>
      </mu-flex>
      <div class="mu-input full-width" v-if="config['mode'] === 'range'" style="padding: 0 16px;">
        <div class="mu-input-label">比例</div>
        <mu-flex align-items="center" justify-content="center">
          <mu-slider :max="sliderConfig['max']" :min="sliderConfig['min']" :step="0.1" v-model="slider"
                     @change="compute"></mu-slider>
        </mu-flex>
      </div>
      <mu-flex align-items="center" justify-content="center" style="padding: 0 16px;">
        <div v-long-press="copy" :data-clipboard-text="computedResult" ref="resultCopy" style="width: 100%;">
          <mu-text-field disabled :value="computedResult" label="结果" suffix="元" full-width></mu-text-field>
        </div>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
import ConfigLoader from "@/libs/ConfigLoader";
import CostCalculate from "@/libs/CostCalculate";

export default {
  name: "Calculate",
  computed: {
    computedResult: function () {
      return this.result.toFixed(2)
    }
  },
  data() {
    return {
      version: undefined,
      value: undefined,
      slider: undefined,
      result: 0,
      config: {
        name: "",
        cost: "",
        unit: "元",
        mode: "rate",
        rate: {}
      },
      sliderConfig: {max: 0, min: 0, mode: "percentage"},
      clipboardCopy: null
    }
  },
  methods: {
    limit() {
      this.value = this.value.replace(/[^\d.]/g, '')
      this.compute()
    },
    compute() {
      if (this.config.mode === 'range') {
        this.result = CostCalculate.calculate(this.version, this.config.index, {
          value: this.value === undefined ? 0 : this.value,
          mode: this.sliderConfig.mode,
          rate: this.slider
        })
      } else {
        this.result = CostCalculate.calculate(this.version, this.config.index, this.value === undefined ? 0 : this.value)
      }
    },
    copy() {
      let _this = this
      let clipboard = _this.clipboardCopy
      clipboard.on('success', function () {
        _this.$toast.success('复制成功')
        _this.clipboardCopy.destroy()
        _this.clipboardCopy = new _this.clipboard(_this.$refs.resultCopy)
      });
      clipboard.on('error', function () {
        _this.$toast.error('复制失败')
        _this.clipboardCopy.destroy()
        _this.clipboardCopy = new _this.clipboard(_this.$refs.resultCopy)
      });
    }
  },
  mounted() {
    if ("version" in this.$route.params && "index" in this.$route.params) {
      this.version = this.$route.params.version
      this.config = ConfigLoader.configItem(this.$route.params.version, this.$route.params.index)
    }
    if (this.config.mode === 'range') {
      if ("percentage" in this.config.rate.max) {
        this.sliderConfig.max = this.config.rate.max.percentage
        this.sliderConfig.min = this.config.rate.min.percentage
        this.sliderConfig.mode = "percentage"
      }
      if ("thousandth" in this.config.rate.max) {
        this.sliderConfig.max = this.config.rate.max.thousandth
        this.sliderConfig.min = this.config.rate.min.thousandth
        this.sliderConfig.mode = "thousandth"
      }
      this.slider = this.sliderConfig.min / 2 + this.sliderConfig.max / 2
    }
    this.clipboardCopy = new this.clipboard(this.$refs.resultCopy);
  },
  beforeDestroy() {
    this.clipboardCopy.destroy()
  }
}
</script>

<style scoped>

</style>