// submit data permisison
const tablePermission=document.querySelector('[table-permission]')
if(tablePermission){
    const buttonSubmit=document.querySelector('[button-submit]')
    buttonSubmit.addEventListener("click",()=>{
        const permissions=[]
        const name=tablePermission.querySelectorAll('[data-name]')
        name.forEach(item=>{
            const dataname=item.getAttribute("data-name")
            const inputs=item.querySelectorAll("input")
            if(dataname=="id"){
                inputs.forEach(input=>{
                    const id=input.value
                    permissions.push({
                        id:id,
                        permission:[]
                    })
                })
             
            }else{
                inputs.forEach((input,index)=>{
                    const checked=input.checked
                    if(checked){
                        permissions[index].permission.push(dataname)
                    }
                })
            }
        })
        const formPermission=document.querySelector('#form-role-permission')
        const inputPermission=formPermission.querySelector('[name="permission"]')
        inputPermission.value=JSON.stringify(permissions)
        formPermission.submit()
    })
}
// End submit data
// checked input permission
const datas=document.querySelector('[name="data-permission"]')
if(datas){
    const dataPermission=JSON.parse(datas.getAttribute("value"))
    dataPermission.forEach((data,index)=>{
        const permisison=data.permissions
        permisison.forEach((item)=>{
            const row=tablePermission.querySelector(`[data-name='${item}']`)
            const input=row.querySelectorAll('input')[index]
            input.checked=true
        })
    })
}
//end  checked input permission