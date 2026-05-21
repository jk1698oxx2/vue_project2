<template>
  <div class="container">
    <h1>大樹保險保單查詢</h1>
    
    <div v-if="!isLoggedIn" class="login-section">
      <CommonCard>
        <template #title>Options API 登入表單</template>
        <LoginFormOptions @login-success="onLoginSuccess" />
      </CommonCard>

      <CommonCard>
        <template #title>Composition API 登入表單</template>
        <LoginFormComp @login-success="onLoginSuccess" />
      </CommonCard>
    </div>

    <!-- 查詢區塊：登入成功後跳出 -->
    <div v-else class="main-section">
      <div class="welcome-alert">
        🎉 歡迎回來，<strong>{{ currentUsername }}</strong>！您已成功登入。
        <button @click="logout" class="btn-logout">登出</button>
      </div>

      <CommonCard>
        <template #title>保單資料查詢系統</template>
        
        <!-- 子元件1：負責輸入條件，透過 emit 把事件與資料傳上來 -->
        <QueryForm @submit-search="handleSearchPolicy" />
        
        <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
        
        <!-- 子元件2：負責展示結果，由父元件透過 props 把資料送下去 -->
        <QueryResult :resultData="searchResult" :loading="isSearching" />
      </CommonCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommonCard from './components/CommonCard.vue'
import LoginFormOptions from './components/LoginFormOptions.vue'
import LoginFormComp from './components/LoginFormComp.vue'
import QueryForm from './components/QueryForm.vue'
import QueryResult from './components/QueryResult.vue'

// 登入狀態控制
const isLoggedIn = ref(false)
const currentUsername = ref('')

// 查詢狀態與資料
const isSearching = ref(false)
const searchResult = ref<{ id: string; owner: string; status: string; date: string } | null>(null)

const onLoginSuccess = (username: string) => {
  currentUsername.value = username
  isLoggedIn.value = true
}

const logout = () => {
  isLoggedIn.value = false
  currentUsername.value = ''
  searchResult.value = null
}

// 模擬 API 查詢行為
const handleSearchPolicy = (policyNo: string) => {
  isSearching.value = true
  searchResult.value = null

  setTimeout(() => {
    searchResult.value = {
      id: policyNo,
      owner: currentUsername.value,
      status: '有效保單',
      date: '2026-01-15'
    }
    isSearching.value = false
  }, 800) // 模擬 0.8 秒的網路延遲
}

</script>

<style>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: Arial, sans-serif;
}
.login-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.welcome-alert {
  background-color: #e8f4fd;
  color: #1d6fa5;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-logout {
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
input {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
}
button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
button:hover {
  opacity: 0.9;
}
</style>