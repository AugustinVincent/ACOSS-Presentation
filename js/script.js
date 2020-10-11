const container = document.querySelector('.container')
const containerPivot = container.querySelector('.pivot')
const pages = Array.from(document.querySelectorAll('.page'))


let pageNumber = 1
let rotationY = 0

setTimeout(() => {
            
    pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(3600px)`
}, 500);
const pagesRotationY = [
    0 , 
    45  , 
    90  ,
    135  ,
    180  ,
    225  ,
    270  ,
    315
]

window.addEventListener('keydown', (event) =>
{
    
    if(event.key == "ArrowLeft")
        leftChange()


    if(event.key == "ArrowRight")
        rightChange()

})

window.addEventListener('click', (event) =>
{
    if(event.x > window.innerWidth/2)
        rightChange()

        
    if(event.x < window.innerWidth/2)
        leftChange()
})



const leftChange = () =>
{
    if(pageNumber == 1)
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(2400px)`
            pageNumber =  pages.length
        }
        else
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(2400px)`
            pageNumber -= 1
        }

        rotationY += 45
        setTimeout(() => {
            
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-3600px)`
        }, 500);
        setTimeout(() => {
            
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(3600px)`
        }, 1000);
}



const rightChange = () => 
{
    if(pageNumber == pages.length)
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(2400px)`
            pageNumber =  1
        }
        else
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(2400px)`
            pageNumber += 1
        }

        rotationY -= 45
        setTimeout(() => {
            
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-3600px)`
        }, 500);

        setTimeout(() => {
            
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(3600px)`
        }, 1000);
}