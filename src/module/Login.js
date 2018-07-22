import {userInfo} from "../mock/api"
//用户的登录状态管理
export default {
    namespace: "login",
    state: {
        isLogin:false,
        placeholderUserName:"",
        placeholderPwd: "",
        currentUser:{}
    },
    effects:{
        *Login(_,{put,call}){

        },
        *logout(_,{put,call}){

        }
    },
    reducers:{
        // 生成登陆框中的placeholder
        init:(state,action)=>{
            let placeholderUserName ="";
            let placeholderPwd ="";
            userInfo.map(user=>{
                placeholderUserName+=user.username+"\\"
                placeholderPwd+=user.password+"\\";
            })

            return {
                isLogin: state.isLogin,
                placeholderPwd:placeholderPwd.substring(0,placeholderPwd.length-1),
                placeholderUserName:placeholderUserName.substring(0,placeholderUserName.length-1),
                currentUser:state.currentUser
            }
            // placeholderPwd.
        }
    }
}
