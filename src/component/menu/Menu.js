
import { history } from '../router/route'
const menu =
    [
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
export default menu;