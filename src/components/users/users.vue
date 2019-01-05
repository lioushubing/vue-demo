<template>
    <div id='users'>

      <template>
        <el-table
          :data="userList"
          stripe
          style="width: 100%">
          <el-table-column
            prop="username"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="180">
          </el-table-column>
          <el-table-column
            prop="mobile"
            label="电话"
            width="180">
          </el-table-column>
          <el-table-column
            prop="mg_state"
            label="用户状态"
           >
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
          </el-table-column>
        </el-table>
      </template>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pagesize"
        :current-page="pagenum"
        @current-change='currentChange'
      >
      </el-pagination>
    </div>
</template>

<script>
// 导入axios
import axios from 'axios'

export default {
  created () {
    this.getUsersList()
  },
  name: 'users',
  data () {
    return {
      userList: [],
      pagenum: 1,
      total: 0,
      pagesize: 3

    }
  },
  methods: {
    getUsersList (pagenum = 1) {
      const url = 'http://localhost:8888/api/private/v1/users'
      axios.get(url, {
        params: {
          query: '',
          pagenum,
          pagesize: 3
        },
        headers: {
          Authorization: localStorage.getItem('token')
        }

      }).then(res => {
        console.log(res)
        if (res.data.meta.status === 200) {
          this.userList = res.data.data.users
          //  设置总条数当前页
          this.total = res.data.data.total
          this.pagenum = res.data.data.pagenum
        } else {
        //  失败
          this.$router.push('/login')
          localStorage.removeItem('token')
        }
      })
    },
    currentChange (pagenum) {
      console.log(pagenum)
      this.getUsersList(pagenum)
    }

  }
}
</script>

<style    scoped>

</style>
