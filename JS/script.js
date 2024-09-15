document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.menu-nav');
    const topBtn = document.querySelector('.top-btn');

    burger.addEventListener('click', function() {
        nav.classList.toggle('active'); 

    });
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { 
            topBtn.classList.add('show'); 
        } else {
            topBtn.classList.remove('show'); 
        }
        });
});

document.addEventListener('DOMContentLoaded', function() {
});
