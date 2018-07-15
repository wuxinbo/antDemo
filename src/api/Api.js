import request from '../utils/request'
/**
 * 查询通知消息
 */
export function queryNotice(){
    return request("/api/queryNotice",{method:"get"})
}
export function queryCaseList(){
    return request("https://www.easy-mock.com/mock/5b3f631818892e144d79f972/example/mock")
}