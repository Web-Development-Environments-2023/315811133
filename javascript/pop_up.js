const images = [...document.querySelectorAll('.media-element')];

const popup = document.querySelector('.pop-up');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let totalImages = document.querySelector('.media-scroller').childElementCount;
let index = 0; // will track current image

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i, item.firstChild.name);
        popup.classList.toggle('active');
    })
})

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
    
})

const updateImage = (i, name) => {
    let path = `assest/images/img${i+1}.jpg`
    largeImage.src = path;
    imageName.innerHTML = name;
    imageIndex.innerHTML = `${totalImages}/${i+1}`;
    index = i;
}

leftArrow.addEventListener('click', () => {
    const leftOffset = -1;
    if ( index + leftOffset < 0) {updateImage(totalImages-1);}
    else {updateImage(index+leftOffset);}
})

rightArrow.addEventListener('click', () => {
    const rightOffset = 1;
    if ( index + rightOffset >= totalImages){updateImage(0);}
    else {updateImage(index+rightOffset);}
})