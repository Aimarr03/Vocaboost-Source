let userData = null;

function getDataFromURL(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const parameterValue = urlParams.get('username');
    userData = JSON.parse(decodeURIComponent(parameterValue));
    updateElements();
}
function updateElements() {
    const username = document.getElementById("account-status");
    if (userData) {
        username.href ="profile.html";
        username.textContent = userData;
    }
    else{
        username.href = "login.html";
        username.textContent = "LOGIN";
    }
  }
function goProfile(){
    if(userData){
        const encodedData = encodeURIComponent(JSON.stringify(userData))
        const profileURL = `profile.html?data=${encodedData}`; 
        window.location.href = profileURL;
    }
}
getDataFromURL();