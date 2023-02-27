import React from 'react'
import DropdownFieldCountry from './Components/DropdownFieldCountry'
import DropdownFieldTeam from './Components/DropdownFieldTeam';
import Modal from './Components/Modal';
import PlayerDatagrid from './Components/PlayerDatagrid';
import PlayerOccurances from './Components/PlayerOccurances';
import SelectedPlayerList from './Components/SelectedPlayerList';
function MainBody() {
    
  return (<>
    <div className='selectoption' ><DropdownFieldCountry />
    <DropdownFieldTeam /></div>
    <PlayerOccurances />
    <div className='selectoption'>
    
    <PlayerDatagrid />
    <SelectedPlayerList />
    </div>
    <Modal />
    </>
  )
}

export default MainBody