<template>    
    <div class="card px-4 py-4">
        <div class="row d-flex align-items-center justify-content-center mb-1">
            <div class="col-8 text-center">
                <img :src="$systemVariables.baseUrl+'theme/images/deny.png'" alt="">
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center mb-2">
            <div class="col-8 text-center">
            <h2>{{$systemFunctions.getLabel('msg_loading_access_deny_title')}}</h2>
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center ">
            <div class="col-8 text-center">
            <h4>{{$systemFunctions.getLabel('msg_access_deny_message')}}</h4>
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
    background: #ffd0d0;
}
</style>