document.addEventListener("DOMContentLoaded", function() {

    const square = document.getElementById('square')
    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')

    button1.addEventListener('click', function() {
        const curw = parseInt(getComputedStyle(square).width)
        const curh = parseInt(getComputedStyle(square).height)

        square.style.width = (curw + 10) + 'px'
        square.style.height = (curh + 10) + 'px'
    })

    button2.addEventListener('click', function() {
        const curw = parseInt(getComputedStyle(square).width)
        const curh = parseInt(getComputedStyle(square).height)

        square.style.width = (curw - 10) + 'px'
        square.style.height = (curh - 10) + 'px'
    })
}) 