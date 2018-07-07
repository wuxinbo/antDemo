import {statis} from '../statics/Content'
import CaseList from "../caseManage/list"
import {outContent} from '../out/Content'
const menu =
    [
        {
            key: "in",
            name: "首页",
            order: 1,
            click: function () { },
            path:"/in",
            children: [
                {
                    key: "statics",
                    name: "仪表盘",
                    path: "/index",
                    component: statis,
                    icon: "area-chart",
                    children: [
                    ]
                }
            ]
        },
        {
            key: "out",
            name: "案件管理",
            order: 2,
            path: "/out",
            children :[
                {
                    key: "subOut",
                    name: "案件列表",
                    path: "/list",
                    component :CaseList,
                    children:[]
                },
                {
                    key: "subjectManage",
                    name: "案件类别管理",
                    path: "/subjectManage",
                    component :outContent,
                    children:[]
                }, 
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