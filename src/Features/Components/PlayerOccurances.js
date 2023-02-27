import React from 'react'
import {  useSelector } from "react-redux";
import findOcc from '../../HelperFunction/CountOccur';
function PlayerOccurances() {
    const val = useSelector((state) => state);
    let temp=findOcc(val.all.SelectedPlayer,'position')
  return (
    <div className=' playeroccur'>{
        temp.map((ele)=>{
            console.log(ele);
            return <>{ele.position}  :  {ele.occurrence} </>
        })
    }</div>
  )
}

export default PlayerOccurances