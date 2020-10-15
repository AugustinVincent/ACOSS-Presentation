const container = document.querySelector('.container')
const containerPivot = container.querySelector('.pivot')
const pages = Array.from(document.querySelectorAll('.page'))


let pageNumber = 1
let rotationY = 0

setTimeout(() => {
            
    pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(3600px)`
}, 500);
const pagesRotationY = [
    360/11 * 0 , 
    360/11 * 1 , 
    360/11 * 2,
    360/11 * 3,
    360/11 * 4,
    360/11 * 5,
    360/11 * 6,
    360/11 * 7,
    360/11 * 8,
    360/11 * 9,
    360/11 * 10
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
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(3400px)`
            pageNumber =  pages.length
        }
        else
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(3400px)`
            pageNumber -= 1
        }

        rotationY += 360/11
        setTimeout(() => {
            
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-4000px)`
        }, 500);
        setTimeout(() => {
            
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(4000px)`
        }, 1000);
}



const rightChange = () => 
{
    if(pageNumber == pages.length)
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(3400px)`
            pageNumber =  1
        }
        else
        {
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(3400px)`
            pageNumber += 1
        }

        rotationY -= 360/11
        setTimeout(() => {
            
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-4000px)`
        }, 500);

        setTimeout(() => {
            
            pages[pageNumber-1].style.transform = `rotateY(${pagesRotationY[pageNumber - 1]}deg) translateZ(4000px)`
        }, 1000);
}