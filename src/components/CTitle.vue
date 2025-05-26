<template>
  <div class="c-title">{{ title }}</div>
</template>

<script setup>
  const props = defineProps({
    title: { type: String, default: '' },
    border: { type: Boolean, default: false }
  })
</script>

<style lang="less" scoped>
.c-title {
  font-family: PingFangSC, PingFang SC;
  font-weight: 500;
  font-size: var(--van-font-size-md);
  color: var(--van-black);
  line-height: var(--van-line-height-md);
  position: relative;
  padding-left: 6px;

  &::before {
    position: absolute;
    content: '';
    display: inline-block;
    width: 2px;
    height: var(--van-font-size-md);
    background: var(--c-blue);
    border-radius: 1px;
    top: 3px;
    left: 0;
  }
}
</style>