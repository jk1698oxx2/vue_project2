<template>
  <div class="container">
    <h1>大樹保險保單查詢</h1>
    
    <div v-if="!isLoggedIn" class="login-section">
      <CommonCard>
        <template #title>Options API 登入表單</template>
        <LoginFormOptions @login-success="onLoginSuccess" />
      </CommonCard>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import CommonCard from './components/CommonCard.vue'
// import LoginFormOptions from './components/LoginFormOptions.vue'
// import LoginFormComp from './components/LoginFormComp.vue'

const isLoggedIn = ref(false)
const currentUsername = ref('')

const onLoginSuccess = (username: string) => {
  currentUsername.value = username
  isLoggedIn.value = true
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