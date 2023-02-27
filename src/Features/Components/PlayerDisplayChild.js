import React, { useEffect, useState } from 'react'

function PlayerDisplayChild({playlist}) {
    const[playr,setplayer]=useState([])
    useEffect(()=>{
        console.log(playlist);
        setplayer(playlist)
    },[playlist])
  return (
    <>{playr.map((pl)=><div 
        className='playercls' 
        key={pl}>
            {pl}
            </div>)}</>
  )
}

export default PlayerDisplayChild