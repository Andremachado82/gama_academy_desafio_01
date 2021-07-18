function imgSlider(image) {
    document.querySelector('.image1').src = image;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    var toggleMenu = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}