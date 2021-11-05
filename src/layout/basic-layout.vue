<script setup lang='ts'>
import headerLayout from './header-layout.vue';
import footerLayout from './footer-layout.vue';
import LoadingComponent from "@/components/loading/index.vue"

</script>

<template>
    <header-layout></header-layout>
    <loading-component />
    <blockquote class="router-view-contain">
        <router-view />
    </blockquote>
    <footer-layout></footer-layout>
</template>

<style lang='scss' scoped>
blockquote.router-view-contain {
    width: 80%;
    margin: 1rem auto;
}
</style>