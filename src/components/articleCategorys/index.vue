<script setup lang='ts'>
import { dyColors } from "@/common/globTs"
import { queryAndCountCategoryAll } from "@/api/modules/article"
import { queryAllCategorys } from "@/api/modules/category"
import { ref } from "@vue/reactivity"
// 获取文章分类
const categorys = ref<any[]>([])
const categoryCounts = ref<{ count: number }[]>([]);
async function _queryAndCountCategoryAll() {
    const { data, counts }: any = await queryAndCountCategoryAll()
    categorys.value = data;
    categoryCounts.value = counts;
}
_queryAndCountCategoryAll()

// 获取分类名称
const categoryNames = ref<any>({});
async function _queryAllCategorys() {
    const { data } = await queryAllCategorys();
    for (let i = 0, len = data.length; i < len; i++) {
        categoryNames.value[data[i]["ll_category_val"]] = data[i]["ll_category_name"];
    }
}
_queryAllCategorys()
</script>

<template>
    <div class="article-category">
        <div class="category-title">文章分类</div>
        <div class="category-contain">
            <span
                :style="{ background: `${dyColors[index]}` }"
                v-for="(item, index) in categorys"
                :key="item.ll_id"
            >
                <i>{{ categoryCounts[index].count }}</i>
                {{ categoryNames[item.ll_category] }}
            </span>
        </div>
    </div>
</template>

<style lang='scss' scoped>
$borderColor: orange;
$categoryCount: orangered;
.category-title {
    padding-bottom: 0.2rem;
    border-bottom: 2px solid $borderColor;
}
.category-contain {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
        color: white;
        margin: 0.3rem 0.8rem 0.2rem 0;
        cursor: pointer;
        padding: 0.2rem;
        border-radius: 0.2rem;
        font-size: 0.9rem;
        position: relative;
        i {
            position: absolute;
            right: -0.5rem;
            top: -0.3rem;
            display: inline-block;
            background: $categoryCount;
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
            font-size: 0.8rem;
            text-align: center;
        }
    }
}
</style>