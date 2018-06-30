
import { history } from '../router/route'
import {statis} from '../statics/Content'
import {screen} from '../screen/Content'
const menu =
    [
        {
            key: "in",
            name: "入库",
            order: 1,
            click: function () { },
            path:"/",
            children: [
                {
                    key: "statics",
                    name: "统计信息",
                    path: "/index",
                    component: statis,
                    icon: "area-chart",
                    click: function ({ key, domEvent }) {
                        history.push(this.path)
                    },
                    children: [
                    ]
                },
                {
                    key: "screen",
                    name: "大屏幕",
                    path: "/screen",
                    component: screen,
                    icon: "desktop",
                    click: function () {
                        history.push(this.path)
                    },
                    children: []
                }

            ]
        },
        {
            key: "out",
            name: "出库",
            order: 2,
            path: "",
            children :[
                {
                    key: "subOut",
                    name: "出库统计",
                    click: function(){

                    },
                    children:[]
                }
            ]
        },
        {
            key:"systemManage",
            name:"系统管理",
            order: 3,
            path: '',
             children :[
                {
                    key: "userManage",
                    name: "用户管理",
                    click: function(){

                    },
                    children:[]
                }
            ]
        },
        {
            key:"statictis",
            name:"统计",
            order: 4,
            path: '',
            children :[
                {
                    key: "statictis",
                    name: "统计",
                    click: function(){

                    },
                    children:[]
                }
            ]

        }
       ]
export default menu;