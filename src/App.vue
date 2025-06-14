<template>
  <div id="app" class="content">
    <!-- <van-form label-align="top">
      <DForm :form="formList"></DForm>
    </van-form> -->
    <List :list="list"></List>
  </div>
</template>




<script setup>

  import { ref } from 'vue'
  import DForm from './DForm.vue'
  import List from './List.vue'

  const active = ref('标签 1')

  const formList = ref({
    componentName: 'c-tabs',
    children: [
      {
        name: '基本信息',
        children: [{
          componentName: 'c-group',
          name: '基本信息',
          children: [
            {
              componentName: 'van-field',
              label: '职工选择',
              value: '胡海明(09989921)-[教师与人才胡海明(09989921)-[教师与人才胡海明(09989921)-[教师与人才'
            },
            {
              componentName: 'van-field',
              label: '职工号',
              value: '0099437',
              disabled: true
            },
          ]
        },
        {
          componentName: 'c-group',
          name: '资格审查',
          children: [
            {
              componentName: 'c-date-picker',
              label: '进校时间',
              value: '2021-10-08'
            },
            {
              componentName: 'van-field',
              label: '是否已获取资助',
              value: '0099437',
              disabled: true
            },
            {
              componentName: 'van-select',
              label: '进修人员类别',
              value: 1,
              description: '这是一段描述111111111',
              list: [
                {
                  id: 1,
                  label: '生物'
                },
                {
                  id: 2,
                  label: '数学'
                }
              ]
            },
            {
              componentName: 'van-select',
              label: '岗位',
              value: 1,
              field: true,
              list: [
                {
                  id: 1,
                  label: '生物'
                },
                {
                  id: 2,
                  label: '数学'
                }
              ]
            },
            {
              componentName: 'file-upload',
              label: '进修单位佐证材料',
              fileList: [
                { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg', name: '1234444' },
                { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg' }
              ]
            }
          ]
        }]
      },
      {
        name: '进修信息',
        componentName: 'c-group',

      },
      { name: '绩效信息' },
      { name: '其他信息' }
    ]
  })
</script>

<style lang="less">
.content {
  background: #F7F7F7;
  height: 100vh;
  padding: 12px;
  box-sizing: border-box;
}
</style>
