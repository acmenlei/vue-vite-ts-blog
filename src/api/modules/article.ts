import { get, post } from "../http"

export function queryArticleList(data: any) {
    return post('/article/list', data);
}

export function queryAndCountCategoryAll() {
    return get("/article/getAndCountCategory");
}