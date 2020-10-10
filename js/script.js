const container = document.querySelector('.container')
const containerPivot = container.querySelector('.pivot')
const pages = Array.from(document.querySelectorAll('.page'))
let pageNumber = 1
let rotationY = 0

const pagesRotationY = [
     0  , 
     -60  ,
    -120  ,
    -180  ,
    -240  ,
    -300  ,
]

window.addEventListener('keydown', (event) =>
{
    console.log(event)
    console.log(pageNumber)
    if(event.key == "ArrowLeft")
    {
        console.log('left')
        if(pageNumber == pages.length)
            pageNumber =  1
        else
            pageNumber += 1

        rotationY += 60
        console.log(pagesRotationY[pageNumber - 1])
        containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
    }


    if(event.key == "ArrowRight")
    {
        console.log('right')
        if(pageNumber == 1)
            pageNumber =  pages.length
        else
            pageNumber -= 1

        rotationY -= 60
        containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
    }
})
