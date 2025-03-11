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

    const formData = new FormData(form);

    // Send the data to Formspree using fetch
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Show the success modal popup
        successModal.style.display = 'block';
        // Optionally, reset the form
        form.reset();
      } else {
        response.json().then(data => {
          if (data.errors) {
            alert("There was an error: " + data.errors.map(error => error.message).join(", "));
          } else {
            alert("Oops! There was a problem submitting your form");
          }
        });
      }
    })
    .catch(error => {
      alert("Oops! There was a problem submitting your form");
      console.error('Error:', error);
    });
  });
});


