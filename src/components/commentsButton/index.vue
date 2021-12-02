<script setup lang='ts'>
import { ref } from '@vue/reactivity';
// 发表留言评论
const nickName = ref<string>("");
const commentsValues = ref<string>("");
const publishComments = function () {
    /* 获取用户信息 */
    commentsValues.value = ""
}

</script>

<template>
    <div class="comments-nick-name">
        <input type="text" placeholder="请输入你的昵称" v-model="nickName" />
    </div>
    <div class="comments-input">
        <textarea type="text" v-model="commentsValues" rows="8" cols="40" placeholder="评论内容"></textarea>
        <button @click="publishComments">发表</button>
    </div>
</template>

<style lang='scss' scoped>
.comments-input,
.comments-nick-name {
    textarea,
    input {
        outline: none;
        border: 1px solid #ccc;
        width: 100%;
        padding: 0.5rem;
        border-radius: 4px;
        resize: nones;
    }
}
.comments-input button {
    padding: 0.3rem 0.8rem;
    outline: none;
    border: none;
    cursor: pointer;
    color: #f8f8f8;
    background: orange;
    border-radius: 4px;
}
.comments-input button:hover {
    box-shadow: 1px 1px 2px orange;
}

.comments-nick-name {
    input {
        margin-bottom: 1rem;
    }
}
</style>