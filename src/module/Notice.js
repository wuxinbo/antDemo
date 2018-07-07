import { queryNotice } from "../api/Api";
import {noticeData} from '../mock/api'
export default {
    namespace: 'notice',
    state: noticeData,
    effects:{
        * queryNotice(action,{call,put}){
            console.log("开始查询")
            console.log("action is "+JSON.stringify(action))
            yield put({type:"showLoading"})
            // yield call(setTimeout(() => {
                queryNotice()
            // }, 2000));
            yield put({type:"queryUnNotice",data:noticeData})
        }
    },
    reducers:{
        showLoading (state,action){
            return {
                notice: state.notice,
                loading:true,
                count:state.coune 
            }
        },
        queryUnNotice(state,action){
            //计算 总的消息数
            let totalCount = 0;

            let newState ={};
            newState =Object.assign(action.data,newState);
            console.log("msg.title"+action.data.notice[0].title)
            newState.notice.map( msg=>
                 {
                    msg.tab=msg.title+"("+msg.list.length+")"
                    totalCount+=msg.list.length
                    return msg;
                 }
            )
            return {
                notice: newState.notice,
                loading:false,
                count:totalCount
            };
        }
     }  
}