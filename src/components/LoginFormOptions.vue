<template>
    <form @submit.prevent="handleOptionsLogin">
        <div>
            <label>帳號：</label>
            <input type="text" v-model="username" placeholder="請輸入帳號" />
        </div>
        <div style="margin-top: 10px;">
            <label>密碼：</label>
            <input type="password" v-model="password" placeholder="請輸入密碼" />
        </div>
        <button type="submit" style="margin-top: 15px;">Options API 登入</button>
        <p v-if="errorMsg" style="color: red; font-size: 14px;">{{ errorMsg }}</p>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthForm } from '../composables/useAuthForm'

export default defineComponent({
  name: 'LoginFormOptions',
  emits: ['login-success'],
  // 雖然是 Options API，但我們依然可以在 setup() 裡引入 composable 再傳給 data 承接
  setup() {
    const { username, password, errorMsg, login } = useAuthForm()
    return { username, password, errorMsg, login }
  },
  methods: {
    handleOptionsLogin() {
      // 呼叫 composable 抽出的登入邏輯
      const isSuccess = this.login('Options API')
      if (isSuccess) {
        this.$emit('login-success', this.username)
      }
    }
  }
})
</script>