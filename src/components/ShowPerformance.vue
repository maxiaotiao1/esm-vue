<template>
  <div>
    <el-row>
      <el-col :offset="2">
        <el-button
          type="pramary"
          @click="getFirstCycleList( articycleid ),outerVisible = true"
        >
          首圈性能
        </el-button>
        <el-button
          type="pramary"
          @click="getCycleList( articycleid ),outerVisible = true"
        >
          循环性能
        </el-button>
        <el-button
          type="pramary"
          @click="getRateList( articycleid ),outerVisible = true"
        >
          倍率性能
        </el-button>
      </el-col>
    </el-row>

    <el-dialog
      width="80%"
      :visible.sync="outerVisible"
    >
      <!--首圈性能-->
      <show-first-cycle ref="fc" />
      <!--/首圈性能-->

      <!--循环性能-->
      <show-cycle ref="cycle" />
      <!--/循环性能-->

      <!--倍率性能-->
      <show-rate ref="rate" />
      <!--/倍率性能-->

      <!--添加循环性能-->
      <add-cycle ref="addCycle" />
      <!--/添加循环性能-->

      <!--填加倍率性能-->
      <add-rate ref="addRate" />
      <!--/添加循环性能-->

      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          @click="addPerformance"
          v-show="addButton"
        >
          添加
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ShowFirstCycle from '../components/ShowFirstCycle'
import ShowCycle from '../components/ShowCycle'
import ShowRate from '../components/ShowRate'
import AddCycle from '../components/AddCycle'
import AddRate from '../components/AddRate'

export default {
  created () {
    this.articycleid = this.$attrs.articycleid
  },
  data () {
    return {
      outerVisible: false,
      innerVisible: false,
      articycleid: 0,
      addButton: false
    }
  },
  components: {
    'show-first-cycle': ShowFirstCycle,
    'show-cycle': ShowCycle,
    'show-rate': ShowRate,
    AddCycle,
    AddRate
  },
  methods: {
    async getFirstCycleList (id) {
      const { data: res } = await this.$http.get('/firstcycles/' + id)
      // 用数组包装一下
      const arry = []
      arry.push(res.firstCycle)

      this.$refs.fc.firstCycle = arry
      console.log(arry)
      // 设置显示区域
      this.$refs.fc.firstCycleShow = true
      this.$refs.cycle.cycleShow = false
      this.$refs.rate.rateShow = false
      this.addButton = false
      console.log(this.$refs)
    },
    async getCycleList (id) {
      const { data: res } = await this.$http.get('/cycles', { params: { articleId: id } })
      this.$refs.cycle.cycles = res.cycles
      console.log(res.cycles)
      // 设置显示区域
      this.$refs.fc.firstCycleShow = false
      this.$refs.cycle.cycleShow = true
      this.$refs.rate.rateShow = false
      this.addButton = true
      console.log(this.$refs)
    },
    async getRateList (id) {
      const { data: res } = await this.$http.get('/rates', { params: { articleId: id } })
      this.$refs.rate.rates = res.rates
      console.log(res.rate)
      // 设置显示区域
      this.$refs.fc.firstCycleShow = false
      this.$refs.cycle.cycleShow = false
      this.$refs.rate.rateShow = true
      this.addButton = true
      console.log(this.$refs)
    },
    addPerformance () {
      if (this.$refs.rate.rateShow === true) {
        this.$refs.addRate.addRateVisible = true
      }
      if (this.$refs.cycle.cycleShow === true) {
        this.$refs.addCycle.addCycleVisible = true
      }
    }
  }
}
</script>
<style>

</style>
