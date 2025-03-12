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
    event.preventDefault();
    alert("Submit event triggered"); // <-- For debugging

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert("Success response from Formspree"); // <-- For debugging
        successModal.style.display = 'block';
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



