<template>
  <div class="query-form">
    <div class="input-group">
      <label>保單號碼：</label>
      <input 
        type="text" 
        v-model="policyNo" 
        :class="{ 'input-error': showWarning }"
        placeholder="請輸入保單號碼 (例: POL-123)" 
        @input="clearWarning"
      />
    </div>

    <Transition name="fade">
      <p v-if="showWarning" class="error-hint">請輸入有效的保單號碼，欄位不可留空</p>
    </Transition>

    <button @click="submitQuery" style="margin-top: 10px;">送出查詢</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定義向外傳遞的事件 (事件向上)
const emit = defineEmits<{
  (e: 'submit-search', policyNo: string): void
}>()

const policyNo = ref('')
const showWarning = ref(false) // 控制提示字顯示的狀態

const submitQuery = () => {
  if (!policyNo.value.trim()) {
    showWarning.value = true 
    return
  }
  
  emit('submit-search', policyNo.value)
}

// 當使用者重新輸入時，主動把紅字跟紅框拿掉
const clearWarning = () => {
  if (policyNo.value.trim()) {
    showWarning.value = false
  }
}
</script>

<style scoped>
.input-group {
  margin-bottom: 8px;
}

.input-error {
  border-color: #ff4d4f !important;
  background-color: #fffbfe;
  outline: none;
}

.error-hint {
  color: #ff4d4f;
  font-size: 13px;
  margin: 4px 0 10px 0;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>