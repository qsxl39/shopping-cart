<template>
  <a-modal
    v-model:visible="visible"
    :title="title"
    :mask-closable="false"
    :esc-to-close="false"
    draggable
    :width="width >= 600 ? 600 : '100%'"
    @before-ok="save"
    @close="reset"
  >
    <GiForm ref="formRef" v-model="form" :options="options" :columns="columns" />
  </a-modal>
</template>

<script setup lang="ts">
import {Message} from '@arco-design/web-vue'
import {useWindowSize} from '@vueuse/core'
import {useResetReactive} from '@/hooks'
import {useDict} from '@/hooks/app'
import {
    addCart,
    getCart,
    updateCart
} from '@/apis/shopping/cart'
import {type Columns, GiForm, type Options} from '@/components/GiForm'

    const emit = defineEmits < {
  (e: 'save-success'): void
}>()

const { width } = useWindowSize()

const dataId = ref('')
const visible = ref(false)
const isUpdate = computed(() => !!dataId.value)
const title = computed(() => (isUpdate.value ? '修改购物车' : '新增购物车'))
const formRef = ref<InstanceType<typeof GiForm>>()

const options: Options = {
  form: { size: 'large' },
  btns: { hide: true },
}

const [form, resetForm] = useResetReactive({
  // todo 待补充
})

const columns: Columns = reactive([
  {
    label: '采购申请人姓名',
    field: 'applicantName',
    type: 'input',
    rules: [{ required: true, message: '请输入采购申请人姓名' }]
  },
  {
    label: '卫星型号',
    field: 'satelliteModel',
    type: 'input',
    rules: [{ required: true, message: '请输入卫星型号' }]
  },
  {
    label: '产品名称',
    field: 'productName',
    type: 'input',
    rules: [{ required: true, message: '请输入产品名称' }]
  },
  {
    label: '规格型号',
    field: 'specModel',
    type: 'input',
    rules: [{ required: true, message: '请输入规格型号' }]
  },
  {
    label: '数量',
    field: 'quantity',
    type: 'input',
    rules: [{ required: true, message: '请输入数量' }]
  },
  {
    label: '单位',
    field: 'unit',
    type: 'input',
    rules: [{ required: true, message: '请输入单位' }]
  },
  {
    label: '质量等级',
    field: 'qualityGrade',
    type: 'input',
    rules: [{ required: true, message: '请输入质量等级' }]
  },
  {
    label: '型号阶段（正样/初样）',
    field: 'modelStage',
    type: 'input',
    rules: [{ required: true, message: '请输入型号阶段（正样/初样）' }]
  },
  {
    label: '是否下场验收',
    field: 'acceptanceStandard',
    type: 'input',
    rules: [{ required: true, message: '请输入是否下场验收' }]
  },
  {
    label: '供应商名称',
    field: 'supplierName',
    type: 'input',
    rules: [{ required: true, message: '请输入供应商名称' }]
  },
  {
    label: '单价',
    field: 'unitPrice',
    type: 'input',
    rules: [{ required: true, message: '请输入单价' }]
  },
  {
    label: '总价',
    field: 'totalPrice',
    type: 'input',
    rules: [{ required: true, message: '请输入总价' }]
  },
])

// 重置
const reset = () => {
  formRef.value?.formRef?.resetFields()
  resetForm()
}

// 保存
const save = async () => {
  try {
    const isInvalid = await formRef.value?.formRef?.validate()
    if (isInvalid) return false
    if (isUpdate.value) {
      await updateCart(form, dataId.value)
      Message.success('修改成功')
    } else {
      await addCart(form)
      Message.success('新增成功')
    }
    emit('save-success')
    return true
  } catch (error) {
    return false
  }
}

// 新增
const onAdd = async () => {
  reset()
  dataId.value = ''
  visible.value = true
}

// 修改
const onUpdate = async (id: string) => {
  reset()
  dataId.value = id
  const { data } = await getCart(id)
  Object.assign(form, data)
  visible.value = true
}

defineExpose({ onAdd, onUpdate })
</script>

<style scoped lang="scss"></style>
