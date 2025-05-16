document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Köszönöm a visszajelzést!");
  });

  document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Köszönjük a visszajelzésedet!");
    });
  }

  // Betűméret váltó
  const gomb = document.getElementById("betumeretGomb");
  let nagy = false;

  gomb.addEventListener("click", () => {
    document.body.style.fontSize = nagy ? "1rem" : "1.3rem";
    nagy = !nagy;
  });
});
