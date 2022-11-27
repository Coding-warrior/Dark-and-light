const color = ["teal", "purple", "red", " orange", "darkyellow"];
const btn = document.getElementById("btn");

const h1 = document.querySelector("h1");

function changecolor() {
  const color1 = color[Math.floor(Math.random() * color.length)];

  h1.style.color = color1;
}

btn.addEventListener("click", changecolor);
