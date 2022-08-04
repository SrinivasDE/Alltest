import React from 'react';
import MainContent from './MainContent';
import './sideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar = () => {
  return (
    <>
    {/* <div style={{}}> */}
        
    
    <div className='sidebar' style={{display:'flex', flexWrap:'wrap'}}>
        <ul style={{flex:'20%'}}>
            <li><FontAwesomeIcon icon="fa-solid fa-house" />Home</li>
            <li>Menu Item</li>
            <li>Android</li>
            <li>Attachments</li>
            <li>Bookmarks</li>
            <li>Favorites</li>
            <li>Configuration</li>
            <li>Birthday Party</li>
            <li>Designer</li>
            <li>photos</li>
        </ul>
        <div style={{flex:'80%'}}>
        <MainContent/>
            
        </div>
    </div>
    {/* <div style={{float:'right'}}>
        <MainContent/>
    </div>
    </div> */}
    </>
  )
}

export default SideBar;