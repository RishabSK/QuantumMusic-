import React from 'react'
import "./Dashboard.css"

export default function TrackSearchResults({track ,choosetrack}) {

  function playsong(){
    choosetrack(track) 
  }

  //component for displaying songs for search results
  return (
    <div className='but d-flex m-2 align-items-center ' 
    style={{cursor:"pointer"}}
    onClick={playsong}
    >
        <img src={track.albumurl} style={{height:"45px",width:"45px"}}/>
        <div className= 'mx-3' >
            <div >
                {track.title}
            </div>
            <div style={{color:"#FF10F0"}}>
                {track.artist}
            </div>
        </div>
    </div>
  )
}
