<script setup lang='ts'>
import { ref } from "vue"
const props = defineProps<{ pageNum: number, pageSize: number, total: number }>()
const emits = defineEmits(['change']);
/* 计算paging数量 */
let currentPageNum = ref<number>(0)
let paging = 10;
paging = (props.total + 1) % props.pageSize === 0 ? paging : paging + 1;

/* 分页切换 */
function change(pageNum: number) {
    emits('change', pageNum);
    currentPageNum.value = pageNum;
}
</script>

<template>
    <div class="paging">
        <button class="paging-operator-prev">prev</button>
        <span
            :class="currentPageNum === pageNum ? 'active' : ''"
            v-for="pageNum in paging"
            :key="pageNum"
            @click="change(pageNum)"
        >{{ pageNum }}</span>
        <button class="paging-operator-next">next</button>
    </div>
</template>

<style lang='scss' scoped>
$button-color: orange;
$button-bg: #f8f8f8;
.paging {
    span {
        display: inline-block;
        cursor: pointer;
        color: #555;
        font-size: 0.8rem;
        margin: 0 0.2rem;
        padding: 0.2rem 0.5rem;
        border-radius: 0.3rem;
        background: #f8f8f8;
        &.active {
            background: $button-color;
            color: white;
        }
    }
    button {
        cursor: pointer;
        outline: 0.5px solid $button-color;
        border: none;
        padding: 0.3rem;
        border-radius: 0.3rem;
        margin: 0 0.5rem;
        color: $button-color;
        background: $button-bg;
        &:nth-child(1) {
            margin-left: 0;
        }
        &:hover {
            opacity: 0.8;
        }
    }
}
</style>