"use strict";
let continueButton = window.document.getElementById("continueButton");
continueButton.addEventListener("click",()=>{
  replace();
  getInputValue();
});


function replace( ) {
  
 document.getElementById("BeforeContinue").style.display="none";
  document.getElementById("AfterContinue").style.display= "inline-block";

}

function getInputValue(){
            // Selecting the "VideoNickname" element and get its value 
            var inputVal = document.getElementById("VideoNickname").value;
            // change value 
          document.getElementById("EnteredName").innerHTML = "'"+inputVal+"'";            
          
          

        }
