document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }

    // Add event listeners for Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });
});
