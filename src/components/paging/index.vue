<script setup lang='ts'>
import { ref } from "vue"
const props = defineProps<{ pageNum: number, pageSize: number, total: number }>()
const emits = defineEmits(['change']);
/* 计算paging数量 */
let currentPageNum = ref<number>(1)
let paging = 0;
paging = (props.total + 1) % props.pageSize === 0 ? paging : paging + 1;

/* 分页切换 */
function change(pageNum: number) {
    emits('change', pageNum);
    currentPageNum.value = pageNum;
}

/* 分页初始化 */
// 1 2 ... 4 5 6 7 8 ... 99 100
// let prePageNum = ref<number>(0), midPageNum = ref<number>(0), lastPageNum = ref<number>(0);
// let hinge = '...';
// prePageNum.value = paging > 10 ? 2 : paging;
// midPageNum.value = paging > 10 ? 
/* prev */
function pagingPrev() {
    currentPageNum.value--;
    change(currentPageNum.value)
}
/* next */
function pagingNext() {
    currentPageNum.value++;
    change(currentPageNum.value)
}
</script>

<template>
    <div class="paging">
        <button
            class="paging-operator-prev"
            :disabled="currentPageNum === 1"
            @click="pagingPrev"
        >&lt;&nbsp;prev</button>
        <span
            :class="currentPageNum === pageNum ? 'active' : ''"
            v-for="pageNum in paging"
            :key="pageNum"
            @click="change(pageNum)"
        >{{ pageNum }}</span>
        <button
            class="paging-operator-next"
            :disabled="currentPageNum === paging"
            @click="pagingNext"
        >next&nbsp;&gt;</button>
    </div>
</template>

<style lang='scss' scoped>
$button-color: orange;
.paging {
    span {
        display: inline-block;
        cursor: pointer;
        color: #333;
        font-size: 0.8rem;
        margin: 0.2rem;
        padding: 0.2rem 0.6rem;
        border-radius: 0.3rem;
        &.active {
            background: $button-color;
            color: white;
        }
        &:hover {
            outline: 0.5px solid $button-color;
        }
    }
    button {
        cursor: pointer;
        border: none;
        padding: 0.3rem;
        border-radius: 0.3rem;
        margin: 0 0.5rem;
        color: $button-color;
        background: white;
        &:nth-child(1) {
            margin-left: 0;
        }
        &:hover {
            opacity: 0.8;
        }
    }
}
</style>