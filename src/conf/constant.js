const constant = {
    // 获取 cookie 值
    COOKIE: 'weibo.sid',
    SESSION: 'weibo.sid.sig',
    // 正则表达式
    REG_FOR_AT_WHO: /@(.+?)\s-\s(\w+?)\b/g,
    PATTERN: /<[^>]+>/g,
}

export default constant