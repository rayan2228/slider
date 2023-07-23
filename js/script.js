const sliderChildElm = Array.from(document.querySelectorAll(".slider_child"));
const prevElm = document.querySelector(".prev");
const nextElm = document.querySelector(".next");
let count = 0;
sliderChildElm.map((child, index) => {
  child.style.left = `${index * 100}%`;
});
prevElm.addEventListener("click", getPrev);
nextElm.addEventListener("click", getNext);
function getPrev() {
  if (count > 0) {
    count--;
    slideImg();
  }
}
function getNext() {
  if (count < sliderChildElm.length - 1) {
    count++;
    slideImg();
  }
}
function slideImg() {
  sliderChildElm.map((child) => {
    child.style.transform = `translateX(-${count * 100}%)`;
    child.style.transition = ".4s";
  });
}
