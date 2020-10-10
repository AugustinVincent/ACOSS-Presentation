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
            // pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(800px)`
            pageNumber =  pages.length
        }
        else
        {
            // pages[pageNumber].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(800px)`
            pageNumber -= 1
        }

        rotationY += 45
        containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
        pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(1600px)`
    }


    if(event.key == "ArrowRight")
    {
        if(pageNumber == pages.length)
        {
            // pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(800px)`
            pageNumber =  1
        }
        else
        {
            // pages[pageNumber-2].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(800px)`
            pageNumber += 1
        }

        rotationY -= 45
        containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
        pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(1600px)`
    }
    console.log(pageNumber)

})
