const createTree=(arr,parentid='')=>{
    const tree=[];
    arr.forEach((item) => {
        if(item.parent_id==parentid){
          const newParent=item
          const children=createTree(arr,item.id);
          if(children.length>0){
            newParent.children=children
          }
          tree.push(newParent);
        }
    });
    return tree
}
module.exports=createTree