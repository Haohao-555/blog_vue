<template>
    <div class="fansList col-md-12 col-sm-12 col-xs-12">
        <h3>粉丝 ({{fansNum}})</h3>
        <div class="fan col-md-3 col-sm-4 col-xs-6" v-for="(item, index) of fansList" :key="index">
                <img :src="item.touxiang">
                <span @click="profile(index)">{{item.nickName}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "fans",
    props: {
        fansList: Array,
        fansNum: Number,
    },
    methods: {
        profile(index) {
            this.$emit('profile',this.fansList[index].userName) 
        }
    },
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
            padding-left: 0px;
           img {
              width: 100%;
              height: 100%;
           } 
           span {
               display: block;
               text-align: center;
               padding-bottom: 10px;
               padding-top: 6px;
               cursor: pointer;
               font-size: 14px; 
           }
        }
    }
</style>