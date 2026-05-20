import { ref }  from 'vue'

export function useAuthForm() {
    const username = ref('')
    const password = ref('')
    const errorMsg = ref('')

    const login = (apiType: string) => {
        errorMsg.value = ""

        if (!username.value || !password.value) {
            errorMsg.value = "請輸入帳號和密碼"
            return false
        }

        if (username.value == "admin" && password.value == "1234") {
            return true
        } else {
            errorMsg.value = "帳號或密碼錯誤"
            return false
        }
    }

    return {
            username,
            password,
            errorMsg,
            login
    }

}