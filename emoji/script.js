const emojiInput = document.getElementById("emoji");
const countInput = document.getElementById("count");
const repeatBtn = document.getElementById("repeatBtn");
const copyBtn = document.getElementById("copyBtn");
const outputDiv = document.getElementById("output");

repeatBtn.addEventListener("click", () => {
  const emoji = emojiInput.value;
  const count = parseInt(countInput.value);

  if (!emoji || isNaN(count) || count < 1) {
    outputDiv.textContent = "Adj meg érvényes emojit és számot!";
    return;
  }

  outputDiv.textContent = emoji.repeat(count) + " ";
});

copyBtn.addEventListener("click", () => {
  const text = outputDiv.textContent.trim();

  if (!text) {
    alert("Nincs mit másolni!");
    return;
  }

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => alert("Másolva a vágólapra!"))
      .catch(err => {
        console.error(err);
        alert("Sikertelen másolás!");
      });
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Másolva a vágólapra!");
  }
});
