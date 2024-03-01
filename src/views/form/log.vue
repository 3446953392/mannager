<template>
  <div class="app-container">
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
    <el-form-item label="视频上传">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :onSuccess="handleSuccess"
        :onError="handleError"
        :before-upload="beforeUpload"
        :file-list="fileList"
        list-type="picture-card">
        <i class="el-icon-plus"></i>
      </el-upload>
    </el-form-item>
    <!-- 图片上传 -->
    <el-form-item label="封面上传">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :onSuccess="handleSuccess"
        :onError="handleError"
        :before-upload="beforeUpload"
        :file-list="fileList"
        list-type="picture-card">
        <i class="el-icon-plus"></i>
      </el-upload>
    </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">上传</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
      </div>

</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

