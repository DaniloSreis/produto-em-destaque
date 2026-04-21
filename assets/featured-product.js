const productImgs = document.querySelectorAll('.featured-product__img');
const selectedImg = document.querySelector('.featured-product__selected-img');
function selectImage(e) {
  productImgs.forEach((img) => img.classList.remove('selected'));

  const img = e.currentTarget;
  img.classList.add('selected');

  selectedImg.srcset = img.srcset;
}
productImgs.forEach((img) => {
  img.addEventListener('click', selectImage);
});

const colors = document.querySelectorAll('.featured-product__color');
const label = document.querySelector('.featured-product__color-name');

const firstColorName = colors[0].dataset.colorName;
label.innerHTML = `<span>${firstColorName}</span>`;

function selectColor(e) {
  colors.forEach((color) => color.classList.remove('selected-color'));

  const color = e.currentTarget;
  color.classList.add('selected-color');

  const colorName = document.querySelector('.featured-product__color-name');
  colorName.innerText = color.dataset.colorName;
}

colors.forEach((color) => color.addEventListener('click', selectColor));
