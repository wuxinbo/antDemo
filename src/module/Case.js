import {caseTableData} from '../mock/api'
// 案件管理
export default {
    namespace: "cases",
    state: {
        columns: caseTableData.column,
        data: caseTableData.data
    },
    reducers: {
        queryList(state,action){
            return state
        }
    }
}