import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {  useDispatch,useSelector } from 'react-redux';
import axios from "axios";
import Swal from 'sweetalert2'
import { setPlayerList } from "../../redux/actions/actions";
import findOcc from '../../HelperFunction/CountOccur'
import AllertNotify from "../../HelperFunction/Allertnotification";
function PlayerDatagrid() {
  const [player, setplayers] = useState([]);
  const[selectionModel,setselectionModel]=useState([]);
  const[preselectionModel,setpreselectionModel]=useState([]);
  const val=useSelector((state)  => state);  
  const dispatch =useDispatch();
  useEffect(() => {
    axios.get("./player.json").then((res) => {
      setplayers(res.data);
    });
  }, []);
  useEffect(()=>{
    if(val.all.SelectedPlayer.length>15){
      setselectionModel(preselectionModel);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cannot have more than 15 players!',
        background: 'black',
        allowOutsideClick: false
      })
  }
  if(val.all.SelectedPlayer.length !== selectionModel.length)
  {
      let tem=[]
      val.all.SelectedPlayer.map((valueEl)=>{
        tem.push(valueEl.id)
      })
      setselectionModel(tem)
  }
 
  },[val.all.SelectedPlayer])
  const onRowsSelectionHandler = (ids) => {
    setpreselectionModel(selectionModel)
    
    let selectedRowsData = ids.map((id) => player.find((row) => row.id === id));
    
    if(selectedRowsData.length<=11){
      let allercheck=AllertNotify(findOcc(selectedRowsData,'position'),selectedRowsData.length)
    if(allercheck.length<2){
      setselectionModel(ids)
      dispatch(setPlayerList(selectedRowsData));
    }}
    else{
      setselectionModel(ids)
      dispatch(setPlayerList(selectedRowsData));
    }
  };
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "first_name", headerName: "FNAME" },
    { field: "last_name", headerName: "LNAME" },
    { field: "team", headerName: "TEAM" },
    { field: "position", headerName: "POSITION",width:150 }
  ];
  return (
   
    <div style={{ height: 450,color:"white" ,width: 740,marginLeft:"10px", backgroundColor: "transparent" }}>
      <DataGrid
        rows={player}
        getRowId={(row) => row.id}
        columns={columns}
        checkboxSelection
        selectionModel={selectionModel}
        onSelectionModelChange={itm => onRowsSelectionHandler(itm)}
        className="label-85 "
        sx={{
          marginLeft: 10,
          boxShadow: 2,
          border: 2,
          color: "white",
        }}
      />
    </div>
   
  );
}

export default PlayerDatagrid;
