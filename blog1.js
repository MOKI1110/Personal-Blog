// JavaScript code for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // You can add logic here to handle the form submission, such as sending an email or storing the data in a database
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});
