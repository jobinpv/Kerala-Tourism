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

    //Password Validation
    
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    
    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
      document.getElementById("message").style.display = "block";
    }
    
    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
      document.getElementById("message").style.display = "none";
    }
    
    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
    
      // Validate numbers
      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
    
      // Validate length
      if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    }

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
