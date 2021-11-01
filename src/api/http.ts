import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
// 1. 便于修改baseurl 当服务器地址发生改变的时候 直接修改此处即可
// 2. 可以在此处增加 loading 的控制
// 3. 统一处理错误信息
const service = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
    // 1. 拦截http请求 添加自己想要的请求头
    // 2. 控制loading显示
    return config;
})

service.interceptors.response.use((data: AxiosResponse) => {
    const resp = data.data;
    if (resp.code !== 200) {
        return Promise.reject(resp.msg || "网络出错");
    } else {
        // 1. 解构data层 统一处理错误
        return Promise.resolve(data.data);
    }
})

export async function get(url: string, params: any = {}) {
    try {
        const ret = await service.get(url, params)
        return Promise.resolve(ret)
    } catch (error) {
        return Promise.reject(error)
    }
}

export async function post(url: string, data: any = {}) {
    try {
        const ret = await service.post(url, data)
        return Promise.resolve(ret)
    } catch (error) {
        return Promise.reject(error)
    }
}