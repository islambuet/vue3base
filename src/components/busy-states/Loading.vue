<template>    
    <div class="box">
        <div class="d-flex align-items-center justify-content-center">
            <img :src="$systemFunctions.baseUrl+'theme/images/loading.svg'" alt="">
        </div>
    </div>    
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #808080ad;
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999;
    }

    .box div {
        width: 190px;
        height: 100px;
        background: white;
        border-radius: 8px;
    }
</style>