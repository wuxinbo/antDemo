
import { history } from '../router/route'
const menu =
    [
        {
            key: "in",
            name: "入库",
            order: 1,
            click: function () { },
            children: [
                {
                    key: "statics",
                    name: "统计信息",
                    url: "",
                    icon: "area-chart",
                    click: function () {
                        history.push("/")
                    },
                    children: [
                    ]
                },
                {
                    key: "screen",
                    name: "大屏幕",
                    url: "desktop",
                    icon: "desktop",
                    click: function () {
                        console.log("click")
                        history.push("/screen")
                    },
                    children: []
                }

            ]
        },
        {
            key: "out",
            name: "出库",
            order: 2,
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