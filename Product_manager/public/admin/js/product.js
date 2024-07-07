//change-status
const buttonChange=document.querySelectorAll('[button-change-status]')
if(buttonChange.length>0){
    const formChangeStatus=document.querySelector('#form-change-status')
    let path=formChangeStatus.getAttribute("data-path")

    buttonChange.forEach(button=>{
        button.addEventListener("click",()=>{
            const changeStatus= button.getAttribute("data-status")
            const changeid= button.getAttribute("data-id")

            const currentStatus=changeStatus=="active"?"inactive":"active"

            formChangeStatus.action=path+`/${currentStatus}/${changeid}?_method=PATCH`     
            formChangeStatus.submit()    
        })
    })
}
//end Change Status

//Check box
const checkBoxAll=document.querySelector('input[name="check-all"]')
const checkBoxMulti=document.querySelectorAll('input[name="check-multi"]')
checkBoxAll.addEventListener("click",()=>{
    if(checkBoxAll.checked){
        checkBoxMulti.forEach((box)=>{
            box.checked=true
        })
    }else{
        checkBoxMulti.forEach((box)=>{
            box.checked=false
        })
    }
})
checkBoxMulti.forEach(box=>{
    box.addEventListener("click",()=>{
        const countCheckBox=document.querySelectorAll('input[name="check-multi"]:checked').length
        if(countCheckBox==checkBoxMulti.length){
            checkBoxAll.checked=true
        }else{
            checkBoxAll.checked=false
        }
    })

})
//End Check box
// Change multi status
const formChangeMulti=document.querySelector('[form-change-multi]')
if(formChangeMulti){
    formChangeMulti.addEventListener("submit",(e)=>{
        e.preventDefault()
        const inputId=document.querySelector('input[name="ids"]')

        //xoa item
        const typeChange=e.target.elements.status.value
        if(typeChange=="delete-all"){
            const isConfirm=confirm("Ban co chac khong? ")
            if(!isConfirm){
                return;
            }
        }
        // end xoa item
        const checkedItem=document.querySelectorAll('input[name="check-multi"]:checked')
        const ids=[]
        checkedItem.forEach(item=>{
            const id =item.value
            if(typeChange=="change-position"){
                const position=item.closest("tr").querySelector('input[name="position"]').value
                ids.push(`${id}-${position}`)
            }else{

            ids.push(id)
            }
        })
        inputId.value=ids.join(",")
        formChangeMulti.submit()
    })
}

// end Change multi status

// Delete one Item

const deleteItem=document.querySelectorAll("[delete-item]")
const formDelete=document.querySelector('#delete-item')
deleteItem.forEach(item=>{
    item.addEventListener("click",()=>{
        const isConfirm=confirm("Ban co chac chan muon xoa khong ?")
        if(isConfirm){
            const deleteId=item.value
            const action=formDelete.getAttribute("data-path")+`/${deleteId}?_method=DELETE`
            formDelete.action=action    
            formDelete.submit()
        }
    })
})

// End Delete Item

// Show alert
const alerts=document.querySelector("[show-alert]")
const datatime=alerts.getAttribute("time")
const closeAlert=document.querySelector("[close-alert]")

if(alerts){
    setTimeout(() => {
        alerts.classList.add("alert-hidden")
    },datatime);
    closeAlert.addEventListener("click",()=>{
        alerts.classList.add("alert-hidden")
    })

}
// end Show alert