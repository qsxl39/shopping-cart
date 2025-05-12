<template>
  <a-drawer v-model:visible="visible" title="购物车详情" :width="width >= 600 ? 600 : '100%'" :footer="false">
    <a-descriptions :column="2" size="large" class="general-description">
      <a-descriptions-item label="购物车条目唯一ID">{{ dataDetail?.cartId }}</a-descriptions-item>
      <a-descriptions-item label="用户id">{{ dataDetail?.memberId }}</a-descriptions-item>
      <a-descriptions-item label="采购申请人姓名">{{ dataDetail?.applicantName }}</a-descriptions-item>
      <a-descriptions-item label="卫星型号">{{ dataDetail?.satelliteModel }}</a-descriptions-item>
      <a-descriptions-item label="产品名称">{{ dataDetail?.productName }}</a-descriptions-item>
      <a-descriptions-item label="规格型号">{{ dataDetail?.specModel }}</a-descriptions-item>
      <a-descriptions-item label="数量">{{ dataDetail?.quantity }}</a-descriptions-item>
      <a-descriptions-item label="单位">{{ dataDetail?.unit }}</a-descriptions-item>
      <a-descriptions-item label="质量等级">{{ dataDetail?.qualityGrade }}</a-descriptions-item>
      <a-descriptions-item label="型号阶段（正样/初样）">{{ dataDetail?.modelStage }}</a-descriptions-item>
      <a-descriptions-item label="是否下场验收">{{ dataDetail?.acceptanceStandard }}</a-descriptions-item>
      <a-descriptions-item label="供应商名称">{{ dataDetail?.supplierName }}</a-descriptions-item>
      <a-descriptions-item label="单价">{{ dataDetail?.unitPrice }}</a-descriptions-item>
      <a-descriptions-item label="总价">{{ dataDetail?.totalPrice }}</a-descriptions-item>
      <a-descriptions-item label="购物车状态">{{ dataDetail?.status }}</a-descriptions-item>
      <a-descriptions-item label="创建时间">{{ dataDetail?.createdAt }}</a-descriptions-item>
      <a-descriptions-item label="更新时间">{{ dataDetail?.updatedAt }}</a-descriptions-item>
    </a-descriptions>
  </a-drawer>
</template>

<script setup lang="ts">
    import {useWindowSize} from '@vueuse/core'
    import {
        type
        CartDetailResp,
        getCart as getDetail
    } from '@/apis/shopping/cart'

const { width } = useWindowSize()

const dataId = ref('')
const dataDetail = ref<CartDetailResp>()
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
