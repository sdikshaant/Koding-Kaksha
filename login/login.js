var enter = ()=>{
  var firname = document.getElementById("fname").value
  var eMail=document.getElementById("email").value
  var paswd=document.getElementById("pswd").value
  var fname=localStorage.getItem('fname')
  var email=localStorage.getItem('email')
  var pswd=localStorage.getItem('pswd')
  if (fname != null) {
    if (fname.trim() != "" && firname == fname) {
      if (email.trim() != "" && email == eMail) {
        if (pswd.trim() != "" && paswd == pswd) {
          window.open("https://ca1d7fde-e2ae-4f93-ad58-1187959db362-00-t00hw51g3zq0.sisko.replit.dev/Dashboard/dashboard.html", "_self");
        } 
        else {
          alert("Wrong Password");
        }
      } 
      else {
        alert("Wrong E-mail");
      }
    }
    else{
      alert("Wrong Name");
    }
  } 
  else {
    alert("You haven't Signed in");
  }
}

function showPswd(){
  var pasword = document.getElementById("pswd")
  var type= pasword.type 
  if(type==="password"){
    document.getElementById("show").innerHTML="Hide"
    pasword.type="text"
  }
  else{
    document.getElementById("show").innerHTML="Show  "
    pasword.type="password"
  }
}