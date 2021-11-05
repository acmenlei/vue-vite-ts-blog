<script setup lang="ts">
import { ref, reactive } from "vue"
import { queryArticleList } from "@/api/modules/article";
import ArticleCardComponent from "@/components/articleCard/index.vue"
import ArticleCategorysComponent from "@/components/articleCategorys/index.vue"
import ArticleTagsComponent from "@/components/articleTags/index.vue"

const articleParams = reactive({ pageNum: 1, pageSize: 4 })
const articleData = ref<any[]>([]);
// 获取文章信息
async function _queryArticleList() {
    const { data } = await queryArticleList(articleParams);
    articleData.value = data;
}
_queryArticleList()
</script>

<template>
    <div class="creative-center">
        <div class="article-contain">
            <article-card-component
                v-for="item in articleData"
                :article-card-data="item"
                :key="item.ll_id"
            />
        </div>
        <div class="slider-bar">
            <article-categorys-component />
            <article-tags-component />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.creative-center {
    display: flex;
    justify-content: space-between;
    .article-contain {
        flex: 3;
        margin-right: 1rem;
    }
    .slider-bar {
        flex: 2;
        background: blue;
        margin-bottom: 1rem;
    }
}
</style>