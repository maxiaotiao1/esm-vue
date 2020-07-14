<template>
  <el-dialog
    title="添加文章信息"
    :visible.sync="addArticleVisible"
    width="50%"
  >
    <el-form
      :model="ruleForm"
      :rules="rules"
      label-position="top"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="标题"
        prop="title"
      >
        <el-input v-model="ruleForm.title" />
      </el-form-item>
      <el-form-item
        label="发表年份"
        prop="year"
      >
        <el-col :span="11">
          <el-date-picker
            type="year"
            placeholder="选择年份"
            v-model="ruleForm.year"
            style="width: 100%;"
          />
        </el-col>
      </el-form-item>
      <el-form-item
        label="主要作者名"
        prop="author"
      >
        <el-input
          v-model="ruleForm.author"
        />
      </el-form-item>
      <el-form-item
        label="目标合成材料名"
        prop="material"
      >
        <el-input
          v-model="ruleForm.material"
        />
      </el-form-item>
      <el-form-item
        label="材料组成"
        prop="content"
      >
        <el-input
          type="textarea"
          v-model="ruleForm.content"
        />
      </el-form-item>
      <el-form-item
        label="C"
        prop="define_c"
      >
        <el-input
          v-model="ruleForm.define_c"
        />
      </el-form-item>
      <el-form-item
        label="材料的改性策略"
        prop="strategy"
      >
        <el-input
          type="textarea"
          v-model="ruleForm.strategy"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >
          立即创建
        </el-button>
        <el-button @click="resetForm('ruleForm')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      addArticleVisible: false,
      ruleForm: {
        title: '',
        year: '',
        author: '',
        material: '',
        content: '',
        strategy: '',
        define_c: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        year: [
          { required: true, message: '请输入发表年份', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请输入作者', trigger: 'blur' }
        ],
        material: [
          { required: true, message: '请输入目标合成材料', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入材料组成', trigger: 'blur' }
        ],
        strategy: [
          { required: true, message: '请输入改性策略', trigger: 'blur' }
        ],
        define_c: [
          { required: true, message: '请输入一库伦电量', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
      console.log(this.$refs[formName])
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>

</style>
