let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Active navigation on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Fixed typo from windows.scrollY to window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    
    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const mobile = formData.get('mobile');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Here you would typically send this data to your server or email service
            // For now, we'll use a simple alert to demonstrate
            alert(`Form submitted!\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`);
            
            // You can replace the alert with an actual form submission to your email service like:
            // window.location.href = `mailto:your-email@example.com?subject=${subject}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMobile: ${mobile}%0D%0A%0D%0A${message}`;
            
            // Or you can use a service like Formspree or Netlify Forms
            // Uncomment this line if you use Formspree and replace with your form ID
            // fetch('https://formspree.io/f/yourformid', {
            //     method: 'POST',
            //     body: formData,
            //     headers: { 'Accept': 'application/json' }
            // })
            // .then(response => {
            //     contactForm.reset();
            //     alert('Thank you for your message. It has been sent.');
            // })
            // .catch(error => {
            //     alert('Oops! There was a problem submitting your form.');
            // });
            
            contactForm.reset();
        });
    }
});
