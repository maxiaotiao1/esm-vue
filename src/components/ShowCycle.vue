<template>
  <el-table
    :data="cycles"
    border
    stripe
    v-show="cycleShow"
  >
    <el-table-column label="循环性能">
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
        label="1圈放电量"
        prop="cycleOne"
      />
      <el-table-column
        label="20圈放电量"
        prop="cycleTwenty"
      />
      <el-table-column
        label="50圈放电量"
        prop="cycleFifty"
      />
      <el-table-column
        label="75圈放电量"
        prop="cycleSeventyFive"
      />
      <el-table-column
        label="100圈放电量"
        prop="cycleOneHundred"
      />
      <el-table-column
        label="200圈放电量"
        prop="cycleTwoHundred"
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
          <el-col :span="12">
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
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
      cycleShow: false,
      cycles: []
    }
  }

}
</script>

<style>

</style>
