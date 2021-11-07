<script setup lang='ts'>
defineProps<{ title: string }>()
</script>

<template>
    <div class="category-title">{{ title }}</div>
</template>

<style lang='scss' scoped>
$borderColor: orange;
.category-title {
    padding-bottom: 0.2rem;
    border-bottom: 2px solid $borderColor;
}
</style>