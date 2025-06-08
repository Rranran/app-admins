<template>
  <van-tabs v-model:active="activeTab" :type="type" v-bind="$attrs">
    <slot></slot>
  </van-tabs>
</template>

<script setup>
  import { ref, watch } from 'vue'


  const props = defineProps({
    active: { type: [String, String], default: '' },
    type: { type: String, default: 'line' }  // line 、card、tag
  })

  const activeTab = ref('')
  watch(props.active, (val) => {
    activeTab.value = val
  }, { immediate: true })

</script>

<style lang="less" scoped>
:deep(.van-tabs__nav--tag) {
  display: flex;
  background: transparent;
  margin-bottom: 16px;

  .van-tab--tag {
    flex: auto;
    flex-grow: 0;
    padding: var(--van-padding-base) var(--van-padding-sm);
    border-radius: var(--van-padding-md);
    color: var(--c-grey);
    font-size: var(--van-font-size-xsm);
    background-color: var(--van-white);

    +.van-tab--tag {
      margin-left: var(--van-padding-md);
    }

    &.van-tab--active {
      background-color: var(--van-blue);
      color: var(--van-white);
    }
  }
}
</style>