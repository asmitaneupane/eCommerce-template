//hamburger menu

// let navWrapper = document.querySelector('.menu-collapse'), navToogler = document
//     .querySelector('.hamburger-menu')
// navToogler.addEventListener('click', function (event) {
//     navWrapper.classList.toggle('inactive')
// });

// let x = document.querySelector('.custom-menu','.menu-close'), y = document
//     .querySelector('.hamburger-menu')
// y.addEventListener('click', function (event) {
//     x.classList.toggle('active')
// });


// counter
let valueDisplays = document.querySelectorAll('.counter-value');
let interval = 2000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-count"))
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue + '%' ;

        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration);
});

$(document).ready(function () {

});
