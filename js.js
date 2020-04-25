document.querySelectorAll('.grid-item').forEach((griditem) => {
    griditem.addEventListener('click', () => {
        griditem.style.backgroundColor = 'black'
    
    })
    
})

document.querySelectorAll('.grid-item').forEach((griditem) => {
    griditem.addEventListener('mouseover', () => {
        griditem.style.backgroundColor = 'white'
    
    })
    
})




