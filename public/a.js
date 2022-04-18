"use strict";
let continueButton = window.document.getElementById("continueButton");
continueButton.addEventListener("click",replace);


function replace( ) {
 document.getElementById("BeforeContinue").style.display="none";
  document.getElementById("AfterContinue").style.display= "block";
}
