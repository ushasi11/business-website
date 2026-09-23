const contactForm = document.getElementById('contactForm');

// Only run this script if the contact form exists on the current page
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default page reload
        event.preventDefault();
        
        // Get values from the inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Success message
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        contactForm.reset();
    });
}