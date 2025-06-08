<template>
  <div class="c-group">
    <CTitle :title="name"></CTitle>
    <slot></slot>
  </div>
</template>

<script setup>
  import CTitle from './CTitle.vue'
  const props = defineProps({
    name: { type: String, default: '' }
  })
</script>

<style lang="less" scoped>
.c-group {
  border-radius: var(--van-padding-xs);
  background-color: var(--van-white);
  padding: var(--van-padding-sm);

  :deep(.c-title) {
    padding-bottom: var(--van-padding-sm);
    border-bottom: 1px solid var(--c-grey2);
  }

  :deep(.van-cell) {
    padding: var(--van-padding-sm) 0;

    &::after {
      left: 0;
      right: 0;
      border-bottom-color: var(--c-grey2);
      transform: scale(1);
    }
  }
}
</style>