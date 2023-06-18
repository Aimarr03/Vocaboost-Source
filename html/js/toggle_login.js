function toggleForm(formType) {
    var signupContainer = document.getElementById('signup-container');
    var loginContainer = document.getElementById('login-container');
    var signupBtn = document.getElementById('go-signup');
    var loginBtn = document.getElementById('go-login');
    var maincontent = document.getElementById("margin-modifier");
  
    if (formType === 'signup') {
      signupContainer.style.display = 'none';
      loginContainer.style.display = 'block';
      loginBtn.disabled = true;
      signupBtn.disabled = false;
      if(document.body.scrollHeight<=1180){

      }
      else{

      }
      maincontent.style.marginBottom = "0vh";
    } else if (formType === 'login') {
        signupContainer.style.display = 'block';
        loginContainer.style.display = 'none';
        loginBtn.disabled = false;
        signupBtn.disabled = true;
    }
  }
  