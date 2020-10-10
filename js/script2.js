const pageContent = document.querySelector('.pageContent')
const loader = document.querySelector('.loader')

window.setTimeout(()=>{
    loader.style.display = "none"
    pageContent.style.display = "block"
},2100)