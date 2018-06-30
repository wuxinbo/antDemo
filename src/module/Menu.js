import menu from '../component/menu/Menu'
import {history} from '../component/router/route'
export default {
    namespace: "menu",
    state: {
        secondMenu:menu[0],
        path: ""
    },
    reducers:{
        firstMenuClick (state,{menu:item}){
            return {secondMenu:item};
        },
        secondMenuClick (state,{path}){
            // console.log("path is "+path)
            history.push(path)
            return {path};
        }
    }

}