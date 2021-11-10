import { get, post } from "@/api/http"

export function queryAllCategorys() {
    return get("/reception/category/getCategorys");
}