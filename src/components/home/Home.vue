<template>
  <el-container class='home-container'>

    <!--头部-->
    <el-header class='header' >

      <el-row type='flex' align='middle'  justify="space-between">
        <el-col :span="6">
          <div class="img">
            <img src="@/assets/imges/01.png" alt="">
          </div>
        </el-col>
        <el-col >
          <div class="system">
            <h1>电商后台管理系统</h1>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="quit">
            欢迎上海前端31期星曜会员 <a href="javascript:;">退出</a>
          </div>
        </el-col>
      </el-row>

    </el-header>

    <!--侧边栏和内容区-->
    <el-container>
      <el-aside width="200px" class='aside' >
        <el-row class="tac">

          <el-col >

            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              :router="true"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="users">
                    <i class='el-icon-menu'></i>
                    用户列表
                  </el-menu-item>

                </el-menu-item-group>
                </el-submenu>
            </el-menu>
          </el-col>
        </el-row>

      </el-aside>
      <el-main class='main'>
        <!--子组件的出口-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>export default {

}
</script>

<style scoped>

  .home-container{
    background-color: #eaeef1;
     height:100%;
  }
  .header{
    height:60px;
    background-color: #b3c1cd;
    padding: 0;
  }
  .img img{
    height: 100%;
    width: 200px;
  }
  .aside{
    background-color: #545c64;
  }
  .quit{
    height: 100%;
  min-width: 235px;
    font-weight: bold;
  }
  .quit a{
color: #c9ac20;
  }
  .system h1{
    text-align: center;
    color: #ffffff;
    font-size: 28px;
    font-weight: bold;
  }
</style>
