<script setup lang='ts'>

</script>

<template>
   <ul id="comments-list" class="comments-list">
      <li>
         <!-- 单个评论 -->
         <div class="comment-main-level">
            <!-- Avatar -->
            <div class="comment-avatar">
               <img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" />
            </div>
            <!-- Contenedor del Comentario -->
            <div class="comment-box">
               <div class="comment-head">
                  <h6 class="comment-name by-author">
                     <a href="http://creaticode.com/blog">Agustin Ortiz</a>
                  </h6>
                  <span>hace 20 minutos</span>
                  <i class="fa fa-reply"></i>
                  <i class="fa fa-heart"></i>
               </div>
               <div class="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure
                  laudantium vitae, praesentium optio, sapiente distinctio illo?
               </div>
            </div>
         </div>
         <!-- 评论中的回复嵌套 -->
         <ul class="comments-list reply-list">
            <li>
               <!-- Avatar -->
               <div class="comment-avatar">
                  <img
                     src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
                  />
               </div>
               <!-- Contenedor del Comentario -->
               <div class="comment-box">
                  <div class="comment-head">
                     <h6 class="comment-name">
                        <a href="http://creaticode.com/blog">Lorena Rojero</a>
                     </h6>
                     <span>hace 10 minutos</span>
                     <i class="fa fa-reply">喜欢</i>
                     <i class="fa fa-heart">转发</i>
                  </div>
                  <div class="comment-content">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure
                     laudantium vitae, praesentium optio, sapiente distinctio illo?
                  </div>
               </div>
            </li>
         </ul>
      </li>
      <!-- 第二个评论 -->
      <li>
         <div class="comment-main-level">
            <!-- Avatar -->
            <div class="comment-avatar">
               <img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" />
            </div>
            <!-- Contenedor del Comentario -->
            <div class="comment-box">
               <div class="comment-head">
                  <h6 class="comment-name">
                     <a href="http://creaticode.com/blog">Lorena Rojero</a>
                  </h6>
                  <span>hace 10 minutos</span>
                  <i class="fa fa-reply"></i>
                  <i class="fa fa-heart"></i>
               </div>
               <div class="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure
                  laudantium vitae, praesentium optio, sapiente distinctio illo?
               </div>
            </div>
         </div>
      </li>
   </ul>
</template>

<style lang='scss' scoped>
$theme-color: orange;
a {
   color: #03658c;
   text-decoration: none;
}

ul {
   list-style-type: none;
}
.comments-list {
   margin-top: 30px;
   position: relative;
}

/**
* Lineas / Detalles
-----------------------*/
.comments-list:before {
   content: "";
   width: 2px;
   height: 100%;
   background: #eee;
   position: absolute;
   left: 32px;
   top: 0;
}

.comments-list:after {
   content: "";
   position: absolute;
   background: #345723;
   bottom: 0;
   left: 27px;
   width: 7px;
   height: 7px;
   border: 3px solid #eee;
   -webkit-border-radius: 50%;
   -moz-border-radius: 50%;
   border-radius: 50%;
}

.reply-list:before,
.reply-list:after {
   display: none;
}
.reply-list li:before {
   content: "";
   width: 60px;
   height: 2px;
   background: #eee;
   position: absolute;
   top: 25px;
   left: -55px;
}

.comments-list li {
   margin-bottom: 15px;
   display: block;
   position: relative;
}

.comments-list li:after {
   content: "";
   display: block;
   clear: both;
   height: 0;
   width: 0;
}

.reply-list {
   padding-left: 88px;
   clear: both;
   margin-top: 15px;
}
/**
* Avatar
---------------------------*/
.comments-list .comment-avatar {
   width: 65px;
   height: 65px;
   position: relative;
   z-index: 99;
   float: left;
   border: 3px solid #fff;
   -webkit-border-radius: 4px;
   -moz-border-radius: 4px;
   border-radius: 4px;
   -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
   -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
   overflow: hidden;
}

.comments-list .comment-avatar img {
   width: 100%;
   height: 100%;
}

.reply-list .comment-avatar {
   width: 50px;
   height: 50px;
}

.comment-main-level:after {
   content: "";
   width: 0;
   height: 0;
   display: block;
   clear: both;
}
/**
* Caja del Comentario
---------------------------*/
.comments-list .comment-box {
   width: 680px;
   float: right;
   position: relative;
   -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
   -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}

.comments-list .comment-box:before,
.comments-list .comment-box:after {
   content: "";
   height: 0;
   width: 0;
   position: absolute;
   display: block;
   border-width: 10px 12px 10px 0;
   border-style: solid;
   border-color: transparent #fcfcfc;
   top: 8px;
   left: -11px;
}

.comments-list .comment-box:before {
   border-width: 11px 13px 11px 0;
   border-color: transparent rgba(0, 0, 0, 0.05);
   left: -12px;
}

.reply-list .comment-box {
   width: 610px;
}
.comment-box .comment-head {
   background: #fcfcfc;
   padding: 10px 12px;
   border-bottom: 1px solid #e5e5e5;
   overflow: hidden;
   -webkit-border-radius: 4px 4px 0 0;
   -moz-border-radius: 4px 4px 0 0;
   border-radius: 4px 4px 0 0;
}

.comment-box .comment-head i {
   float: right;
   margin-left: 14px;
   position: relative;
   top: 2px;
   color: #a6a6a6;
   cursor: pointer;
   -webkit-transition: color 0.3s ease;
   -o-transition: color 0.3s ease;
   transition: color 0.3s ease;
}

.comment-box .comment-head i:hover {
   color: $theme-color;
}

.comment-box .comment-name {
   color: #283035;
   font-size: 14px;
   font-weight: 700;
   float: left;
   margin-right: 10px;
}

.comment-box .comment-name a {
   color: #283035;
}

.comment-box .comment-head span {
   float: left;
   color: #999;
   font-size: 13px;
   position: relative;
   top: 1px;
}

.comment-box .comment-content {
   background: #fff;
   padding: 12px;
   font-size: 15px;
   color: #595959;
   -webkit-border-radius: 0 0 4px 4px;
   -moz-border-radius: 0 0 4px 4px;
   border-radius: 0 0 4px 4px;
}

.comment-box .comment-name.by-author,
.comment-box .comment-name.by-author a {
   color: $theme-color;
}
.comment-box .comment-name.by-author:after {
   content: "autor";
   background: $theme-color;
   color: #fff;
   font-size: 12px;
   padding: 3px 5px;
   font-weight: 700;
   margin-left: 10px;
   -webkit-border-radius: 3px;
   -moz-border-radius: 3px;
   border-radius: 3px;
}

/** =====================
* Responsive
========================*/
@media only screen and (max-width: 766px) {
   .comments-list .comment-box {
      width: 390px;
   }

   .reply-list .comment-box {
      width: 320px;
   }
}
</style>