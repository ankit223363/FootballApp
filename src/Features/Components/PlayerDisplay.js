import React, { lazy, useEffect, useState } from 'react'
import PlayerDisplayChild from './PlayerDisplayChild'
function PlayerDisplay({player}) {
  const [gk,setgk]=useState([])
  const [cmd,setcmd]=useState([])
  const [fw,setfw]=useState([])
  const [dmf,setdmf]=useState([])
  useEffect(()=>{
    player.map((ele)=>{
    if(ele.position==='Striker'){
      let fwp=fw
      fwp.push(ele.first_name)
      setfw(fwp)
    }
    if(ele.position==='Midfielder'){
      let fwp=cmd
      fwp.push(ele.first_name)
      setcmd(fwp)
    }
    if(ele.position==='Defender'){
      let fwp=dmf
      fwp.push(ele.first_name)
      setdmf(fwp)
    }
    if(ele.position==='Goalkeeper'){
      let fwp=gk
      fwp.push(ele.first_name)
      setgk(fwp)
    }
    })
    console.log(fw);
    console.log(gk);
    console.log(cmd);
    console.log(dmf);
  },[player])
  
    
  return (
    <>
    <div className='Goalkeeper'><PlayerDisplayChild playlist={gk}/></div>
    <div className='Defender'><PlayerDisplayChild playlist={dmf}/></div>
    <div className='Midfielder'><PlayerDisplayChild playlist={cmd}/></div>
    <div className='Striker'><PlayerDisplayChild  playlist={fw}/></div>
    </>
  )
}

export default PlayerDisplay