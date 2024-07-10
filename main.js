const elements = document.getElementsByClassName('section-1__right-side');

const element = elements[0];

const color = element.style.backgroundColor;

setTimeout(() => {
  element.style.backgroundColor = 'blue';
}, 10000);

setTimeout(() => {
  element.style.backgroundColor = color;
}, 20000);
