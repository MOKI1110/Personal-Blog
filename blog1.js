document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Simple validation
    var valid = true;
    if (!name) {
      document.getElementById('nameError').textContent = 'Please enter your name';
      valid = false;
    } else {
      document.getElementById('nameError').textContent = '';
    }
    if (!email) {
      document.getElementById('emailError').textContent = 'Please enter your email';
      valid = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }
    if (!message) {
      document.getElementById('messageError').textContent = 'Please enter your message';
      valid = false;
    } else {
      document.getElementById('messageError').textContent = '';
    }
  
    // If all fields are valid, submit the form
    if (valid) {
      // Here you can add logic to handle form submission, like sending an email or storing data in a database
      console.log('Form submitted:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Clear the form after submission
      document.getElementById('contactForm').reset();
      // Show confirmation message
      document.getElementById('confirmation').style.display = 'block';
      // Hide confirmation message after 3 seconds
      setTimeout(function() {
        document.getElementById('confirmation').style.display = 'none';
      }, 3000);
    }
  });
// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the viewer count from localStorage or default to 0
    let viewerCount = localStorage.getItem('viewerCount') || 0;
    // Parse the viewerCount to ensure it's an integer
    viewerCount = parseInt(viewerCount);
  
    // Display the initial viewer count on the webpage and set its color to white
    let viewerCountElement = document.getElementById('viewer-count');
    viewerCountElement.textContent = viewerCount;
    viewerCountElement.style.color = 'white';
  
    // Increment the viewer count when the page loads
    viewerCount++;
    // Update the displayed viewer count
    viewerCountElement.textContent = viewerCount;
    
    // Update localStorage with the new viewer count
    localStorage.setItem('viewerCount', viewerCount.toString());
});
