module.exports=(query)=>{
    // noi dung button
    const filterStatus=[
        {
        name:"Tat ca",
        status:'',
        class:""
        },
        {
        name:"Hoat dong",
        status:'active',
        class:""
        },
        {
        name:"Dung hoat dong",
        status:'inactive',
        class:""
        }
    ]

    // Loc theo trang thai khi nhan button khi co href trung voi trang thai va add class "active"
    if(query.status){
            const index=filterStatus.findIndex((item)=> item.status==query.status)
            filterStatus[index].class="active"
    }else{
            const index=filterStatus.findIndex((item)=> item.status=="")
            filterStatus[index].class="active"
    }   
    return filterStatus; 

}