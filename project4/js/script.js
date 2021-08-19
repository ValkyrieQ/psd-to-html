// let menuToggle = document.querySelector('.menu_toggle');
// let menuHide = document.querySelector('.menu_list');

// menuToggle.addEventListener('click', function() {
//     menuToggle.classList.toggle('active');
//     menuHide.classList.toggle('active');
// })

$(document).ready(function() {
    $('.menu_toggle').click(function() {
        $('.menu_toggle').toggleClass('active');
        $('.menu_list').toggleClass('active');
    })
})