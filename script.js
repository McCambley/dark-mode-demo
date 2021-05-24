const page = document.querySelector('.page');
const headerLogo = page.querySelector('.logo__image');
const overlayLogo = page.querySelector('.page__loading-logo');
const toggle = page.querySelector('.header__toggle-input');
const toggleIcon = page.querySelector('.header__toggle-icon');

setCheckedState();

// Set state of checkbox then toggle theme accordingly
function setCheckedState() {
  if (!(localStorage.checked === undefined)) {
    toggle.checked = isTrue(localStorage.getItem('checked'));
    toggleTheme();
  }
}

// Toggle theme based on state of checkbox
function toggleTheme() {
  if (toggle.checked) {
    page.classList.replace('page_theme_light', 'page_theme_dark');
  } else {
    page.classList.replace('page_theme_dark', 'page_theme_light');
  }
  toggleIconTheme();
  localStorage.setItem('checked', toggle.checked);
}

// Replace icons not able to be targeted by css variables
function toggleIconTheme() {
  if (page.classList.contains('page_theme_light')) {
    headerLogo.src = '/images/logo-new-nobrdr-dark.svg';
    toggleIcon.src = '/images/page-icons/moon.svg';
    overlayLogo.style.backgroundImage = 'url(/images/logo-new-nobrdr-dark.svg)';
  } else {
    headerLogo.src = '/images/logo-new-nobrdr.svg';
    toggleIcon.src = '/images/page-icons/sun.svg';
    overlayLogo.style.backgroundImage = 'url(/images/logo-new-nobrdr.svg)';
  }
}

// convert string to boolean
function isTrue(value) {
  return value === 'true';
}

// Event listeners
toggle.addEventListener('change', toggleTheme);
