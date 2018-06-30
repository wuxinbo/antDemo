import menu from '../component/menu/Menu'
export default {
    namespace: "menu",
    state: menu[0],
    reducers:{
        firstMenuClick (state,{menu:item}){
            return item;
        }
    }

}