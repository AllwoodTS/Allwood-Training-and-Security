// Mock email confirmation functionality
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Simulate email confirmation
  const email = document.getElementById('email').value;
  console.log(`Confirmation email sent to: ${email}`); // Replace with actual email service integration

  // Show confirmation message
  document.getElementById('confirmationMessage').classList.remove('hidden');
});
