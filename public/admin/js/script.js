const buttonStatus=document.querySelectorAll('[button-status]')
// click button lay ra url 
if(buttonStatus.length>0){
    const url =new URL(window.location.href)
    // console.log(url)
    buttonStatus.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            const status=btn.getAttribute("button-status")
            if(status){
                url.searchParams.set("status",status)
            }else{
                url.searchParams.delete("status")
            }
            window.location.href=url.href
        })
        })}

// Search form submit
const formSearch=document.querySelector("#form-search")
if(formSearch){
    const url =new URL(window.location.href)
    formSearch.addEventListener("submit",(even) => {
    even.preventDefault();
    console.log(even)
    const key =even.target.elements.keyword.value;
    
    if(key){
        url.searchParams.set("keyword",key)
    }else{
        url.searchParams.delete("keyword")
    }
    window.location.href=url.href
})

}

const buttonPagination=document.querySelectorAll('.page-link')
// click button lay ra url 
if(buttonPagination.length>0){
    const url =new URL(window.location.href)
    // console.log(url)
    buttonPagination.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            const page=btn.getAttribute('number-page')
            if(page){
                url.searchParams.set("page",page)
            }else{
                url.searchParams.delete("page")
            }
            window.location.href=url.href
        })
        })}


// Preview img
const previewInputFile=document.querySelector("[preview-input-file]")
const previewInputImg=document.querySelector("[preview-input-img]")
if(previewInputFile){
    previewInputFile.addEventListener("change",(e)=>{
        const file=e.target.files[0]
        if(file){
            previewInputImg.src = URL.createObjectURL(file)
        }
        const imageContainer=document.querySelector(".image-container")
        imageContainer.classList.remove("d-none")
        
    })
}
//End  Preview img
// close img
const closeImg=document.querySelector(".close-img")
closeImg.addEventListener("click",()=>{
    previewInputImg.src=""
    previewInputFile.value=""
    const imageContainer=document.querySelector(".image-container")
    imageContainer.classList.add("d-none")
})
//end close img