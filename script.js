const page = document.querySelector(".page");
const toggle = page.querySelector(".toggle-input");
const toggleIcon = page.querySelector(".toggle-icon");

setCheckedState();

// Set state of checkbox then toggle theme accordingly
function setCheckedState() {
  if (!(localStorage.checked === undefined)) {
    toggle.checked = isTrue(localStorage.getItem("checked"));
    toggleTheme();
  }
}

// Toggle theme based on state of checkbox
function toggleTheme() {
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }
  toggleIconTheme();
  localStorage.setItem("checked", toggle.checked);
}

// Replace icons not able to be targeted by css variables
function toggleIconTheme() {
  if (page.classList.contains("light")) {
    toggleIcon.src = "./images/moon.svg";
  } else {
    toggleIcon.src = "./images/sun.svg";
  }
}

// convert string to boolean
function isTrue(value) {
  return value === "true";
}

// Event listeners
toggle.addEventListener("change", toggleTheme);
