"use strict";




let continueButton = window.document.getElementById("continueButton");
continueButton.addEventListener("click",()=>{

  // sendPostRequest
  let conbinedString = Concate();
  console.log("Printing conbinedString: ", conbinedString);
  sendPostRequest("/VideoData",conbinedString);
  getVideoName(); // return the name of the Video

});


function getVideoName(){
            // Selecting the "VideoNickname" element and get its value 
             var inputVal = document.getElementById("VideoNickname").value;
            // change value 
           document.getElementById("EnteredName").innerHTML = "'"+inputVal+"'";    
            
  // return video name
            
        }

function Concate(){
  let u = document.getElementById("UserName").value;
  let t = document.getElementById("TikTokURL").value;
  let v = document.getElementById("VideoNickname").value;
  let data = [u ,t,v];
  return data;
}


// posting the data
async function sendPostRequest(url,data) {

  console.log("about to send post request for :", data);
  let response = await fetch(url, {
    method: 'POST', 
    headers: {'Content-Type': 'text/plain'},
    body: data });
  if (response.ok) {
    let data = await response.text();
    window.location = "/acknowlegement.html";
    return data;
  } else {
    throw Error(response.status);
  }
}