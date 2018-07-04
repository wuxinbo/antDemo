
const unReadMsg ={
    key: "unRead",
    title: "未读",
    list:[
        {
            id:12,
            date: "12小时前",
            content: "你有一件案件需要审批"
    }]
}
const ReadMsg ={
    key:"read",
    title: "已读",
    list :[
        {   id:12,
            date: "10分钟前",
            content: "案件号为000123的案件已审批"
        }
    ]
}
export default {
    namespace: 'notice',
    state: {
        notice:[unReadMsg,ReadMsg]
    },
    reducers:{
        queryUnRead(state,action){
            return state;
        },
        queryReadMsg(state){
            return state
        }
     }  
}