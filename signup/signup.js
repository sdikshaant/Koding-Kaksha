var submit = ()=>{
  var fname = document.getElementById("fname").value
  var lname= document.getElementById("lname").value
  var email=document.getElementById("email").value
  var pswd=document.getElementById("pswd").value
  localStorage.setItem('fname',fname)
  localStorage.setItem('lname',lname)
  localStorage.setItem('email',email)
  localStorage.setItem('pswd',pswd)
  if(fname.trim()!=""){
    if(lname.trim()!=""){
      if(email.trim()!=""){
        if(pswd.trim()!=""){
          window.open("https://ca1d7fde-e2ae-4f93-ad58-1187959db362-00-t00hw51g3zq0.sisko.replit.dev/login/login.html","_self")  
        }
        else{
          alert("Fill all input feilds")
        }
      }
      else{
        alert("Fill all input feilds")
      }
    }
    else{
      alert("Fill all input feilds")
    }
  }
  else{
    alert("Fill all input feilds")
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
    document.getElementById("show").innerHTML="Show"
    pasword.type="password"
  }
}