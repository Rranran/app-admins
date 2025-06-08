<template>
  <van-uploader :accept="accept" v-model="modelList">
    <van-button icon="plus" type="primary" size="mini" class="upload-btn" plain square></van-button>
    <template #preview-cover="file">
      <div>{{ getFileName(file) }}</div>
    </template>
  </van-uploader>
</template>

<script setup>
  import { ref, watch } from 'vue'
  const props = defineProps({
    accept: { type: String, default: '' },
    fileList: { type: Array, default: [] }
  })
  const modelList = ref([])
  watch(props.fileList, (val) => {
    modelList.value = val
  }, {
    immediate: true,
    deep: true
  })

  function getFileName(fileObj) {
    const { url, file } = fileObj
    if (file) return file.name
    return url.replace(/^.*[\\\/]/, '');
  }

</script>

<style lang="less" scoped>
.upload-btn {
  border-radius: 2px;
  background: rgba(0, 130, 255, 0.1);
  border-style: dashed;
}

:deep(.van-uploader) {
  display: block;
  width: 100%;
}

:deep(.van-uploader__wrapper) {
  flex-direction: column;
  position: relative;

  .van-uploader__input-wrapper {
    position: absolute;
    right: 0;
    top: -8px;
    transform: translateY(-100%);
  }

  .van-uploader__preview {
    margin-right: 0;
    background: #F2F5F7;
    border-radius: 4px;
    height: 36px;
    padding: 0 12px;
    line-height: 36px;

    .van-uploader__preview-image {
      >img {
        display: none;
      }
    }

    .van-uploader__preview-delete--shadow {
      height: 20px;
      width: 20px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #FF5351;
      top: 8px;
      right: 10px;

      .van-uploader__preview-delete-icon {
        transform: scale(1) translate(0, 0);
        top: 3px;
        left: 3px;
      }
    }
  }
}

:deep(.van-uploader__input-wrapper) {}
</style>