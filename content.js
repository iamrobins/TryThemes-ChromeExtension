chrome.runtime.onMessage.addListener(function ({background, color}) {
  changeColor(background, color);
});

function changeColor(background, color) {

const body = document.body.querySelectorAll("*");

for (let i = 0; i < body.length; i++) {
  const getCSS = window.getComputedStyle(body[i]).getPropertyValue("background-color");
  if (getCSS.includes('rgb')) {
    body[i].style.backgroundColor = background;
    body[i].style.color = color;
  }
}
document.body.style.backgroundColor = background;
document.body.style.color = color;
}
