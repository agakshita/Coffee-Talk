burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
navRight = document.querySelector('.nav-right');

burger.addEventListener('click',()=>{
    navRight.classList.toggle('resp-visibilityClass');//agar h to hata do and nai h to daal do
    navList.classList.toggle('resp-visibilityClass');
    navbar.classList.toggle('resp-heightNav');
})