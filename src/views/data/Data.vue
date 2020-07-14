<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>数据</el-breadcrumb-item>
      <el-breadcrumb-item>数据操作</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input
            placeholder="请输入内容"
            v-model="queryInfo.query"
            clearable
            @clear="getArticleList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
            />
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button
            type="primary"
            @click="addArticle"
          >
            添加
          </el-button>
          <add-article ref="addArticle" />
        </el-col>
      </el-row>
      <el-table
        ref="articleRef"
        :data="articleList"
        border
        stripe
      >
        <el-table-column
          type="expand"
          fixed="left"
        >
          <!--性能显示-->
          <template slot-scope="scoped">
            <show-performance :articycleid="scoped.row.id" />
          </template>
          <!--性能显示-->
        </el-table-column>
        <el-table-column
          type="index"
          label="#"
          fixed="left"
        />
        <el-table-column
          label="发表年份"
          prop="year"
        />
        <el-table-column
          label="标题"
          prop="author"
        />
        <el-table-column
          label="主要作者"
          prop="author"
        />
        <el-table-column
          label="目标合成材料名称"
          prop="material"
        />
        <el-table-column
          label="材料组成"
          prop="content"
        />
        <el-table-column
          label="C"
          prop="defineC"
        />
        <el-table-column
          label="材料的改性策略"
          prop="strategy"
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
                @click="editArticle"
              />
            </el-col>
            <edit-article ref="editArticle" />
            <el-col :span="12">
              <el-button
                type="danger"
                size="mini"
                icon="el-icon-delete"
              />
            </el-col>
          </el-row>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="queryInfo.per_page"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </el-card>
  </div>
</template>

<script>
import ShowPerformance from '../../components/ShowPerformance'
import AddArticle from '../../components/AddArticle'
import EditArticle from '../../components/EditAritcle'

export default {
  data () {
    return {
      queryInfo: {
        query: '',
        page: 1,
        per_page: 10
      },
      articleList: [],
      total: 0
    }
  },
  components: {
    ShowPerformance,
    AddArticle,
    EditArticle
  },
  created () {
    this.getArticleList()
  },
  methods: {
    handleSizeChange (newSize) {
      this.queryInfo.pageSize = newSize
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pageNum = newPage
    },
    addArticle () {
      this.$refs.addArticle.addArticleVisible = true
    },
    editArticle () {
      this.$refs.editArticle.editArticleVisible = true
    },
    async getArticleList () {
      const { data: res } = await this.$http.get('/articles', { params: this.queryInfo })
      console.log(res)
      if (res.code !== 20000) return this.$message.error(res.msg)
      this.articleList = res.articleList
      this.total = res.total
    }
  }
}
</script>

<style lang="less" scoped>

</style>
