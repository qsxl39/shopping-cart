<template>
  <a-drawer :visible="visible" title="订单详情" :width="550" unmount-on-close @cancel="onClose">
    <a-descriptions :data="data" :column="1" bordered size="medium" layout="horizontal" />
  </a-drawer>
</template>

<script setup lang="ts">
import { getOrder } from '@/apis/order'
import type { DescData } from '@arco-design/web-vue'

defineOptions({ name: 'OrderDetailDrawer' })

const visible = ref(false)
const data = ref<DescData[]>([])

// 查看详情
const onOpen = async (id: string) => {
  visible.value = true
  await getOrderDetail(id)
}

// 获取数据
const getOrderDetail = async (id: string) => {
  try {
    const { data: resp } = await getOrder(id)
    data.value = [
      {
        label: '订单编号',
        value: resp.orderNo || '-',
      },
      {
        label: '申请人',
        value: resp.applicantName || '-',
      },
      {
        label: '卫星型号',
        value: resp.satelliteModel || '-',
      },
      {
        label: '产品名称',
        value: resp.productName || '-',
      },
      {
        label: '规格型号',
        value: resp.specModel || '-',
      },
      {
        label: '数量',
        value: resp.quantity || '-',
      },
      {
        label: '单位',
        value: resp.unit || '-',
      },
      {
        label: '质量等级',
        value: resp.qualityGrade || '-',
      },
      {
        label: '型号阶段',
        value: resp.modelStage || '-',
      },
      {
        label: '是否下场验收',
        value: resp.acceptanceStandard ? '是' : '否',
      },
      {
        label: '供应商名称',
        value: resp.supplierName || '-',
      },
      {
        label: '单价',
        value: resp.unitPrice || '-',
      },
      {
        label: '总价',
        value: resp.totalPrice || '-',
      },
      {
        label: '支付时间',
        value: resp.paymentTime || '-',
      },
      {
        label: '创建人',
        value: resp.createUserString || '-',
      },
      {
        label: '创建时间',
        value: resp.createTime || '-',
      },
      {
        label: '修改人',
        value: resp.updateUserString || '-',
      },
      {
        label: '修改时间',
        value: resp.updateTime || '-',
      },
    ]
  } catch (error) {
    console.error('获取订单详情失败', error)
  }
}

// 关闭弹窗
const onClose = () => {
  visible.value = false
  data.value = []
}

defineExpose({
  onOpen,
})
</script>

<style lang="scss" scoped></style> 