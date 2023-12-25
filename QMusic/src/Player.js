
import React, { useState,useEffect } from 'react'
import SpotifyPlayer from "react-spotify-web-playback"
//const PLAY = "https://api.spotify.com/v1/me/player/play";

export default function Player({accessToken,trackuri,track}) {
    const [play,setplay]=useState(true)
    console.log(track)
    var playstate=true;
   
  
function pl(pstate){
          
          setplay(pstate) 
          playstate = pstate
}

//song player for play/pause operation
    if(!track)return (
      <div className='d-flex justify-content-center align-items-center border-dark border-2' style={{display:"inline-flex",height:"75px"}}>
      <div className='btn ' >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0  16 16">
   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
   </svg>
      </div>
      </div>
      )
  else {

      return (     
        <div className = 'align-items-center' style={{display:"inline-flex"}}>
     <div >
       <div className='d-flex m-2 align-items-center' style={{height:"60px",width:"675px"}}>
       <img src={track.albumurl} style={{height:"45px",width:"45px"}}/>
      <div className='mx-3'>
                 <div style={{color:"black",fontWeight:"650"}}>
                     {track.title}
                 </div>
                 <div style={{color:"black",fontWeight:"450"}}>
                     {track.artist}
                 </div>
             </div>
       </div>
    
     </div>
        <div className='d-flex justify-content-center align-items-center border-dark border-2' style={{display:"inline-flex",}}>
       <div className='btn' onClick= {function() {pl(!playstate)}} >
       
       {play ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"  >
        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
      </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0  16 16">
   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
   </svg>}
   
       </div>
     <div style={{fontWeight:"600"}}>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🎵 Now Playing...
     </div>
        </div>
   
        </div>
         )
        
  } 

 
  }

  




// Premium accounts can use this player for playing songs
/*
export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}*/
