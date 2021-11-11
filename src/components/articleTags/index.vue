<script setup lang='ts'>
import SliderBarTitleComponent from "@/components/sliderBarTitle/index.vue"
import { queryAllTags } from "@/api/modules/tag"
import { ref } from "@vue/reactivity";
/* 标签墙数据拉取 */
let tags = ref<any>({})
let tagsKeys = ref<string[]>([])
async function _queryAllTags() {
    const { data } = await queryAllTags();
    data.forEach((element: any) => tags["value"][element.ll_tag_name] = element.ll_id);
    tagsKeys.value = Object.keys(tags.value);
}
_queryAllTags()
</script>

<template>
    <div class="article-tags">
        <slider-bar-title-component title="标签墙" />
        <div class="tag-cloud-container">
            <span v-for="tag of tagsKeys" :key="tag">{{ tag }}</span>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.article-tags {
    .tag-cloud-container {
        padding: .5rem;
        span {
            transition: color .3s;
            cursor: pointer;
            color: cornflowerblue;
            margin: .4rem;
            &:nth-child(1n) {
                opacity: .8;
                font-size: .9rem;
            }
            &:nth-child(2n) {
                opacity: .6;
                font-size: .8rem;
            }
            &:nth-child(3n) {
                font-size: 1.1rem;
            }
            &:hover {
                color: orange;
            }
        }
    }
}
</style>