  import constant from '../conf/constant'
/**
 * 格式化内容信息
 * @param {Object} obj 
 */
 function formatContent(obj) {
 
    obj.contentFormat = obj.content
   // 去标签
   obj.contentFormat =	obj.contentFormat.replace(constant.PATTERN, "")
    obj.contentFormat = obj.contentFormat.replace(
       constant.REG_FOR_AT_WHO,
        (matchStr, nickName, userName) => {
             return `<a>@${nickName} - ${userName}</a>`
           
        }
    )

    return obj
}
export default formatContent
