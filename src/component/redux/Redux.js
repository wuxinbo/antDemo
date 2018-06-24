/**
 * redux 起点
 */
import { createStore } from 'redux';
// import { connect } from 'react-redux'
// 主菜单
const MENU_ACTION_TYPE = 'MENU'
//左侧表单
const SLIDE_MENU='slideMenu'
function reducer(state, action) {

    switch (action.type) {
        case MENU_ACTION_TYPE:  //菜单变换
            return action.menu
        case SLIDE_MENU :
            console.log("SlideMenu is "+action.type)
            return action.type    
        default:
            return state;
    }

}
export const mapStateToProps = (state, ownProps) => {
    return {
        menu: state.menu
    }
}
export const mapDispatchToProps = dispatch => {
    return {
        handleMenuClick: function (item) {
            dispatch({ type: MENU_ACTION_TYPE, menu: item })
        }
    }
}
const StateStore = createStore(reducer)
// connect (mapStateToProps,mapDispatchToProps)()
export { StateStore, MENU_ACTION_TYPE,SLIDE_MENU };
