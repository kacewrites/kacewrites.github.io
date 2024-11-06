// Script for navbar toggle
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

// Script for product quantity
const quantityInput = document.querySelectorAll('.quantity input');

quantityInput.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value < 1) {
            input.value = 1;
        }
    });
});



const you = ['buy', 'buy2', 'buy3', 'buy4'];

// console.log(buy);
// function kace(){
//   console.log("i am ready");
// };
// kace();
buy.addEventListener('click', function kace(){

  for (var i = 0; i < you.length; i++) {
    buy = document.getElementById(you[i]);}
    console.log(buy);
});
