<template>
    <div class="fansList col-lg-12">
        <h3>粉丝 ({{fansNum}})</h3>
        <div class="fan col-lg-4" v-for="(item, index) of fansList" :key="index">
            <div class="fan_item ">
                <img :src="item.touxiang" alt="">
                <span>{{item.nickName}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "fans",
    props: {
        fansList: Array,
        fansNum: Number,
    }
}
</script>
<style lang="scss">
    .fansList {
        padding-top: 2px;
        border-bottom: 1px solid #007bff;
        h3 {
            background:url("/img/fans.png") no-repeat;
            background-position: center left;
            background-size: 26px;
            font-size: 16px;
            font-weight: bold;
            padding-bottom: 16px;
            padding-left: 30px;
            padding-top: 13px;
        }
        .fan {
           img {
              width: 50px;
              height: 50px;
           } 
           span {
               display: block;
               text-align: center;
               padding-bottom: 10px;
               cursor: pointer;
           }
        }
    }
</style>