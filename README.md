# Light and dark mode website

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- Be able to toggle light and dark mode
- Background colors will change 
- Sun and Moon icons will change as well as text
- The users preferred theme will be stored in local storage

### Screenshot

![Screenshot from 2022-06-12 00-06-48](https://user-images.githubusercontent.com/101960666/173213968-afea93fa-aebc-401c-b8e3-adb6c22371c1.png)
pg)
![Screenshot from 2022-06-12 00-06-53](https://user-images.githubusercontent.com/101960666/173213972-82604e6e-384d-4332-9d85-07c71244c489.png)

### Links

- Live Site URL: [Live Site](https://happi89.github.io/light-dark-mode-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Local Storage

### What I learned

```js
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
```
