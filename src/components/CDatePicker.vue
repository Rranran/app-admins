<template>
  <van-field :modelValue="modelValue" is-link readonly label="时间选择" :placeholder="placeholder"
    @click="showPicker = true" />
  <van-popup v-model:show="showPicker" position="bottom">
    <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
  </van-popup>
</template>

<script setup>
  import { ref, watch } from 'vue'
  const props = defineProps({
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    modelValue: { type: String, default: '' }
  })
  const emits = defineEmits(["update:modelValue"])
  const showPicker = ref(false)

  const onConfirm = ({ selectedValues }) => {
    console.log(selectedValues)
    const value = selectedValues.join('-');
    emits('update:modelValue', value)
    showPicker.value = false;
  };
</script>

<style lang="scss" scoped></style>