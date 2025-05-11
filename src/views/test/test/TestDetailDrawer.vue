<template>
  <a-drawer v-model:visible="visible" title="测试详情" :width="width >= 600 ? 600 : '100%'" :footer="false">
    <a-descriptions :column="2" size="large" class="general-description">
      <a-descriptions-item label="主键">{{ dataDetail?.id }}</a-descriptions-item>
      <a-descriptions-item label="名字">{{ dataDetail?.name }}</a-descriptions-item>
      <a-descriptions-item label="年龄">{{ dataDetail?.age }}</a-descriptions-item>
      <a-descriptions-item label="学号">{{ dataDetail?.number }}</a-descriptions-item>
      <a-descriptions-item label="学校">{{ dataDetail?.school }}</a-descriptions-item>
    </a-descriptions>
  </a-drawer>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { type TestDetailResp, getTest as getDetail } from '@/apis/test/test'

const { width } = useWindowSize()

const dataId = ref('')
const dataDetail = ref<TestDetailResp>()
const visible = ref(false)

// 查询详情
const getDataDetail = async () => {
  const { data } = await getDetail(dataId.value)
  dataDetail.value = data
}

// 打开
const onOpen = async (id: string) => {
  dataId.value = id
  await getDataDetail()
  visible.value = true
}

defineExpose({ onOpen })
</script>

<style scoped lang="scss"></style>
