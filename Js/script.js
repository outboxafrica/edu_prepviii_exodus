 function signup() {
     const un = document.getElementById('username').value;
     const email = document.getElementById('email').value;
     const pass = document.getElementById('password').value;
     const cpass = document.getElementById('cpassword').value;
     var users = JSON.parse(localStorage.getItem('users')) || [];
     var ulen = users.length;

     if (pass < 6) {
         alert("Your password must be six characters long");
         return false
     } else if (pass != cpass) {
         alert("Your passwords do not match.");
         return false
     }
     for (i = 0; i < ulen; i++) {
         if (un == users[i].username) {
             alert("Username already exists");
             return false;
         } else if (email == users[i].email) {
             alert("Email already used");
             return false;
         }
     }
     var user = {
         username: usernameInput.value,
         email: emailInput.value,
         password: passwordInput.value
     }

     users.push(user);
     alert("Registered successfully");
     localStorage.setItem('users', JSON.stringify(users));

 }

 const login = document.getElementById('login');
 login.addEventListener('click', function(e) {
     e.preventDefault();
     users = !!localStorage.getItem('users') ?
         JSON.parse(localStorage.getItem('users')) : [];
     var un = document.getElementById('uname').value;
     var pass = document.getElementById('passwd').value;
     var ulen = users.length;

     for (i = 0; i < ulen; i++) {
         if (un == users[i].username && pass == users[i].password) {
             window.location.href = "html/dashboard.html";
             return;
         }
     }
     alert("User doesnt exist");
 });