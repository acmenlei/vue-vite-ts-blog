import { get, post } from "../http"

export function queryArticleList(data: any) {
    return post('/reception/article/list', data);
}

export function queryAndCountCategoryAll() {
    return get("/reception/article/getAndCountCategory");
}

export function queryRecentArticle() {
    return get("/reception/article/getRecentArticle")
}