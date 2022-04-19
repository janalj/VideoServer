"use strict";




let continueButton = window.document.getElementById("continueButton");
continueButton.addEventListener("click",()=>{
  replace();
  getInputValue();
  // sendPostRequest
  let conbinedString = Concate();
  console.log("Printing conbinedString: ", conbinedString);
  sendPostRequest("/VideoData",conbinedString);

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

function Concate(){
  let u = document.getElementById("UserName").value;
  let t = document.getElementById("TikTokURL").value;
  let v = document.getElementById("VideoNickname").value;
  let data = u + t + v;
  return data;
}


async function sendPostRequest(url,data) {

  console.log("about to send post request for :", data);
  let response = await fetch(url, {
    method: 'POST', 
    headers: {'Content-Type': 'text/plain'},
    body: data });
  if (response.ok) {
    let data = await response.text();
    return data;
  } else {
    throw Error(response.status);
  }
}