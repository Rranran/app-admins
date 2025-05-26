<template>
  <div id="app">
    <c-tabs v-model:active="active" type="tag">
      <c-tab title="标签 1"></c-tab>
      <c-tab title="标签 2"></c-tab>
      <c-tab title="标签 3"></c-tab>
    </c-tabs>
    <c-group title="何宇测试111111111"></c-group>
  </div>
</template>




<script setup>

  import { ref } from 'vue'

  const active = ref('标签 1')

  const formList = ref([
    {
      type: 'c-tabs',
      list: [
        { title: '基本信息' },
        { title: '进修信息' },
        { title: '绩效信息' },
        { title: '其他信息' }
      ]
    }
  ])

</script>

<style lang="less">
#app {
  background: #F7F7F7;
  height: 100vh;
}
</style>
