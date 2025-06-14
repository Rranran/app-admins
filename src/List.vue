<template>
  <div class="page">
    <c-tabs class="tabs">
      <c-tab v-for="(tab, index) in tabs" :key="index" :title="tab.title" :name="tab.name" :badge="tab.badge">
      </c-tab>
    </c-tabs>
    <div class="list">
      <div v-for="item in list" class="list-item">
        <div class="left">
          <div class="name">{{ item.name }}</div>
          <div class="description">{{ item.description }}</div>
        </div>
        <div class="right">
          <span class="link-btn">去审核<van-icon name="arrow" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const list = ref(Array.from({ length: 30 }, (v, i) => ({
    name: '刘明-发起的人事进修' + i,
    description: '发起时间：2025-10-12 12:0'
  })))

  const tabs = ref([
    { name: 'todo', title: '待我审核', badge: '99+' },
    { name: 'done', title: '我已审核', badge: 3 },
    { name: 'create', title: '我发起的', badge: 0 }
  ])



</script>

<style lang="less" scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .tabs {
    flex: none;
  }

  .list {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    margin-top: 12px;
  }
}



.list-item {
  padding: 14px;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  font-family: PingFangSC;

  +.list-item {
    margin-top: 12px;
  }

  .left {
    flex: 1;
    min-width: 0;

    .name {

      font-weight: 500;
      font-size: 16px;
      color: var(--c-black);
      line-height: 16px;
    }

    .description {
      font-size: 13px;
      color: var(--c-grey);
      line-height: 13px;
      margin-top: 12px;
    }
  }

  .right {
    flex: none;
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .link-btn {
      color: var(--van-blue);
      font-size: 14px;
    }
  }
}
</style>