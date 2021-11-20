<script setup lang='ts'>

</script>

<template>
    <div class="comments-input">
        <textarea type="text" rows="8" cols="40" placeholder=" please input text..."></textarea>
        <button>发表</button>
    </div>
</template>

<style lang='scss' scoped>
.comments-input textarea {
    outline: none;
    border-color: orange;
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    resize: nones;
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
</style>