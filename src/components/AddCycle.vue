<template>
  <el-dialog
    width="30%"
    title="内层 Dialog"
    :visible.sync="addCycleVisible"
    append-to-body
  >
    添加循环性能
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      addCycleVisible: false
    }
  }

}
</script>

<style>

</style>
