document.addEventListener("DOMContentLoaded", function() {
    const coinImage = document.getElementById('coin').querySelector('img');
    const button = document.getElementById('htbutton')


htbutton.addEventListener("click", function() {
    coinImage.style.transition = "transform 0.5s ease";
    coinImage.style.transform = "scale(1.2) rotateY(360deg)"

    setTimeout(() => {
        coinImage.style.transform = "scale(1) rotateY(0deg)"
    }, 500)

    setTimeout(() => {
        const sides = ["heads.jpg", "tails.jpg"]
        const randomSide = sides[Math.floor(Math.random() * sides.length)]
        coinImage.src = randomSide; // Kép módosítása
    }, 600)
})
})