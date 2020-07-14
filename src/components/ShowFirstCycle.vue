<template>
  <el-table
    :data="firstCycle"
    border
    stripe
    v-show="firstCycleShow"
  >
    <el-table-column
      label="首圈性能"
    >
      <el-table-column
        label="实验温度"
        prop="temperature"
      />
      <el-table-column
        label="高压"
        prop="voltageHigh"
      />
      <el-table-column
        label="低压"
        prop="voltageLow"
      />
      <el-table-column
        label="电流密度"
        prop="currentDensity"
      />
      <el-table-column
        label="首圈充电容量"
        prop="chargeCapacity"
      />
      <el-table-column
        label="首圈放电容量"
        prop="dischargeCapacity"
      />
      <el-table-column
        label="库伦效率"
        prop="coulombE"
      />
      <el-table-column
        label="操作"
        fixed="right"
      >
        <el-row>
          <el-col :span="12">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
            />
          </el-col>
        </el-row>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      firstCycle: [],
      firstCycleShow: false,
      innerVisible: false
    }
  }
}
</script>

<style>

</style>
