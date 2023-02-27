import React, { useState } from "react";
import ReactDom from 'react-dom'
import "../../css/Modal.css";
import { useSelector } from "react-redux";
import PlayerDisplay from "./PlayerDisplay";
import Swal from 'sweetalert2'
export default function Modal() {
  const [modal, setModal] = useState(false);
  const[teamName, setTeamName]=useState('');
  const val = useSelector((state) => state);
  const toggleModal = () => {
    setModal(!modal);
  };
  const saveModal = () => {
    if(val.all.SelectedPlayer.length>=15)
    {Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(async (result)  => {
      if (result.isConfirmed) {
        
        const { value: text } = await Swal.fire({
          input: 'textarea',
          inputLabel: 'TEAM NAME',
          inputPlaceholder: 'Type your team name here...',
          inputAttributes: {
            'aria-label': 'Type your message here'
          },
          showCancelButton: true
        })
        
        if (text) {
          Swal.fire("Your Team name is :"+text)
          setTeamName(text);
        }
        
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })}
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Team must have 15 players!',
      })
    }
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return ReactDom.createPortal(
    <>
      <button onClick={toggleModal} className="button-85">
        PREVIEW TEAM
      </button>

      {modal && (
        <div className="modal label-85">
          <div className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal} />
            {teamName.length>1?<label className="teamLabel">TEAM NAME: {teamName}</label>:<></>}
            <button className="save-modal" onClick={saveModal} />
            <div className="h1tag field">
           <PlayerDisplay player={val.all.SelectedPlayer.slice(0,11)}/>
            </div>
          </div>
        </div>
      )}
      
    </>,document.getElementById('portal')
  );
}