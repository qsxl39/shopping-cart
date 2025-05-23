<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card class="general-card" title="访问时段分析">
      <Chart :option="chartOption" style="width: 100%; height: 370px" />
    </a-card>
  </a-spin>
</template>

<script setup lang="ts">
import { type EChartsOption, graphic } from 'echarts'
import { useChart } from '@/hooks'
import { type DashboardChartCommonResp, getAnalysisTimeslot as getData } from '@/apis/common'
import handleIcon from '@/assets/icons/slider.svg'

// 提示框
const tooltipItemsHtmlString = (items) => {
  return items
    .map(
      (el) => `<div class="content-panel">
        <p>
          <span style="background-color: ${el.color}" class="tooltip-item-icon"></span>
          <span>${el.seriesName}</span>
        </p>
        <span class="tooltip-value">
        ${el.value}
        </span>
      </div>`,
    )
    .join('')
}

const xAxis = ref<string[]>([])
const chartData = ref<number[]>([])
const { chartOption } = useChart((isDark: EChartsOption) => {
  return {
    grid: {
      left: '40',
      right: 0,
      top: '20',
      bottom: '100',
    },
    xAxis: {
      type: 'category',
      offset: 2,
      data: xAxis.value,
      boundaryGap: false,
      axisLabel: {
        color: '#4E5969',
        formatter(value: number, idx: number) {
          if (idx === 0) return ''
          if (idx === xAxis.value.length - 1) return ''
          return `${value}`
        },
      },
      axisLine: {
        lineStyle: {
          color: isDark ? '#3f3f3f' : '#A9AEB8',
        },
      },
      axisTick: {
        show: true,
        alignWithLabel: true,
        lineStyle: {
          color: '#86909C',
        },
        interval(idx: number) {
          if (idx === 0) return false
          if (idx === xAxis.value.length - 1) return false
          return true
        },
      },
      splitLine: {
        show: true,
        interval: (idx: number) => {
          if (idx === 0) return false
          return idx !== xAxis.value.length - 1
        },
        lineStyle: {
          color: isDark ? '#3F3F3F' : '#E5E8EF',
        },
      },
      axisPointer: {
        show: true,
        lineStyle: {
          color: '#23ADFF',
          width: 2,
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter(value: any, idx: number) {
          if (idx === 0) return value
          if (value >= 1000) {
            return `${value / 1000}k`
          }
          return `${value}`
        },
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: isDark ? '#3F3F3F' : '#E5E8EF',
        },
      },
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter(params) {
        const [firstElement] = params
        return `<div>
            <p class="tooltip-title">${firstElement.axisValueLabel}</p>
            ${tooltipItemsHtmlString(params)}
          </div>`
      },
      className: 'echarts-tooltip-diy',
    },
    series: [
      {
        name: '访问次数',
        data: chartData.value,
        type: 'line',
        smooth: true,
        showSymbol: false,
        color: isDark ? '#3D72F6' : '#246EFF',
        symbol: 'circle',
        symbolSize: 10,
        emphasis: {
          focus: 'series',
          itemStyle: {
            borderWidth: 2,
            borderColor: '#E0E3FF',
          },
        },
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(17, 126, 255, 0.16)',
            },
            {
              offset: 1,
              color: 'rgba(17, 128, 255, 0)',
            },
          ]),
        },
      },
    ],
    dataZoom: [
      {
        bottom: 40,
        type: 'slider',
        left: 40,
        right: 14,
        height: 14,
        borderColor: 'transparent',
        handleIcon: `image://${handleIcon}`,
        handleSize: '20',
        handleStyle: {
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 4,
        },
        brushSelect: false,
        backgroundColor: isDark ? '#313132' : '#F2F3F5',
      },
      {
        type: 'inside',
        start: 0,
        end: 100,
        zoomOnMouseWheel: false,
      },
    ],
  }
})

const loading = ref(false)
// 查询图表数据
const getChartData = async () => {
  try {
    loading.value = true
    const { data } = await getData()
    data.forEach((item: DashboardChartCommonResp) => {
      xAxis.value.push(item.name)
      chartData.value.push(item.value)
    })
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getChartData()
})
</script>

<style scoped lang="scss">
:deep(.arco-card-body) {
  padding-bottom: 0;
}
</style>
