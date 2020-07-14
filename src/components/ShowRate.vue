<template>
  <el-table
    :data="rates"
    border
    stripe
    v-show="rateShow"
  >
    <el-table-column label="倍率性能">
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
        label="0.1C"
        prop="idotOneC"
      />
      <el-table-column
        label="0.2C"
        prop="idotTwoC"
      />
      <el-table-column
        label="0.5C"
        prop="idotFiveC"
      />
      <el-table-column
        label="1C"
        prop="ioneC"
      />
      <el-table-column
        label="2C"
        prop="itwoC"
      />
      <el-table-column
        label="4C"
        prop="ifourC"
      />
      <el-table-column
        label="5C"
        prop="ifiveC"
      />
      <el-table-column
        label="10C"
        prop="itenC"
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
      rateShow: false,
      rates: []
    }
  }

}
</script>

<style>

</style>
