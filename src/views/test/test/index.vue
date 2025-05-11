<template>
  <div class="table-page">
    <GiTable
      title="测试管理"
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
	    <a-input v-model="queryForm.id" placeholder="请输入主键" allow-clear @change="search">
	      <template #prefix><icon-search /></template>
	    </a-input>
        <a-button @click="reset">
          <template #icon><icon-refresh /></template>
          <template #default>重置</template>
        </a-button>
      </template>
      <template #toolbar-right>
        <a-button v-permission="['test:test:add']" type="primary" @click="onAdd">
          <template #icon><icon-plus /></template>
          <template #default>新增</template>
        </a-button>
        <a-button v-permission="['test:test:export']" @click="onExport">
          <template #icon><icon-download /></template>
          <template #default>导出</template>
        </a-button>
      </template>
      <template #action="{ record }">
        <a-space>
          <a-link v-permission="['test:test:detail']" title="详情" @click="onDetail(record)">详情</a-link>
          <a-link v-permission="['test:test:update']" title="修改" @click="onUpdate(record)">修改</a-link>
          <a-link
            v-permission="['test:test:delete']"
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

    <TestAddModal ref="TestAddModalRef" @save-success="search" />
    <TestDetailDrawer ref="TestDetailDrawerRef" />
  </div>
</template>

<script setup lang="ts">
import TestAddModal from './TestAddModal.vue'
import TestDetailDrawer from './TestDetailDrawer.vue'
import { type TestResp, type TestQuery, deleteTest, exportTest, listTest } from '@/apis/test/test'
import type { TableInstanceColumns } from '@/components/GiTable/type'
import { useDownload, useTable } from '@/hooks'
import { useDict } from '@/hooks/app'
import { isMobile } from '@/utils'
import has from '@/utils/has'

defineOptions({ name: 'Test' })


const queryForm = reactive<TestQuery>({
  id: undefined,
  sort: ['id,desc']
})

const {
  tableData: dataList,
  loading,
  pagination,
  search,
  handleDelete
} = useTable((page) => listTest({ ...queryForm, ...page }), { immediate: true })
const columns: TableInstanceColumns[] = [
  { title: '主键', dataIndex: 'id', slotName: 'id' },
  { title: '名字', dataIndex: 'name', slotName: 'name' },
  { title: '年龄', dataIndex: 'age', slotName: 'age' },
  { title: '学号', dataIndex: 'number', slotName: 'number' },
  { title: '学校', dataIndex: 'school', slotName: 'school' },
  {
    title: '操作',
    dataIndex: 'action',
    slotName: 'action',
    width: 160,
    align: 'center',
    fixed: !isMobile() ? 'right' : undefined,
    show: has.hasPermOr(['test:test:detail', 'test:test:update', 'test:test:delete'])
  }
]

// 重置
const reset = () => {
  queryForm.id = undefined
  search()
}

// 删除
const onDelete = (record: TestResp) => {
  return handleDelete(() => deleteTest(record.id), {
    content: `是否确定删除该条数据？`,
    showModal: true
  })
}

// 导出
const onExport = () => {
  useDownload(() => exportTest(queryForm))
}

const TestAddModalRef = ref<InstanceType<typeof TestAddModal>>()
// 新增
const onAdd = () => {
  TestAddModalRef.value?.onAdd()
}

// 修改
const onUpdate = (record: TestResp) => {
  TestAddModalRef.value?.onUpdate(record.id)
}

const TestDetailDrawerRef = ref<InstanceType<typeof TestDetailDrawer>>()
// 详情
const onDetail = (record: TestResp) => {
  TestDetailDrawerRef.value?.onOpen(record.id)
}
</script>

<style scoped lang="scss"></style>
