const productImgsList = document.querySelector('.featured-product__list');
const selectedImg = document.querySelector('.featured-product__selected-img');

function selectImage(e) {
  const clickedImg = e.target.closest('.featured-product__img');

  if (!clickedImg) return;

  const productImgs = document.querySelectorAll('.featured-product__img');

  productImgs.forEach((img) => img.classList.remove('selected'));

  clickedImg.classList.add('selected');

  selectedImg.srcset = e.target.srcset;
}

productImgsList.addEventListener('click', selectImage);

const productColorsList = document.querySelector('.featured-product__colors');
const colors = document.querySelectorAll('.featured-product__color');
const colorName = colors[0].dataset.colorName;
const label = document.querySelector('.featured-product__color-name');
label.innerHTML = `<span>${colorName}</span>`;

function selectColor(e) {
  const clickedColor = e.target.closest('.featured-product__color');

  if (!clickedColor) return;

  colors.forEach((color) => color.classList.remove('selected-color'));

  clickedColor.classList.add('selected-color');

  label.innerHTML = `<span>${e.target.dataset.colorName}</span>`;
}

productColorsList.addEventListener('click', selectColor);

const warrantiesList = document.querySelector('.featured-product__warranty');
const warranties = document.querySelectorAll(
  '.featured-product__warranty-option',
);

function selectWarranty(e) {
  const clickedWarranty = e.target.closest(
    '.featured-product__warranty-option',
  );
  console.log(clickedWarranty);
  if (!clickedWarranty) return;

  warranties.forEach((warranty) =>
    warranty.classList.remove('selected-warranty'),
  );

  clickedWarranty.classList.add('selected-warranty');
}

warrantiesList.addEventListener('click', selectWarranty);

const plusBtn = document.querySelector('.plus-btn');

function increaseQuanity() {
  const quantityDisplay = document.querySelector(
    '.featured-product__quantity-value',
  );

  let currentNumber = parseInt(quantityDisplay.textContent);

  quantityDisplay.innerText = ++currentNumber;
}

const minusBtn = document.querySelector('.minus-btn');

function decreaseQuantity() {
  const quantityDisplay = document.querySelector(
    '.featured-product__quantity-value',
  );

  let currentNumber = parseInt(quantityDisplay.textContent);

  if (currentNumber === 1) return;

  quantityDisplay.innerText = --currentNumber;
}

plusBtn.addEventListener('click', increaseQuanity);

minusBtn.addEventListener('click', decreaseQuantity);
