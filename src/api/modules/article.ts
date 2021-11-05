import { post } from "../http"

export function queryArticleList(data: any) {
    return post('/article/list', data);
}