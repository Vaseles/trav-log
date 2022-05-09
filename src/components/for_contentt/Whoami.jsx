import React from 'react';
import {BsGithub, BsWhatsapp} from 'react-icons/bs' ;

function Whoami() {
  return (
    <div id  = "who" className='who-am-i'>

      <div className="color"></div>
      <div className="who-am-i__start">
        <h1>I'm <p>FullStack Developer</p><img src="https://images.pexels.com/photos/2078474/pexels-photo-2078474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""  /></h1>
        <p className='mini'></p>
        <div className="who-am-i__social">
          <span></span>
          <a href="https://github.com/Vaseles"><BsGithub/></a>
          <a href="https://web.whatsapp.com/"><BsWhatsapp/></a>
          <span></span>
        </div>
      </div>

      <div  className="who-am-i__text">
        <p>
          Hi, I'm Vaseles and Junior FullStack Developer.
        </p>
        <div className="who-am-i__text__static">
        <span>
            <h2>1500+ </h2>
            <p>Hours</p>
          </span>
          <span>
            <h2>30+</h2>
            <p>WEBSites</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Whoami