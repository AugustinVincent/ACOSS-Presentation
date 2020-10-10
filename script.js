const container = document.querySelector('.container')
const containerPivot = container.querySelector('.pivot')

window.addEventListener('mousemove', (event) =>
{
    const rotateY = (event.clientX -innerWidth*0.5)* 0.2
    containerPivot.style.transform = `rotateY(${rotateY}deg)`
    console.log(event.x)
})
