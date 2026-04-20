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
