<script setup lang='ts'>
import { queryAllCategorys } from "@/api/modules/category"
import { ref } from "@vue/reactivity"
const categorys = ref<any[]>([])

async function _queryAllCategorys() {
    const { data } = await queryAllCategorys()
    categorys.value = data;
    console.log(categorys.value);

}
_queryAllCategorys()
</script>

<template>
    <span v-for="item in categorys" :key="item.ll_id">{{ item.ll_category_name }}</span>
</template>

<style lang='scss' scoped>
</style>