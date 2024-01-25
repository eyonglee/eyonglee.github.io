document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav ul li a");
    var currentUrl = window.location.href;

    links.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
});