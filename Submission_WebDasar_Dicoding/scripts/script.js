const links = document.querySelectorAll('.nav-list a');
const toogle = document.getElementById('btn-menu');
const nav = document.querySelector('header ul');
const footerLinks = document.querySelectorAll('.footer-account li a');

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
        console.log(link.href); 
    }
});


toogle.addEventListener('click', function() {
    if (nav.style.display == 'none') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 950) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});


footerLinks.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      event.preventDefault(); 
      alert('Link not available');
    }
  });
});
