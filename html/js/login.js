// Store the user data in an array
let users = [];

// Function to handle signup
function signup() {
  const newUsername = document.getElementById('signup-username').value;
  const newPassword = document.getElementById('signup-password').value;
  const name = document.getElementById('signup-name').value;
  const education = document.getElementById('signup-education').value;
  const birthplace = document.getElementById('signup-birth-place').value;
  const birthdate = document.getElementById('signup-birth-date').value;

  // Create a new user object and add it to the users array
  const newUser = {
    username: newUsername,
    password: newPassword,
    name: name,
    education: education,
    birthplace: birthplace,
    birthdate: birthdate
  };
  users.push(newUser);

  // Clear the signup form
  document.getElementById('signup-username').value = '';
  document.getElementById('signup-password').value = '';
  document.getElementById('signup-name').value = '';
  document.getElementById('signup-education').value = '';
  document.getElementById('signup-birth-place').value = '';
  document.getElementById('signup-birth-date').value = '';

  // Automatically login the user
  document.getElementById('login-username').value = newUsername;
  document.getElementById('login-password').value = newPassword;
  login();
}

// Function to handle login
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Check if the user exists and the password matches
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // Redirect to the main menu and pass the user data as URL parameters
    const userData = `?username=${encodeURIComponent(username)}&name=${encodeURIComponent(user.name)}&education=${encodeURIComponent(user.education)}&birthplace=${encodeURIComponent(user.birthplace)}&birthdate=${encodeURIComponent(user.birthdate)}`;
    window.location.href = 'main_menu.html' + userData;
  } else {
    alert('Invalid username or password');
  }
}

document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault();
  login();
});

document.getElementById('signup').addEventListener('submit', function(event) {
  event.preventDefault();
  signup();
});
