export default {
    // 保存用户账号
    saveUserInfo(context, userInfo) {
        context.commit('saveUserInfo',userInfo)
    },
    saveFanList(context, fanList) {
        context.commit('saveFanList', fanList)
    },
    saveFollowerList(context, followerList) {
        context.commit('saveFollowerList', followerList)
    },
    saveFansNum(context, fansNum) {
        context.commit('saveFansNum', fansNum)
    },
    saveFollowerNum(context, followerNum) {
        context.commit('saveFollowerNum', followerNum)
    },
}