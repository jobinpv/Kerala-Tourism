    var x=document.getElementById("login");
    var y=document.getElementById("register");
    var z=document.getElementById("btn");

    function Register(){
        x.style.left= "-400px";
        y.style.left= "50px";
        z.style.left= "110px";
    }

    function Login(){
        x.style.left= "50px";
        y.style.left= "450px";
        z.style.left= "0";
    }

    //Phone number

let error1=document.getElementById("error1");
let phonenumber=document.getElementById("pho")


function phvalid()
{
var phoneno=/^\d{10}$/;
var phoneno1=/^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
if(phoneno.test(phonenumber.value))
{
    error1.innerHTML="valid";
error1.style.color="green";
    return true;
}
else if(phoneno1.test(phonenumber.value))
{error1.innerHTML="valid";
error1.style.color="green";
    return true;
}
else{
    alert("Enter only 10 numbers in the phone number field and follow this 3 formats(XXX-XXX-XXXX,XXX.XXX.XXXX,XXX XXX XXXX)");
    error1.innerHTML="invalid";
      error1.style.color="red";
    return false;
}
}


//Password
const pwd=document.getElementById('pwd');
const cpwd=document.getElementById('cpwd');
const pho=document.getElementById('pho');

function validation() {
  const pwdValue = pwd.value.trim(); 
  const cpwdValue = cpwd.value.trim();
  const phoValue = pho.value.trim();

  if(phoValue===''){
    //show error
    //add error class
    setErrorFor(pho, 'Mobile number cannot be blank');
    validation = false;}
    else if(!ispho(phoValue)){
        setErrorFor(pho, 'Mobile number is not valid');  
        validation = false;}
        else{
    //add success class
    setSuccessFor(pho);
}

  if(pwdValue===''){
    //show error
    //add error class
    setErrorFor(pwd, 'Password cannot be blank');
    validation = false;}
    else if(!isPwd(pwdValue)){
        setErrorFor(pwd, 'Password is not valid');  
        validation = false;}
        else{
    //add success class
    setSuccessFor(pwd);
}
if(cpwdValue===''){
    //show error
    //add error class
    setErrorFor(cpwd, 'This field cannot be blank');
    validation = false;}
    else if(pwdValue!=cpwdValue){
        setErrorFor(cpwd, 'Password does not match');  
        validation = false;}
        else{
    //add success class
    setSuccessFor(cpwd);
}

return validation; 

}

function ispho(pho){
  return /^\+?([6-9]{1})([\d]{2})[\-.\s]?([\d]{3})[\-.\s]?([\d]{4})$/.test(pho)
}
function isPwd(pwd){  
  return /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})$/.test(pwd)
}

// For password strength

pwd.addEventListener('keyup', function(){
  strength();
})
function strength(){
  var val=document.getElementById('pwd').value;
  var status=document.getElementById('length');
  var counter=0;

  if(val!=''){
      if(val.length<=3)
      counter=1;
      if(val.length>3 && val.length<=6)
      counter=2;
      if(val.length>=8)
      counter=3;

      if(counter==1){
          status.innerHTML="Too WEAK";
          status.style.backgroundColor="red";
          status.style.color="white"

      }
      if(counter==2){
          status.innerHTML="WEAK";
          status.style.backgroundColor="orange";
          status.style.color="white"

      }
      if(counter==3){
          status.innerHTML="STRONG";
          status.style.backgroundColor="green";
          status.style.color="white"

      }

      
  }
}




