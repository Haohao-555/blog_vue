// 状态
export default {
    saveUserInfo(state, userInfo) {
        state.userInfo = userInfo
    },
    saveFanList(state, fanList) {
        state.fansList = fanList
    },
    saveFollowerList(state, followerList) {
        state.followerList = followerList
    },
    saveFansNum(state, fansNum) {
        state.fansNum = fansNum
    },
    saveFollowerNum(state, followerNum) {
        state.followerNum = followerNum
    }
}