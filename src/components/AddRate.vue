<template>
  <el-dialog
    width="30%"
    title="内层 Dialog"
    :visible.sync="addRateVisible"
    append-to-body
  >
    添加倍率性能
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      addRateVisible: false
    }
  }

}
</script>

<style>

</style>
