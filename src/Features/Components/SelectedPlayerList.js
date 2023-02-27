import React, { useEffect, useState } from "react";
import SelectedPlayer from "./SelectedPlayer";
import { useSelector } from "react-redux";
function SelectedPlayerList() {
  const val = useSelector((state) => state);
  const [play, setplay] = useState([]);
  const[bench,setBench]= useState([]);
  useEffect(() => {
    if(val.all.SelectedPlayer.length <= 15){
    let tem =[]
    let tem2=[]
    let count=0
    val.all.SelectedPlayer.map((ele)=>{
        if(count<11){
            count++
        tem.push({'name':ele.first_name,
        'pos': ele.position,
        'id': ele.id
    })}
    else{
        tem2.push({'name':ele.first_name,
        'pos': ele.position,
        'id': ele.id
    })
    }
    })
    setplay(tem);
    setBench(tem2);
    console.log(val.all.SelectedPlayer);
    console.log(tem2);
}
  }, [val.all.SelectedPlayer]);
  return (
    <>
      {play.length>0?<SelectedPlayer title='SELECTED PLAYERS' play={play}/>:<br/>}
      {bench.length>0?<SelectedPlayer title='BENCH PLAYERS' play={bench}/>:<br/>}
          </>
  );
}

export default SelectedPlayerList;
