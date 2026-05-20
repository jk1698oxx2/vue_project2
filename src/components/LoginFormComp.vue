<template>
  <form @submit.prevent="handleCompLogin">
    <div>
      <label>帳號：</label>
      <input type="text" v-model="username" placeholder="請輸入帳號" />
    </div>
    <div style="margin-top: 10px;">
      <label>密碼：</label>
      <input type="password" v-model="password" placeholder="請輸入密碼" />
    </div>
    <button type="submit" style="margin-top: 15px; background-color: #42b983; color: white;">
      Composition API 登入
    </button>
    <p v-if="errorMsg" style="color: red; font-size: 14px;">{{ errorMsg }}</p>
  </form>
</template>

<script setup lang="ts">
import { useAuthForm } from '../composables/useAuthForm'

const emit = defineEmits<{
  (e: 'login-success', username: string): void
}>()

// 直接解構 Composable 的響應式變數與方法
const { username, password, errorMsg, login } = useAuthForm()

const handleCompLogin = () => {
  const isSuccess = login('Composition API')
  if (isSuccess) {
    emit('login-success', username.value)
  }
}
</script>