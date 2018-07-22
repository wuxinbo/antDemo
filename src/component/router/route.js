
import { Router, Switch, Route, Redirect } from 'dva/router'
import React, { Component } from 'react';
import menu from '../menu/Menu'
import app from "../../index"
import dynamic from "dva/dynamic"
/**
 * 子路由
 */
class SubRoute extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    {   menu.map (parent =>{
                        return parent.children.map(item =>{
                            return <Route  key={item.key} exact path={parent.path+item.path} component={item.component} />
                        }
                        )
                    })
                    }
                    <Redirect from ={menu[0].path} to={menu[0].path+menu[0].children[0].path} />
                </Switch>
            </Router>
        )
    }
}
/**
 * 包装componnent,主要是延迟加载modles
 */
const wrapperComponnet=(app,models,component)=>{
    //判断是否有传入models
    if(models.length>0){
        //动态加载modles
        return dynamic({
            app,
            models: ()=>  models.filter( modle=>!modelIsRegisted(app,modle)).map(m=> import(`../../module/${m}.js`)),
            component: ()=>component
        })
    }else {
        return dynamic({
            app,
            component: ()=>component
        })
    }
}

/**
 * 判断model是否已经注册到dva上,true 表示已经注册，false 没有注册
 */
const modelIsRegisted=(app,model)=>
         app._models.some((m)=> 
           m.namespace===model
         )

export {SubRoute,wrapperComponnet };
