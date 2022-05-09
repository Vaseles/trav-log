import React from 'react'
import back from '../assets/media/back.jpg';
import {AiOutlineDownload} from 'react-icons/ai';

function Pin() {
  return (
    <div className='pin'>
        <img src={back} alt="" />
        <div className="pin__content">
            <h3>name pin</h3>
            <p><AiOutlineDownload/></p>
        </div>
    </div>
  )
}

export default Pin