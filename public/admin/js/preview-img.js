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

