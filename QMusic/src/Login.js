import React from 'react'
//For accesssing spotify accounts and getting Authentication code
const AUTH_URL =  "https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&show_dialog=true"

export default function Login() {
  //Login button to trigger the AUTH_URL
  return (
   <div className='d-flex justify-content-center align-items-center' style={{minHeight:"100vh",backgroundColor:"black"}}>
   <div>
   <h2 style={{color:"lime"}}>QuantumMusic⚡</h2> 
    </div> 
    <div>
    <a className='btn btn-success btn-lg ' href={AUTH_URL}>Login</a>
    </div>
      
   </div>
  )
}
