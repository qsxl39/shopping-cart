<template>
  <div class="gi_page">
    <a-row align="stretch" :gutter="14" class="h-full page_content">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :xxl="24" class="h-full ov-hidden">
        <GiTable
          row-key="id"
          :data="dataList"
          :columns="columns"
          :loading="loading"
          :scroll="{ x: '100%', y: '100%', minWidth: 1500 }"
          :pagination="pagination"
          :disabled-tools="['size']"
          @refresh="search"
        >
          <template #top>
            <GiForm v-model="queryForm" :options="options" :columns="queryFormColumns" @search="search" @reset="reset"></GiForm>
          </template>
          <template #toolbar-left>
            <a-button type="primary" @click="onAdd">
              <template #icon><icon-plus /></template>
              <template #default>新增</template>
            </a-button>
          </template>
          <template #toolbar-right>
            <a-button @click="onExport">
              <template #icon><icon-download /></template>
              <template #default>导出</template>
            </a-button>
          </template>
          <template #acceptanceStandard="{ record }">
            <a-tag v-if="record.acceptanceStandard" color="green" size="small">是</a-tag>
            <a-tag v-else color="orange" size="small">否</a-tag>
          </template>
          <template #action="{ record }">
            <a-space>
              <a-link title="详情" @click="onDetail(record)">详情</a-link>
              <a-link title="修改" @click="onUpdate(record)">修改</a-link>
              <a-link status="danger" title="删除" @click="onDelete(record)">删除</a-link>
            </a-space>
          </template>
        </GiTable>
      </a-col>
    </a-row>

    <OrderAddDrawer ref="OrderAddDrawerRef" @save-success="search" />
    <OrderDetailDrawer ref="OrderDetailDrawerRef" />
  </div>
</template>

<script setup lang="ts">
import OrderAddDrawer from './OrderAddDrawer.vue'
import OrderDetailDrawer from './OrderDetailDrawer.vue'
import { type OrderResp, deleteOrder, exportOrder, listOrders } from '@/apis/order'
import type { Columns, Options } from '@/components/GiForm'
import type { TableInstanceColumns } from '@/components/GiTable/type'
import { useDownload, useResetReactive, useTable } from '@/hooks'
import { isMobile } from '@/utils'

defineOptions({ name: 'OrderCart' })

const options: Options = reactive({
  form: { layout: 'inline' },
  grid: { cols: { xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 } },
  fold: { enable: true, index: 1, defaultCollapsed: true },
})
const [queryForm, resetForm] = useResetReactive({
  sort: ['t1.id,desc'],
})
const queryFormColumns: Columns = reactive([
  {
    type: 'input',
    field: 'orderNo',
    formItemProps: {
      hideLabel: true,
    },
    props: {
      placeholder: '搜索订单编号',
    },
  },
  {
    type: 'range-picker',
    field: 'createTime',
    span: { lg: 2, xl: 2, xxl: 1 },
    formItemProps: {
      hideLabel: true,
    },
  },
])

const {
  tableData: dataList,
  loading,
  pagination,
  search,
  handleDelete,
} = useTable((page) => listOrders({ ...queryForm, ...page }), { immediate: true })
const columns: TableInstanceColumns[] = [
  {
    title: '序号',
    width: 66,
    align: 'center',
    render: ({ rowIndex }) => h('span', {}, rowIndex + 1 + (pagination.current - 1) * pagination.pageSize),
    fixed: !isMobile() ? 'left' : undefined,
  },
  { title: '订单编号', dataIndex: 'orderNo', minWidth: 120, ellipsis: true, tooltip: true },
  { title: '申请人', dataIndex: 'applicantName', minWidth: 100, ellipsis: true, tooltip: true },
  { title: '卫星型号', dataIndex: 'satelliteModel', minWidth: 120, ellipsis: true, tooltip: true },
  { title: '产品名称', dataIndex: 'productName', minWidth: 150, ellipsis: true, tooltip: true },
  { title: '规格型号', dataIndex: 'specModel', minWidth: 120, ellipsis: true, tooltip: true },
  { title: '数量', dataIndex: 'quantity', minWidth: 80, align: 'right' },
  { title: '单位', dataIndex: 'unit', minWidth: 80 },
  { title: '质量等级', dataIndex: 'qualityGrade', minWidth: 100 },
  { title: '型号阶段', dataIndex: 'modelStage', minWidth: 100 },
  { title: '是否下场验收', dataIndex: 'acceptanceStandard', slotName: 'acceptanceStandard', minWidth: 120, align: 'center' },
  { title: '供应商', dataIndex: 'supplierName', minWidth: 150, ellipsis: true, tooltip: true },
  { title: '单价', dataIndex: 'unitPrice', minWidth: 100, align: 'right' },
  { title: '总价', dataIndex: 'totalPrice', minWidth: 100, align: 'right' },
  { title: '支付时间', dataIndex: 'paymentTime', minWidth: 180 },
  { title: '创建时间', dataIndex: 'createTime', minWidth: 180 },
  {
    title: '操作',
    dataIndex: 'action',
    slotName: 'action',
    width: 160,
    align: 'center',
    fixed: !isMobile() ? 'right' : undefined,
  },
]

// 重置
const reset = () => {
  resetForm()
  search()
}

// 删除
const onDelete = (record: OrderResp) => {
  return handleDelete(() => deleteOrder(record.id), {
    content: `是否确定删除订单「${record.orderNo}」？`,
    showModal: true,
  })
}

// 导出
const onExport = () => {
  useDownload(() => exportOrder(queryForm))
}

const OrderAddDrawerRef = ref<InstanceType<typeof OrderAddDrawer>>()
// 新增
const onAdd = () => {
  OrderAddDrawerRef.value?.onAdd()
}

// 修改
const onUpdate = (record: OrderResp) => {
  OrderAddDrawerRef.value?.onUpdate(record.id)
}

const OrderDetailDrawerRef = ref<InstanceType<typeof OrderDetailDrawer>>()
// 详情
const onDetail = (record: OrderResp) => {
  OrderDetailDrawerRef.value?.onOpen(record.id)
}
</script>

<style lang="scss" scoped></style> 