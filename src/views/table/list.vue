<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="活动名称">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="参与人数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="活动时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      # 删除列表按钮, 编辑列表按钮,编辑的时候弹出一个对话框,删除的时候弹出一个确认框
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="dialogFormVisible=true">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹出框组件 -->
    <el-dialog title="修改活动" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="活动地点">
        <el-input v-model="form.region" />
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <!-- <el-form-item label="Instant delivery"> -->
      <!--   <el-switch v-model="form.delivery" /> -->
      <!-- </el-form-item> -->
      <!-- <el-form-item label="Activity type"> -->
      <!--   <el-checkbox-group v-model="form.type"> -->
      <!--     <el-checkbox label="Online activities" name="type" /> -->
      <!--     <el-checkbox label="Promotion activities" name="type" /> -->
      <!--     <el-checkbox label="Offline activities" name="type" /> -->
      <!--     <el-checkbox label="Simple brand exposure" name="type" /> -->
      <!--   </el-checkbox-group> -->
      <!-- </el-form-item> -->
      <!-- <el-form-item label="Resources"> -->
      <!--   <el-radio-group v-model="form.resource"> -->
      <!--     <el-radio label="Sponsor" /> -->
      <!--     <el-radio label="Venue" /> -->
      <!--   </el-radio-group> -->
      <!-- </el-form-item> -->
      <el-form-item label="活动内容">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
    </el-dialog>

  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        // delivery: false,
        // type: [],
        resource: '',
        // 活动内容
        desc: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    onSubmit(){
      this.dialogFormVisible = false
    },
    // 删除列表方法
    handleDelete(index, row) {
      this.$confirm(`此操作将永久删除该活动, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.list.splice(index, 1)
      })
    }

  }
}
</script>
