<script setup lang='ts'>
import { loading } from "./scripts";

</script>
<template>
    <div v-if="loading" class="loading-contain">
        <div class="loading">
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style="enable-background:new 0 0 50 50;"
                xml:space="preserve"
            >
                <rect x="0" y="0" width="4" height="10" fill="#333">
                    <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="translate"
                        values="0 0; 0 20; 0 0"
                        begin="0"
                        dur="0.6s"
                        repeatCount="indefinite"
                    />
                </rect>
                <rect x="10" y="0" width="4" height="10" fill="#333">
                    <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="translate"
                        values="0 0; 0 20; 0 0"
                        begin="0.2s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    />
                </rect>
                <rect x="20" y="0" width="4" height="10" fill="#333">
                    <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="translate"
                        values="0 0; 0 20; 0 0"
                        begin="0.4s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    />
                </rect>
            </svg>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.loading-contain {
    width: 100vw;
    height: 100vh;
    background: rgba($color: #333, $alpha: 0.5);
    opacity: 0.6;
    z-index: 99999;
    top: 0;
    position: fixed;
    .loading {
        margin: 0 auto;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        svg path,
        svg rect {
            fill: #ff6700;
        }
    }
}
</style>