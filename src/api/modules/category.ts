import { get, post } from "@/api/http"

export function queryAllCategorys() {
    return get("/category/getCategorys");
}