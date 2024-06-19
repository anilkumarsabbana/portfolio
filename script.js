// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const darkModeToggle = document.getElementById('darkmode');
    const body = document.body;
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.navbar a');

    // Toggle navbar on mobile view
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('active');
    });

    // Add shadow to header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }

        // Highlight active section link in navbar
        let fromTop = window.scrollY + header.offsetHeight;
        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({
                behavior: 'smooth'
            });
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-img');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

/* image popout */

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all the thumbnails
var thumbnails = document.getElementsByClassName("thumbnail");

for (var i = 0; i < thumbnails.length; i++) {
thumbnails[i].onclick = function(event){
event.preventDefault(); // Prevent the default action
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

