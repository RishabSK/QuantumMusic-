
import { useState,useEffect } from 'react'

// user credentials from spotify developer account
const client_id = "ClientId";
const client_secret = "ClientSecret";
const redirect_uri= "http://localhost:3000";

export default function useAuth({code}) {
  //setting up state for accesstoken,refersh token,expire time
   const [accessToken,setAccessToken] = useState()
   const [refreshToken,setRefreshToken] = useState()
   const [expiresIn,setExpiresIn] = useState()
   
//seperating auth code from redirect uri
const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
    const codeee = urlParams.get('code')
    window.history.pushState("", "", redirect_uri);

useEffect(()=>{

  //body for api call to spotify
 let bodyy = "grant_type=authorization_code";
    bodyy += "&code=" + codeee; 
    bodyy += "&redirect_uri=" + encodeURI(redirect_uri);
    bodyy += "&client_id=" + client_id;
    bodyy += "&client_secret=" + client_secret;
 const options = {
   method: "POST",
   headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ":" + client_secret)
    },
   body:  bodyy 
 }

//post requset for getting the accesstoken, refresh token, expiring time
 fetch("https://accounts.spotify.com/api/token", options 
 )
  .then((response)=>{
    
    return response.json();
}).then((res)=>{
 
  setAccessToken(res.access_token)
  setRefreshToken(res.refresh_token)
  setExpiresIn(res.expires_in)
})
},[codeee])

//For handling the access token every hour as it expies in 60 min
useEffect(()=>{
if(!refreshToken || !expiresIn){
  return
}
const interval = setInterval(()=>{

let rbody = "grant_type=refresh_token";
rbody+= "&refresh_token=" + refreshToken;
rbody+=  "&client_id=" + client_id;
rbody+=  "&client_secret=" + client_secret;

const rop ={
  method : "POST",
  headers:{
    'content-type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(client_id + ":" + client_secret)

  },
  body: rbody
}

fetch("https://accounts.spotify.com/api/token",rop)
.then((resp)=>{
  return resp.json()
}).then((rep)=>{
  setAccessToken(rep.access_token)
  console.log(accessToken)
  setExpiresIn(rep.expires_in)
})

},(expiresIn-60)*1000)
return()=> clearInterval(interval)

},[refreshToken,expiresIn])

   return accessToken
}
