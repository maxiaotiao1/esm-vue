<template>
  <el-container class="home-container">
    <!-- 上侧菜单栏 -->
    <el-header>
      <div>
        <img src="../../assets/img/logo.png">
        <span>
          esm管理系统
        </span>
      </div>
      <el-button
        type="info"
        @click="logout"
      >
        {{ userName }},退出
      </el-button>
    </el-header>
    <!--/上侧菜单栏-->

    <el-container>
      <!-- 左侧菜单栏-->
      <el-aside
        :width="isCollapse ? '64px' : '200px'"
      >
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <div
            class="toggle-button"
            @click="toggleCollapse"
          >
            |||
          </div>
          <el-submenu
            :index="item.id+''"
            v-for="item in menulist"
            :key="item.id"
          >
            <template slot="title">
              <i class="el-icon-location" />
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              :index="''+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <i class="el-icon-location" />
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- /上侧菜单栏-->

      <!-- 显示区域 -->
      <el-main>
        <router-view />
      </el-main>
      <!-- 显示区域 -->
    </el-container>
  </el-container>
</template>

<script>
export default {
  created () {
    this.getMenuList()
    this.getUserInfo()
  },
  data () {
    return {
      menulist: [],
      isCollapse: false,
      userName: ''
    }
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList () {
      const { data: res } = await this.$http.get('/menu/getlist')
      console.log(res)
      if (res.code !== 20000) return this.$message.error(res.msg)
      this.menulist = res.menulist
    },
    async getUserInfo () {
      const { data: res } = await this.$http.get('/user/getLoginInfo')
      console.log(res)
      if (res.code !== 20000) return this.$message.error(res.msg)
      this.userName = res.userName
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }

}
</script>

<style lang = 'less' scoped>
.home-container {
  height: 100%;
}
.el-header {
  background: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background: #333744;
  .el-menu{
    border-right: none;
  }
}
.el-main {
  background: #eaedf1;
}
.toggle-button{
  background: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
