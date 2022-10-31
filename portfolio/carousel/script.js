'user strict';

const slide = document.getElementById('slide');
const upArrowBtn = document.getElementById('upArrow');
const downArrowBtn = document.getElementById('downArrow');

let x = 0;
let visibleHeight = 30; // rem
const slideHeightInPx = slide.offsetHeight;
const slideHeightInRem = slideHeightInPx / 10;
const heightOffSet = -(slideHeightInRem - visibleHeight);

//Scroll Up function
const scrollUp = function () {
  if (x > heightOffSet) {
    x = x - visibleHeight;
    slide.style.top = x + 'rem';
    downArrowBtn.classList.remove('hidden');
    if (x === heightOffSet) {
      upArrowBtn.classList.add('hidden');
    }
  }
};
//Scroll down function
const scrollDown = function () {
  if (x < 0) {
    x = x + visibleHeight;
    slide.style.top = x + 'rem';
    upArrowBtn.classList.remove('hidden');
    if (x === 0) {
      downArrowBtn.classList.add('hidden');
    }
  }
};

upArrowBtn.addEventListener('click', scrollUp);
downArrowBtn.addEventListener('click', scrollDown);
