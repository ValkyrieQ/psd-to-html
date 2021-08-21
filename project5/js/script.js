$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 150,
        items: 5,
        responsive: {
            1000: {
                items: 5
            },
            768: {
                items: 3
            },
            400: {
                items: 1
            }
        }
    });
})

$('#search-toggle').click(function() {
    $('#search').toggleClass('active')
})

$('.menu-toggle').click(function() {
    $('.menu-toggle').toggleClass('change');
    $('.nav-container').toggleClass('showmenu')
})