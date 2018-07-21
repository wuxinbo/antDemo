
//用户的登录状态管理
export default {
    namespace: "login",
    state: {
        isLogin:false,
        currentUser:{}
    },
    effects:{
        *Login(_,{put,call}){

        },
        *logout(_,{put,call}){

        }
    }
}
