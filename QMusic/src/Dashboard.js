import React from 'react'
import useAuth from './useAuth'
import Songdisplaycomponent from './Songdisplaycomponent'
import Player from './Player'
import { useState,useEffect } from 'react'
import { Container,Form } from 'react-bootstrap'
import spotifywebnodeapi from "spotify-web-api-node"
import  "./Dashboard.css"

const spotifyapi = new spotifywebnodeapi({
  clientId:"ClientId"
})

export default function Dashboard({code}) {
  
    const accessToken = useAuth(code)
    const [search,setSearch]= useState("") //state for user search input
    const [searchResult,setsearchResult]=useState([]) //state for handling the search results
    const [playingtrack,setplayingtrack]=useState() //state for playing the selected song
    console.log(searchResult)

    function choosetrack(track){
      setplayingtrack(track)
    }

    //checking the resence of access token to prevent invalid request
    useEffect(()=>{
      if (!accessToken) {
        return
      }
      spotifyapi.setAccessToken(accessToken)
    },[accessToken])

    //get request for song to spotify
    useEffect(()=>{
      if(!search) {
        return setsearchResult([])
      }
      if(!accessToken) {
        return
      } 
      
      let cancellatereq = false
      //sending request to spotify based on user search
      spotifyapi.searchTracks(search)
      .then(res=>{
        if(cancellatereq) return
        
        //collecting neccesary data from response
       setsearchResult( res.body.tracks.items.map(track=>{
          return{
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumurl: track.album.images[2].url
          }
        }))
      })
      return ()=> (cancellatereq = true)
    },[search,accessToken])

  return  (
    <div className='d-flex flex-column py-2 ' style={{height:"100vh",backgroundColor:"black"}}>
      
     <div className='blockquote text-right rounded-2' style={{marginLeft:"35px",marginRight:"20px",color:"white"}}>
     <h2>QMusic⚡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ciao👋,Quantum👽!                        <br></br>
     <small class="text-muted" ><h6 style={{color:"lime"}}> &nbsp;&nbsp;–To the beat of your heart!</h6></small> 
      </h2>
     </div>
    
         <Form.Control className= "se rounded-4 border-dark " type='search ' 
                        placeholder='🔍    hey buddy, what do you want to listen to!' 
                        value={search}
                        onChange={e=>setSearch(e.target.value)}
       style={{backgroundColor:"blueviolet",width:"1505px",marginLeft:"15px",marginRight:"15px",color:'greenyellow',fontWeight:"500"}}/>  
       
    <div className='bu flex-grow-1 my-2 rounded-2 ' style={{overflowY:'auto',marginLeft:"15px",marginRight:"15px",color:"#04D9FF",border:"solid #171717",backgroundColor:"#171717"}}>
      {
          searchResult.map(track=>(
            <Songdisplaycomponent
            track={track}
            key={track.uri}
            choosetrack={choosetrack}
            />
          ))
      }         
    </div>

    <div className=" rounded-2" style={{marginLeft:"15px",marginRight:"15px",backgroundColor:"#AAFF00" }}>
      <Player accessToken={accessToken} trackuri ={playingtrack?.uri} track={playingtrack} />
    </div>

    </div>
    
  )
}
