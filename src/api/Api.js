import request from '../utils/request'
/**
 * 查询通知消息
 */
export function queryNotice(){
    return request("/api/queryNotice",{method:"get"})
}