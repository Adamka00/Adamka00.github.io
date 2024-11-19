document.addEventListener("DOMContentLoaded", function() {
    const square = document.getElementById('square')
    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    const resetbutton = document.getElementById('resetbutton')

    button1.addEventListener('click', function() {
        square.style.backgroundColor = 'blue'
    })

    button2.addEventListener('click', function() {
        square.style.backgroundColor = 'red'
    })

    resetbutton.addEventListener('click', function() {
        square.style.backgroundColor = 'gray'
    })
})