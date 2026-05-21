<template>
    <div class="query-result">
    <div v-if="loading" class="hint">資料查詢中...</div>
    <div v-else-if="resultData" class="result-box">
      <p><strong>查詢保單：</strong> {{ resultData.id }}</p>
      <p><strong>要保人：</strong> {{ resultData.owner }}</p>
      <p><strong>保單狀態：</strong> <span class="status-tag">{{ resultData.status }}</span></p>
      <p><strong>生效日期：</strong> {{ resultData.date }}</p>
    </div>
    <div v-else class="hint">請在上方輸入保單號碼進行查詢</div>
  </div>
</template>

<script setup lang="ts">
// 接收父元件傳下來的資料 (資料向下)
interface PolicyResult {
  id: string
  owner: string
  status: string
  date: string
}

defineProps<{
  resultData: PolicyResult | null
  loading: boolean
}>()
</script>

<style scoped>
.result-box {
  background-color: #f4f9f4;
  border-left: 4px solid #42b983;
  padding: 15px;
  border-radius: 4px;
}
.hint {
  color: #666;
  font-style: italic;
}
.status-tag {
  background-color: #42b983;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
}
</style>