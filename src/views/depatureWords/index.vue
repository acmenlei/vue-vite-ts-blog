<script setup lang='ts'>
import CommentsButtonComponent from "@/components/commentsButton/index.vue"
import CommentsListComponent from '@/components/commentsList/index.vue'
</script>

<template>
   <div class="comments-container">
      <h2>留言板</h2>
      <comments-button-component />
      <comments-list-component />
   </div>
</template>

<style lang='scss' scoped>
$theme-color: orange;
h2 {
   margin-bottom: 1rem;
   font-weight: normal;
}
/** ====================
* Lista de Comentarios
=======================*/
.comments-container {
   margin: 60px auto 15px;
   width: 768px;
}

.comments-container h1 {
   font-size: 36px;
   color: #283035;
   font-weight: 400;
}

.comments-container h1 a {
   font-size: 18px;
   font-weight: 700;
}

/** =====================
* Responsive
========================*/
@media only screen and (max-width: 766px) {
   .comments-container {
      width: 480px;
   }
}
</style>