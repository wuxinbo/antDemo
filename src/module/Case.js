import {caseTableData} from '../mock/api'
/**
 * 数据过滤
 */
function filterData(form){
    if(form.id===undefined&&form.caseSubject===undefined&&form.status===undefined){
        return caseTableData.data 
    }

    let newData =caseTableData.data.filter(item =>{
        if(form.id!==undefined&&form.id!==""){
            if(item.id===form.id){
                return item
            }
            return null
        }else{
            return item
        }
    })
    newData = newData.filter(item=>{
        if(form.caseSubject!==undefined){
            if(item.subject===form.caseSubject){
                return item
            }
            return null
        }else{
            return item
        } 
    }).filter(item=>{
        if(form.status!==undefined){
            if(item.status===form.status){
                return item
            }
            return null;
        }else{
            return item
        }
    })
    return newData
}
// 案件管理
export default {
    namespace: "cases",
    state: {
        columns: caseTableData.column,
        data: caseTableData.data
    },
    effects:{
        *search(state,{put,call}){
            let form=state.data;
            const filterAfterdata =yield call(filterData,form)
            yield put({type:"queryList",data:filterAfterdata})
         }
    },
    reducers: {
        queryList(state,action){
            const tabledata = action.data!==undefined?action.data:state.data
            return {
                columns:caseTableData.column,
                data:tabledata
            }    
        }
    }
}