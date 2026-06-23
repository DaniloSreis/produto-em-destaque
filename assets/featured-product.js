function initFeaturedProduct() {
  const productImgsList = document.querySelector('.featured-product__list');
  const productColorsList = document.querySelector('.featured-product__colors');
  const warrantiesList = document.querySelector('.featured-product__warranty');
  const plusBtn = document.querySelector('.plus-btn');
  const minusBtn = document.querySelector('.minus-btn');

  const colors = document.querySelectorAll('.featured-product__color');
  const label = document.querySelector('.featured-product__color-name');

  if (colors.length > 0 && label) {
    const colorName = colors[0].dataset.colorName;
    label.innerHTML = `<span>${colorName}</span>`;
  }

  if (productImgsList) {
    productImgsList.addEventListener('click', selectImage);
  }

  if (productColorsList) {
    productColorsList.addEventListener('click', selectColor);
  }

  if (warrantiesList) {
    warrantiesList.addEventListener('click', selectWarranty);
  }

  if (plusBtn && minusBtn) {
    plusBtn.addEventListener('click', increaseQuanity);
    minusBtn.addEventListener('click', decreaseQuantity);
  }
}

function selectImage(e) {
  const selectedImg = document.querySelector('.featured-product__selected-img');
  const clickedImg = e.target.closest('.featured-product__img');

  if (!clickedImg) return;

  const productImgs = document.querySelectorAll('.featured-product__img');

  productImgs.forEach((img) => img.classList.remove('selected'));

  clickedImg.classList.add('selected');

  selectedImg.srcset = clickedImg.srcset;
}

function selectColor(e) {
  const clickedColor = e.target.closest('.featured-product__color');

  if (!clickedColor) return;

  const colors = document.querySelectorAll('.featured-product__color');
  colors.forEach((color) => color.classList.remove('selected-color'));

  clickedColor.classList.add('selected-color');
  
  const label = document.querySelector('.featured-product__color-name');
  label.innerHTML = `<span>${clickedColor.dataset.colorName}</span>`;
}

function selectWarranty(e) {
  const clickedWarranty = e.target.closest(
    '.featured-product__warranty-option',
  );
  const warranties = document.querySelectorAll(
    '.featured-product__warranty-option',
  );
  console.log(clickedWarranty);
  if (!clickedWarranty) return;

  warranties.forEach((warranty) =>
    warranty.classList.remove('selected-warranty'),
  );

  clickedWarranty.classList.add('selected-warranty');
}

function increaseQuanity() {
  const quantityDisplay = document.querySelector(
    '.featured-product__quantity-value',
  );

  let currentNumber = parseInt(quantityDisplay.textContent);

  quantityDisplay.innerText = ++currentNumber;
}

function decreaseQuantity() {
  const quantityDisplay = document.querySelector(
    '.featured-product__quantity-value',
  );

  let currentNumber = parseInt(quantityDisplay.textContent);

  if (currentNumber === 1) return;

  quantityDisplay.innerText = --currentNumber;
}

document.addEventListener('DOMContentLoaded', initFeaturedProduct);
document.addEventListener('shopify:section:load', initFeaturedProduct);