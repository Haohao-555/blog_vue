<template>
   <div class="followerList col-md-12 col-sm-12 col-xs-12">
        <h3>关注 ({{followerNum}})</h3>
        <div class="follower col-md-3 col-sm-4 col-xs-6" v-for="(item, index) of followerList" :key="index">
                <img :src="item.touxiang" alt="">
                <span @click="profile(index)">{{item.nickName}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "follower",
    props: {
        followerList: Array,
        followerNum: Number,
    },
     methods: {
        profile(index) {
            this.$emit('profile',this.fansList[index].userName) 
        }
    },
}
</script>
<style lang="scss">
    .followerList {
        padding-top: 2px;
        border-bottom: 1px solid #007bff;
        h3 {
            background:url("/img/follower.png") no-repeat;
            background-position: center left;
            background-size: 26px;
            font-size: 16px;
            font-weight: bold;
            padding-bottom: 16px;
            padding-left: 30px;
            padding-top: 13px;
        }
        .follower {
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