module.exports=(query)=>{
    const objSearch={
        keyword:""
        }  
    if(query.keyword){
        objSearch.keyword=query.keyword
        const regex=new RegExp(objSearch.keyword,"i")
        objSearch.regex=regex
    }
    return objSearch
}