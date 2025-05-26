<template>
  <div class="c-group">
    <CTitle :title="title"></CTitle>
    <slot></slot>
  </div>
</template>

<script setup>
  import CTitle from './CTitle.vue'
  const props = defineProps({
    title: { type: String, default: '' }
  })
</script>

<style lang="less" scoped>
.c-group {
  border-radius: var(--van-padding-xs);
  background-color: var(--van-white);
  padding: var(--van-padding-sm);
}
</style>