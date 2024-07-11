
module.exports=(pagination,query,totalProducts)=>{
    if(isNaN(query.page)==false){pagination.currentPage=parseInt(query.page)}
    else{pagination.currentPage=1}

    pagination.totalPage= Math.ceil(totalProducts/pagination.limitItem)
    pagination.skip=(pagination.currentPage-1)*pagination.limitItem
    return pagination
}