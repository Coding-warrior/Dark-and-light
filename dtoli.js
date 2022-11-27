const toggle = document.querySelector('input[type="checkbox"]');
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

function change() {
  p.textContent = "Moon";
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    change();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

//Event listener
toggle.addEventListener("change", switchTheme);
