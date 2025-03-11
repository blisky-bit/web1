document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const closeModal = document.getElementById('closeModal');

  // Close the modal when clicking on the "X" button
  closeModal.addEventListener('click', function() {
    successModal.style.display = 'none';
  });

  // Also close the modal when clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === successModal) {
      successModal.style.display = 'none';
    }
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // If you have a back-end endpoint, you can use fetch/AJAX here.
    // For demonstration, we simulate a successful form submission with a delay.
    setTimeout(function() {
      // Show the success modal popup
      successModal.style.display = 'block';
      
      // Optionally reset the form fields after submission
      form.reset();
    }, 500);
  });
});

