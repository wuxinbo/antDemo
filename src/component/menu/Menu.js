import {statis} from '../statics/Content'
import {screen} from '../screen/Content'
import {outContent} from '../out/Content'
const menu =
    [
        {
            key: "in",
            name: "入库",
            order: 1,
            click: function () { },
            path:"/in",
            children: [
                {
                    key: "statics",
                    name: "统计信息",
                    path: "/index",
                    component: statis,
                    icon: "area-chart",
                    children: [
                    ]
                },
                {
                    key: "screen",
                    name: "大屏幕",
                    path: "/screen",
                    component: screen,
                    icon: "desktop",
                    children: []
                }

            ]
        },
        {
            key: "out",
            name: "出库",
            order: 2,
            path: "/out",
            children :[
                {
                    key: "subOut",
                    name: "出库列表",
                    path: "/list",
                    component :outContent,
                    children:[]
                }
            ]
        },
        {
            key:"systemManage",
            name:"系统管理",
            order: 3,
            path: '/systemManage',
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
            path: '/statictis',
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