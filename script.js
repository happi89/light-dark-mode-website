const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// dark mode styles
function darkMode() {
  // changing nav bar and textbox background color
  navAndTextboxBackgroundColorSwitch('0 0 0', '255 255 255')

  // calling changeIcon function
  changeIcon('Dark', 'sun', 'moon');

  // calling change image them function
  imageTheme('dark')
}

// light mode styles
function lightMode() {
  // changing nav bar and textbox background color
  navAndTextboxBackgroundColorSwitch('255 255 255', '0 0 0')

    // calling changeIcon function
  changeIcon('Light', 'moon', 'sun');

  // calling change image them function
  imageTheme('light')
}

// change image for theme
function imageTheme(theme) {
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

// change icon for theme
function changeIcon(theme, currentIcon, replacementIcon) {
  toggleIcon.children[0].textContent = `${theme} Mode`;
  toggleIcon.children[1].classList.replace(`fa-${currentIcon}`, `fa-${replacementIcon}`);
}

// change nav and textbox background color
function navAndTextboxBackgroundColorSwitch(navValues, textBoxValues) {
  nav.style.backgroundColor = `rgb(${navValues} / 50%)`;
  textBox.style.backgroundColor = `rgb(${textBoxValues} / 50%)`;
}


// switch theme 
function switchTheme(event) {
  if(event.target.checked) {
    // will enable dark mode
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    // will enable light mode
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

// event listeners
toggleSwitch.addEventListener('change', switchTheme);

// checking local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  // calling darkmode and toggling switch if current theme is true
  if(currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}