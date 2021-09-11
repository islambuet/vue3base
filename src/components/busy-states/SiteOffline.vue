<template>    
    <div class="card shadow px-4 py-4">
        <div class="row d-flex align-items-center justify-content-center mb-1">
            <div class="col-8 text-center">
                <img :src="$systemVariables.baseUrl+'theme/images/offline.png'" alt="">
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center mb-2">
            <div class="col-8 text-center">
            <h2>{{$systemFunctions.getLabel('msg_site_offline_title')}}</h2>
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center ">
            <div class="col-8 text-center">
                <h4>{{$systemFunctions.getLabel('msg_site_offline_message')}}</h4>
                <button @click.prevent="reload" class="btn btn-danger">{{$systemFunctions.getLabel('action_refresh')}}</button>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    methods: {
        reload(){
            window.location.reload();
        }
    }
};
</script>

<style  scoped>
.card{
    background: #ffffff;
}
.box {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999;
    }
</style>