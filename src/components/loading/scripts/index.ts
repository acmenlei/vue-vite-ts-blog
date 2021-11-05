import { ref } from "vue"

export const loading = ref<boolean>(false)

export function showLoading() {
    loading.value = true
}

export function hideLoading() {
    loading.value = false
}