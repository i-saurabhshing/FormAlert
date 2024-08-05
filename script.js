document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const resume = document.getElementById('resume').files[0];

  let isValid = true;

  if (!name) {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
  } else {
      document.getElementById('nameError').textContent = '';
  }

  if (!email) {
      document.getElementById('emailError').textContent = 'Email is required';
      isValid = false;
  } else {
      document.getElementById('emailError').textContent = '';
  }

  if (!phone) {
      document.getElementById('phoneError').textContent = 'Phone number is required';
      isValid = false;
    } else {
      document.getElementById('phoneError').textContent = '';
  }

  if (!resume) {
      document.getElementById('resumeError').textContent = 'Resume is required';
      isValid = false;
  } else {
      document.getElementById('resumeError').textContent = '';
  }

  if (isValid) {
      const result = document.getElementById('result');
     alert(result.textContent = `Submitted successfully!
                            Name: ${name}
                            Email: ${email}
                            Phone: ${phone}`);
    }
});