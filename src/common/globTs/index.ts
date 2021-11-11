import moment from "moment"

export const dyColors = ["#00a8ff", "#4cd137", "#9c88ff", "#22a6b3", "#ffa801", "#ef5777", "#3c40c6"]

/* 时间格式化 */
export function formatDateTime(date: string) {
    return moment(date).format("YYYY-MM-DD")
}