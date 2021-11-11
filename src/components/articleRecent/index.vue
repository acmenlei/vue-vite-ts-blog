<script setup lang='ts'>
import SliderBarTitleComponent from "@/components/sliderBarTitle/index.vue"
import { queryRecentArticle } from "@/api/modules/article"
import { ref } from "@vue/reactivity";
import { formatDateTime } from "@/common/globTs"

/* 获取最近文章 */
const recentData = ref<any[]>([])
async function _queryRecentArticle() {
    const { data } = await queryRecentArticle()
    recentData.value = data
}
_queryRecentArticle()

</script>

<template>
    <div class="article-recent">
        <slider-bar-title-component title="最近文章" />
        <ul>
            <li v-for=" item in recentData ">
                <span>{{ item.ll_title }}</span>
                <span>{{ formatDateTime(item.ll_createdTime) }}</span>
            </li>
        </ul>
    </div>
</template>

<style lang='scss' scoped>
$time-color: gray;
$recent-item-border-bottom: orange;
.article-recent {
    ul {
        list-style: none;
        li {
            margin-top: .3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px dashed $recent-item-border-bottom;
            span {
                &:nth-child(1) {
                    font-size: 0.9rem;
                }
                &:nth-child(2) {
                    color: $time-color;
                    font-size: 0.8rem;
                }
            }
            &:hover {
                cursor: pointer;
                opacity: .6;
            }
        }
    }
}
</style>