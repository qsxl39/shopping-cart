<template>
  <a-drawer
    :visible="visible"
    :title="isAdd ? '新增订单' : '修改订单'"
    :footer="footerVisable"
    :footer-class="footerClass"
    :width="550"
    unmount-on-close
    @cancel="onClose"
  >
    <a-form ref="formRef" :model="formData" :rules="rules" layout="vertical" @submit="onSubmit">
      <a-form-item
        field="orderNo"
        label="订单编号"
        hide-asterisk
        :rules="[
          { required: true, message: '订单编号不能为空' },
          { type: 'number', min: 1, message: '请输入有效的订单编号' },
        ]"
      >
        <a-input-number v-model="formData.orderNo" placeholder="请输入订单编号" :min="1" style="width: 100%"></a-input-number>
      </a-form-item>
      <a-form-item field="applicantName" label="申请人" hide-asterisk :rules="[{ required: true, message: '申请人不能为空' }]">
        <a-input v-model="formData.applicantName" placeholder="请输入申请人"></a-input>
      </a-form-item>
      <a-form-item field="satelliteModel" label="卫星型号" hide-asterisk :rules="[{ required: true, message: '卫星型号不能为空' }]">
        <a-input v-model="formData.satelliteModel" placeholder="请输入卫星型号"></a-input>
      </a-form-item>
      <a-form-item field="productName" label="产品名称" hide-asterisk :rules="[{ required: true, message: '产品名称不能为空' }]">
        <a-input v-model="formData.productName" placeholder="请输入产品名称"></a-input>
      </a-form-item>
      <a-form-item field="specModel" label="规格型号" hide-asterisk :rules="[{ required: true, message: '规格型号不能为空' }]">
        <a-input v-model="formData.specModel" placeholder="请输入规格型号"></a-input>
      </a-form-item>
      <a-form-item
        field="quantity"
        label="数量"
        hide-asterisk
        :rules="[
          { required: true, message: '数量不能为空' },
          { type: 'number', min: 1, message: '请输入有效的数量' },
        ]"
      >
        <a-input-number v-model="formData.quantity" placeholder="请输入数量" :min="1" style="width: 100%"></a-input-number>
      </a-form-item>
      <a-form-item field="unit" label="单位" hide-asterisk :rules="[{ required: true, message: '单位不能为空' }]">
        <a-input v-model="formData.unit" placeholder="请输入单位"></a-input>
      </a-form-item>
      <a-form-item field="qualityGrade" label="质量等级" hide-asterisk :rules="[{ required: true, message: '质量等级不能为空' }]">
        <a-input v-model="formData.qualityGrade" placeholder="请输入质量等级"></a-input>
      </a-form-item>
      <a-form-item field="modelStage" label="型号阶段" hide-asterisk :rules="[{ required: true, message: '型号阶段不能为空' }]">
        <a-select v-model="formData.modelStage" placeholder="请选择型号阶段">
          <a-option value="正样">正样</a-option>
          <a-option value="初样">初样</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="acceptanceStandard" label="是否下场验收" hide-asterisk>
        <a-switch v-model="formData.acceptanceStandard" type="round"></a-switch>
      </a-form-item>
      <a-form-item field="supplierName" label="供应商名称" hide-asterisk :rules="[{ required: true, message: '供应商名称不能为空' }]">
        <a-input v-model="formData.supplierName" placeholder="请输入供应商名称"></a-input>
      </a-form-item>
      <a-form-item
        field="unitPrice"
        label="单价"
        hide-asterisk
        :rules="[
          { required: true, message: '单价不能为空' },
          { type: 'number', min: 0, message: '请输入有效的单价' },
        ]"
      >
        <a-input-number v-model="formData.unitPrice" placeholder="请输入单价" :min="0" style="width: 100%"></a-input-number>
      </a-form-item>
      <a-form-item
        field="totalPrice"
        label="总价"
        hide-asterisk
        :rules="[
          { required: true, message: '总价不能为空' },
          { type: 'number', min: 0, message: '请输入有效的总价' },
        ]"
      >
        <a-input-number v-model="formData.totalPrice" placeholder="请输入总价" :min="0" style="width: 100%"></a-input-number>
      </a-form-item>
      <a-form-item field="paymentTime" label="支付时间" hide-asterisk>
        <a-date-picker v-model="formData.paymentTime" style="width: 100%" show-time format="YYYY-MM-DD HH:mm:ss"></a-date-picker>
      </a-form-item>
      <div class="gi_form_drawer_footer">
        <a-space>
          <a-button @click="onClose">取消</a-button>
          <a-button type="primary" :loading="submitLoading" html-type="submit">保存</a-button>
        </a-space>
      </div>
    </a-form>
  </a-drawer>
</template>

<script setup lang="ts">
import { addOrder, getOrder, updateOrder } from '@/apis/order'
import { Message } from '@arco-design/web-vue'
import type { FormInstance } from '@arco-design/web-vue'

defineOptions({ name: 'OrderAddDrawer' })

const emit = defineEmits(['saveSuccess'])

interface FormData {
  orderNo: number
  applicantName: string
  satelliteModel: string
  productName: string
  specModel: string
  quantity: number
  unit: string
  qualityGrade: string
  modelStage: string
  acceptanceStandard: boolean
  supplierName: string
  unitPrice: number
  totalPrice: number
  paymentTime: any
}

const visible = ref(false)
const isAdd = ref(true)
const editId = ref<string>('')
const formRef = ref<FormInstance>()
const formData = ref<FormData>({
  orderNo: 0,
  applicantName: '',
  satelliteModel: '',
  productName: '',
  specModel: '',
  quantity: 0,
  unit: '',
  qualityGrade: '',
  modelStage: '正样',
  acceptanceStandard: false,
  supplierName: '',
  unitPrice: 0,
  totalPrice: 0,
  paymentTime: null,
})
const submitLoading = ref(false)

// 表单校验规则
const rules = ref({})

// 添加
const onAdd = () => {
  isAdd.value = true
  visible.value = true
  resetForm()
}

// 修改
const onUpdate = async (id: string) => {
  isAdd.value = false
  visible.value = true
  editId.value = id
  resetForm()
  await getOrderData()
}

// 获取数据
const getOrderData = async () => {
  try {
    const { data } = await getOrder(editId.value)
    if (data) {
      Object.keys(formData.value).forEach((key) => {
        (formData.value as any)[key] = (data as any)[key]
      })
    }
  } catch (error) {
    console.error('获取订单数据失败', error)
  }
}

// 提交表单
const onSubmit = async () => {
  try {
    submitLoading.value = true
    // 先验证表单
    await formRef.value?.validate()
    const params = {
      ...formData.value,
    }
    // 添加或修改
    if (isAdd.value) {
      await addOrder(params)
      Message.success('新增成功')
    } else {
      await updateOrder(params, editId.value)
      Message.success('修改成功')
    }
    onClose()
    emit('saveSuccess')
  } catch (error) {
    console.error(error)
  } finally {
    submitLoading.value = false
  }
}

// 关闭弹窗
const onClose = () => {
  visible.value = false
}

// 重置表单
const resetForm = () => {
  formRef.value?.resetFields()
  Object.assign(formData.value, {
    orderNo: 0,
    applicantName: '',
    satelliteModel: '',
    productName: '',
    specModel: '',
    quantity: 0,
    unit: '',
    qualityGrade: '',
    modelStage: '正样',
    acceptanceStandard: false,
    supplierName: '',
    unitPrice: 0,
    totalPrice: 0,
    paymentTime: null,
  })
}

// 底部操作按钮（绝对定位）
const footerClass = ref('')
const footerVisable = ref(false)
</script>

<style lang="scss" scoped>
.gi_form_drawer_footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 24px;
  border-top: 1px solid #e9e9e9;
  background-color: var(--color-bg-1);
}
</style> 