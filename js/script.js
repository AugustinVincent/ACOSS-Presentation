const container = document.querySelector('.container')
const containerPivot = container.querySelector('.pivot')
const pages = Array.from(document.querySelectorAll('.page'))
let pageNumber = 1
let rotationY = 0
// window.addEventListener('mousemove', (event) =>
// {
//     const rotateY = (event.clientX -innerWidth*0.5)* 0.2
//     containerPivot.style.transform = `rotateY(${rotateY}deg)`
//     console.log(event.x)
// })


window.addEventListener('keydown', (event) =>
{
    console.log(event)
    if(event.key == "ArrowLeft")
    {
        console.log('left')
        if(pageNumber == pages.length)
        {
            pageNumber = 1
            rotationY = 300
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
        }
        else
        {
            pageNumber = pageNumber + 1
            rotationY += 60
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
        }
    }


    if(event.key == "ArrowRight")
    {
        console.log('right')
        if(pageNumber == 1)
        {
            pageNumber = pages.length
            rotationY = 0
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
        }
        else
        {
            pageNumber = pageNumber + 1
            rotationY -= 60
            containerPivot.style.transform = `rotateY(${rotationY}deg) translateZ(-800px)`
        }
    }
})
