// slider
// $(document).ready(function() {
//     $('.mentors__slider').slick({
//         slidesToShow: 3,
//     });
// });
$(document).ready(function() {
    const widthCurrent = 1050;
    // console.log($(window).width() + 17);
    if ($(window).width() + 17 < widthCurrent) {
        $('.mentors__slider').slick({
            slidesToShow: 1,
        });
    } else {
        $('.mentors__slider').slick({
            slidesToShow: 3,
        });
    }
});

//form
// const form = document.getElementById('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     serializeForm(form);
//     console.log('отправка');
// });

// function serializeForm(formNode) {
//     const { elements } = formNode;
//     const data = Array.from(elements)
//         .filter((item) => !!item.name)
//         .map((element) => {
//             const { name, value } = element;
//             return { name, value };
//     })
//     console.log(data);
// }

$(document).ready(function() {
    $('.header__burger').click(function(event) { 
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
        
    });
});