import { ref } from "vue"

export const loading = ref<boolean>(false)

export function showLoading() {
    loading.value = true 
}

export function hideLoading() {
    setTimeout(() => {
        loading.value = false
    }, 2000);    
}