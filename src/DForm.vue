<template>
  <c-tabs v-if="form.componentName === 'c-tabs'" type="tag">
    <c-tab v-for="(child, index) in form.children" :key="index" :title="child.name">
      <template v-if="child.children">
        <DForm :form="com" v-for="(com, indexC) in child.children" :key="indexC"></DForm>
      </template>
    </c-tab>
  </c-tabs>
  <van-field :label="form.label" v-else-if="['van-select', 'file-upload'].includes(form.componentName)">
    <template #label>
      <span>{{ form.label }}</span>
      <van-icon name="info-o" v-if="form.description" />
    </template>
    <template #input>
      <component :is="form.componentName" v-bind="form">
        <template v-if="form.children">
          <DForm :form="com" v-for="(com, indexC) in form.children" :key="indexC"></DForm>
        </template>
      </component>
    </template>
  </van-field>
  <component v-else :is="form.componentName" v-bind="form" v-model="form.value">
    <template #label v-if="form.componentName === 'van-field'">
      <span>{{ form.label }}</span>
      <van-icon name="info-o" v-if="form.description" />
    </template>
    <template v-if="form.children">
      <DForm :form="com" v-for="(com, indexC) in form.children" :key="indexC"></DForm>
    </template>
  </component>

</template>

<script setup>
  import { ref } from 'vue'
  const props = defineProps({
    form: { type: [Array, Object], default: () => { } }
  })
</script>

<style lang="less" scoped>
:deep(.c-group) {
  +.c-group {
    margin-top: var(--van-padding-sm)
  }
}

:deep(.van-uploader) {
  width: 100%;
}

:deep(.van-field__control) {
  text-overflow: ellipsis;
}

:deep(.van-field__label) {
  display: flex;
  align-items: center;

  >.van-icon {
    font-size: 14px;
    margin-left: 4px;
    color: var(--c-grey3);
    flex: none;
  }
}
</style>