<template>
  <div class="table-page">
    <GiTable
      title="购物车管理"
      row-key="id"
      :data="dataList"
      :columns="columns"
      :loading="loading"
      :scroll="{ x: '100%', y: '100%', minWidth: 1000 }"
      :pagination="pagination"
      :disabled-tools="['size']"
      :disabled-column-keys="['name']"
      @refresh="search"
    >
      <template #toolbar-left>
	    <a-input v-model="queryForm.cartId" placeholder="请输入购物车条目唯一ID" allow-clear @change="search">
	      <template #prefix><icon-search /></template>
	    </a-input>
	    <a-input v-model="queryForm.memberId" placeholder="请输入用户id" allow-clear @change="search">
	      <template #prefix><icon-search /></template>
	    </a-input>
        <a-button @click="reset">
          <template #icon><icon-refresh /></template>
          <template #default>重置</template>
        </a-button>
      </template>
      <template #toolbar-right>
        <a-button v-permission="['shopping:cart:add']" type="primary" @click="onAdd">
          <template #icon><icon-plus /></template>
          <template #default>新增</template>
        </a-button>
        <a-button v-permission="['shopping:cart:export']" @click="onExport">
          <template #icon><icon-download /></template>
          <template #default>导出</template>
        </a-button>
      </template>
      <template #action="{ record }">
        <a-space>
          <a-link v-permission="['shopping:cart:detail']" title="详情" @click="onDetail(record)">详情</a-link>
          <a-link v-permission="['shopping:cart:update']" title="修改" @click="onUpdate(record)">修改</a-link>
          <a-link
            v-permission="['shopping:cart:delete']"
            status="danger"
            :disabled="record.disabled"
            :title="record.disabled ? '不可删除' : '删除'"
            @click="onDelete(record)"
          >
            删除
          </a-link>
        </a-space>
      </template>
    </GiTable>

    <CartAddModal ref="CartAddModalRef" @save-success="search" />
    <CartDetailDrawer ref="CartDetailDrawerRef" />
  </div>
</template>

<script setup lang="ts">
    import CartAddModal from './CartAddModal.vue'
    import CartDetailDrawer from './CartDetailDrawer.vue'
    import {useDownload, useTable} from '@/hooks'
    import {useDict} from '@/hooks/app'
    import {isMobile} from '@/utils'
    import has from '@/utils/has'
    import {
        type
        CartResp,
        type
        CartQuery,
        deleteCart,
        exportCart,
        listCart
    } from '@/apis/shopping/cart'
    import type {TableInstanceColumns} from '@/components/GiTable/type'

    defineOptions({name: 'Cart'})


const queryForm = reactive<CartQuery>({
  Id: undefined,
  memberId: undefined,
  sort: ['id,desc']
})

const {
  tableData: dataList,
  loading,
  pagination,
  search,
  handleDelete
} = useTable((page) => listCart({ ...queryForm, ...page }), { immediate: true })
const columns: TableInstanceColumns[] = [
  { title: '购物车条目唯一ID', dataIndex: 'cartId', slotName: 'cartId' },
  { title: '用户id', dataIndex: 'memberId', slotName: 'memberId' },
  { title: '采购申请人姓名', dataIndex: 'applicantName', slotName: 'applicantName' },
  { title: '卫星型号', dataIndex: 'satelliteModel', slotName: 'satelliteModel' },
  { title: '产品名称', dataIndex: 'productName', slotName: 'productName' },
  { title: '规格型号', dataIndex: 'specModel', slotName: 'specModel' },
  { title: '数量', dataIndex: 'quantity', slotName: 'quantity' },
  { title: '单位', dataIndex: 'unit', slotName: 'unit' },
  { title: '质量等级', dataIndex: 'qualityGrade', slotName: 'qualityGrade' },
  { title: '型号阶段（正样/初样）', dataIndex: 'modelStage', slotName: 'modelStage' },
  { title: '是否下场验收', dataIndex: 'acceptanceStandard', slotName: 'acceptanceStandard' },
  { title: '供应商名称', dataIndex: 'supplierName', slotName: 'supplierName' },
  { title: '单价', dataIndex: 'unitPrice', slotName: 'unitPrice' },
  { title: '总价', dataIndex: 'totalPrice', slotName: 'totalPrice' },
  { title: '购物车状态', dataIndex: 'status', slotName: 'status' },
  { title: '创建时间', dataIndex: 'createdAt', slotName: 'createdAt' },
  { title: '更新时间', dataIndex: 'updatedAt', slotName: 'updatedAt' },
  {
    title: '操作',
    dataIndex: 'action',
    slotName: 'action',
    width: 160,
    align: 'center',
    fixed: !isMobile() ? 'right' : undefined,
    show: has.hasPermOr(['shopping:cart:detail', 'shopping:cart:update', 'shopping:cart:delete'])
  }
]

// 重置
const reset = () => {
  queryForm.cartId = undefined
  queryForm.memberId = undefined
  search()
}

// 删除
const onDelete = (record: CartResp) => {
  return handleDelete(() => deleteCart(record.id), {
    content: `是否确定删除该条数据？`,
    showModal: true
  })
}

// 导出
const onExport = () => {
  useDownload(() => exportCart(queryForm))
}

const CartAddModalRef = ref<InstanceType<typeof CartAddModal>>()
// 新增
const onAdd = () => {
  CartAddModalRef.value?.onAdd()
}

// 修改
const onUpdate = (record: CartResp) => {
  CartAddModalRef.value?.onUpdate(record.id)
}

const CartDetailDrawerRef = ref<InstanceType<typeof CartDetailDrawer>>()
// 详情
const onDetail = (record: CartResp) => {
  CartDetailDrawerRef.value?.onOpen(record.id)
}
</script>

<style scoped lang="scss"></style>
