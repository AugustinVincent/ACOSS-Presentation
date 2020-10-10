const container = document.querySelector('.container')
const containerPivot = container.querySelector('.pivot')
const pages = Array.from(document.querySelectorAll('.page'))


let pageNumber = 1
let rotationY = 0

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
    {
        if(pageNumber == 1)
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(1100px)`
            pageNumber =  pages.length
        }
        else
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(1100px)`
            pageNumber -= 1
        }

        rotationY += 45
        setTimeout(() => {
            
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
        }, 500);
        setTimeout(() => {
            
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(1600px)`
        }, 1000);
    }


    if(event.key == "ArrowRight")
    {
        if(pageNumber == pages.length)
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(1100px)`
            pageNumber =  1
        }
        else
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(1100px)`
            pageNumber += 1
        }

        rotationY -= 45
        setTimeout(() => {
            
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
        }, 500);

        setTimeout(() => {
            
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(1600px)`
        }, 1000);
    }
    console.log(pageNumber)

})
