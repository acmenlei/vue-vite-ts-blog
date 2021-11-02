<script setup lang="ts">
import { ref, reactive } from "vue"
import { queryArticleList } from "@/api/modules/article";

const articleParams = reactive({ pageNum: 1, pageSize: 10 })
const articleData = ref<any[]>([]);

async function getArticleList() {
    const { data } = await queryArticleList(articleParams);
    articleData.value = data;
}
getArticleList()
</script>

<template>
    <blockquote :key="index" v-for="(item, index) in articleData">
        <p>{{ item.ll_title }}</p>
        <img :src="item.ll_cover" />
    </blockquote>
</template>

<style lang="scss" scoped>
</style>