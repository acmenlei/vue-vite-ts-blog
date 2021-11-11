<script setup lang="ts">
import { ref, reactive } from "vue"
import { queryArticleList } from "@/api/modules/article";
import ArticleCardComponent from "@/components/articleCard/index.vue"
import ArticleCategorysComponent from "@/components/articleCategorys/index.vue"
import ArticleTagsComponent from "@/components/articleTags/index.vue"
import ArticleRecentComponent from "@/components/articleRecent/index.vue"
import PagingComponent from "@/components/paging/index.vue"

const articleParams = reactive({ pageNum: 1, pageSize: 4 })
const articleData = ref<any[]>([]);
const articleTotal = ref<number>(0);
// 获取文章信息
async function _queryArticleList() {
    const { data, total }: any = await queryArticleList(articleParams);
    articleData.value = data;
    articleTotal.value = total;
}
_queryArticleList()

/* 处理分页 */
function changeCurrentPage(pageNum: number) {
    articleParams.pageNum = pageNum
    _queryArticleList()
}
</script>

<template>
    <div class="creative-center">
        <div class="article-contain">
            <article-card-component
                v-for="item in articleData"
                :article-card-data="item"
                :key="item.ll_id"
            />
            <paging-component
                @change="changeCurrentPage"
                :pageNum="articleParams.pageNum"
                :pageSize="articleParams.pageSize"
                :total="articleTotal"
            />
        </div>
        <div class="slider-bar">
            <article-categorys-component />
            <article-recent-component />
            <article-tags-component />
        </div>
    </div>
</template>

<style lang="scss" scoped>
$shadow: rgba(0, 0, 0, 0.2);
.creative-center {
    display: flex;
    justify-content: space-between;
    .article-contain {
        flex: 3;
        margin-right: 1rem;
    }
    .slider-bar {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        justify-content: flex-start;
        div {
            padding: 0.5rem;
            flex: 1;
            box-shadow: 0 0.1875rem 1.5rem $shadow;
            margin-top: 1rem;
            border-radius: 0.375rem;
            &:nth-child(1) {
                margin-top: 0;
            }
        }
    }
}
</style>