const productImgs = document.querySelectorAll('.featured-product__img');
const selectedImg = document.querySelector('.featured-product__selected-img');
function selectImage(e) {
  productImgs.forEach((img) => img.classList.remove('selected'));

  const img = e.currentTarget;
  img.classList.add('selected');

  console.dir(img)
  selectedImg.srcset = img.srcset;
}
productImgs.forEach((img) => {
  img.addEventListener('click', selectImage);
});

const colors = document.querySelectorAll('.featured-product__color');
const label = document.querySelector('.featured-product__label');

const firstColorName = colors[0].dataset.colorName;
label.innerHTML = `<p><span>Cor:</span> ${firstColorName}</p>`;

function selectColor(e) {
  colors.forEach((color) => color.classList.remove('selected-color'));

  const color = e.currentTarget;
  color.classList.add('selected-color');

  const colorName = color.dataset.colorName;
  label.innerHTML = `<p><span>Cor:</span> ${colorName}</p>`;
}

colors.forEach((color) => color.addEventListener('click', selectColor));
