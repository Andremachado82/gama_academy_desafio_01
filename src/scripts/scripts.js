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

document.getElementById('nome').value = localStorage.nome ? localStorage.nome : null;

document.getElementById('email').value = localStorage.email ? localStorage.email : null;

function saveData() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
}
