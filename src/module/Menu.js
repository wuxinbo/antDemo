import menu from '../component/menu/Menu'
export default {
    namespace: "menu",
    state: {
        secondMenu:menu[0],
        fullPath: [menu[0].name,menu[0].children[0].name]
    },
    reducers:{
        firstMenuClick (state,{menu:item}){
            return {secondMenu:item};
        }  
    }

}