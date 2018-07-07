//通知消息
export const noticeData = {
    notice: [
        {
            key: "unRead",
            title: "未读",
            tab: "",
            list: [
                {
                    id: 12,
                    date: "12小时前",
                    content: "你有一件案件需要审批"
                }],
            footer: {
                title: "清空消息"
            }
        },
        {
            key: "read",
            title: "已读",
            tab:"",
            list: [
                {
                    id: 12,
                    date: "10分钟前",
                    content: "案件号为000123的案件已审批"
                }
            ]
        }
    ],
    loading:false,
    count:0
}
//案件列表
export const caseTableData={
    column:[
        {
            title: "案件号",
            dataIndex: "id",
            sorter: (a,b)=> a.id-b.id
        },
        {
            title: "案件名字",
            dataIndex: "name",
        },
        {
            title: "状态",
            dataIndex:"status",
        },
        {
            title: "案件描述",
            dataIndex: "describtion",
        },
        {
            title:"分类",
            dataIndex:"subject",
        },
        {
            title:"立案时间",
            dataIndex:"createTime",
            sorter: (a,b)=> a.createTime.localeCompare(b.createTime)
        }, 
    ],
    data:[
        {
            key:"1",
            name:"案件1",
            id:"00001",
            status: "新建",
            describtion:"这是案件描述",
            createTime : "2018-07-06 14:34:23",
            subject: "市政设施管理" 
        },
        {
            key:"2",
            name:"案件2",
            id:"00003",
            status:"审批",
            describtion:"这是案件描述", 
            createTime : "2018-07-06 14:34:23",
            subject: "环境卫生管理" 
        },
        {
            key:"3",
            name:"案件2",
            id:"00005",
            status:"审批",
            describtion:"这是案件描述", 
            createTime : "2018-07-06 14:34:23",
            subject: "废弃物管理" 
        },
        {
            key:"4",
            name:"案件2",
            id:"00004",
            status:"结案",
            describtion:"这是案件描述", 
            createTime : "2018-02-06 14:24:23",
            subject: "环境卫生管理" 
        },
        {
            key:"5",
            name:"案件5",
            id:"00005",
            status:"审批",
            describtion:"这是案件描述", 
            createTime : "2018-05-06 14:34:23",
            subject: "废弃物管理" 
        },
        {
            key:"6",
            name:"案件6",
            id:"00006",
            status:"审批",
            describtion:"这是案件描述", 
            createTime : "2018-07-05 14:34:23",
            subject: "市政设施管理" 
        },
        {
            key:"7",
            name:"案件7",
            id:"00007",
            status:"立案",
            describtion:"这是案件描述", 
            createTime : "2018-07-02 14:34:23",
            subject: "市政设施管理" 
        }
    ]
}