<script setup lang='ts'>
// 定义文章卡片约束
interface ArticleCard {
    ll_cover: string;
    ll_category: string;
    ll_title: string;
    ll_introduce: string;
    ll_author?: string;
}
defineProps<{ articleCardData: ArticleCard }>();
</script>

<template>
    <article class="blog-card">
        <img class="post-image" :src="articleCardData.ll_cover" />
        <div class="article-details">
            <div class="post-header-contain">
                <h4 class="post-category">{{ articleCardData.ll_category }}</h4>
                <div class="post-three-words">
                    <span v-for="word in 3"></span>
                </div>
            </div>
            <h2 class="post-title">{{ articleCardData.ll_title }}</h2>
            <p class="post-description">{{ articleCardData.ll_introduce }}</p>
            <p class="post-author">By coderlei</p>
        </div>
    </article>
</template>

<style lang='scss' scoped>
$bg: #eedfcc;
$text: #777;
$black: #121212;
$white: #fff;
$red: #e04f62;
$border: #ebebeb;
$category-border: orange;
$shadow: rgba(0, 0, 0, 0.2);

@mixin transition($args...) {
    transition: $args;
}
.blog-card {
    display: flex;
    flex-direction: row;
    background: $white;
    box-shadow: 0 0.1875rem 1.5rem $shadow;
    border: 1px solid #eee;
    border-radius: 0.375rem;
    overflow: hidden;
    margin: 1rem 0;
    &:hover {
        cursor: pointer;
        transition: transform 0.3s;
        transform: scale(1.02);
    }
    &:nth-child(1) {
        margin-top: 0;
    }
}

.post-image {
    @include transition(opacity 0.3s ease);
    display: block;
    width: 100%;
    object-fit: cover;
}

.article-details {
    padding: 1.5rem;
}

.post-header-contain {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0.75rem 0;
    .post-category {
        cursor: pointer;
        display: inline-block;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 0.0625rem;
        padding: 0 0 0.25rem 0;
        border-bottom: 0.125rem solid $category-border;
    }

    .post-three-words {
        span {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-left: 0.5rem;
            &:nth-child(1) {
                background: red;
            }
            &:nth-child(2) {
                background: yellow;
            }
            &:nth-child(3) {
                background: green;
            }
        }
    }
}
.post-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 3;
    font-size: 14px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.post-title {
    @include transition(color 0.3s ease);
    font-size: 1.125rem;
    line-height: 1.4;
    color: $black;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
}

.post-author {
    font-size: 0.875rem;
    line-height: 1;
    margin: 1.125rem 0 0 0;
    padding: 1.125rem 0 0 0;
    border-top: 0.0625rem solid $border;
}

@media (max-width: 40rem) {
    #container {
        width: 18rem;
        height: 27.25rem;
    }

    .blog-card {
        flex-wrap: wrap;
    }
}

@supports (display: grid) {
    body {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0.625rem;
        grid-template-areas: ". main main ." ". main main .";
    }

    #container {
        grid-area: main;
        align-self: center;
        justify-self: center;
    }

    .post-image {
        height: 100%;
    }

    .blog-card {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
    }

    @media (max-width: 40rem) {
        .blog-card {
            grid-template-columns: auto;
            grid-template-rows: 12rem 1fr;
        }
    }
}
</style>