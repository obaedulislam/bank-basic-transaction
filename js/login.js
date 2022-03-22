document.getElementById('login-submit').addEventListener('click', function(e){
    // User email field
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // User password field
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //Check email & password
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
      window.location.href =  'banking.html';
    }
})



