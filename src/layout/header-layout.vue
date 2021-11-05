<script setup lang='ts'>
import router, { routeConfigura } from '@/router';
// 路由跳转
function jump(path: string) {
    router.push(path)
}
</script>

<template>
    <header>
        <div class="header-logo">logo</div>
        <div class="header-nav">
            <span
                v-for="(route, index) in routeConfigura"
                :key="index"
                @click.native="jump((route as any).children[0]?.path)"
            >{{ route.name }}</span>
        </div>
    </header>
</template>

<style lang='scss' scoped>
$header-theme: orange;
$header-color: white;

header {
    width: 5rem;
    background: $header-theme;
    width: 100%;
    padding: 0.5rem;
    color: $header-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-logo {
        padding: inherit;
    }
    .header-nav {
        span {
            margin: 0.5rem;
            cursor: pointer;
        }
    }
}
</style>