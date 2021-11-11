import { get } from "@/api/http"

export function queryAllTags(){
    return get("/reception/tag/getTags")
}