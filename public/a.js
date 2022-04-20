"use strict";

let continueButton = window.document.getElementById("continueButton");
continueButton.addEventListener("click",()=>{
  // Getting input values from users
  let Username = document.getElementById("UserName").value;
  let TikTokURL = document.getElementById("TikTokURL").value;
  let VideoNickname = document.getElementById("VideoNickname").value;
  // crating dictionary data
  
  let data = {
    "Username": Username,
    "TikTokURL": TikTokURL,
    "VideoNickname": VideoNickname
  }


  // storing video nickname to the local session storage
  sessionStorage.setItem("VideoNickname", VideoNickname);

  
  // sending post by calling the async fucnton
  sendPostRequest("/VideoData",data);

});



// posting the data
async function sendPostRequest(url,data) {

  console.log("about to send post request for :", data);
  let response = await fetch(url, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)});
  if (response.ok) {
    let data = await response.text();
    window.location = "/acknowlegement.html";
    return data;
  } else {
    throw Error(response.status);
  }
}