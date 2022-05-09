import React from 'react';
import tree from '../assets/media/tree.png';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi';
import {BsWhatsapp} from 'react-icons/bs';
import Ukraine from '../assets/media/Ukraine.png';

//for routing
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

//page
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Galery from '../pages/Galery';

function Header() {
  return (

    <>
    <header>
        <div className="contaiener">
            <div className="header__item">
                <a href="/" className="header__logo">
                    <img src={tree} alt="" />
                    <h2>TravLog</h2>
                </a>
                <div className="header__menu">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/galery">Galery</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className="header__social">
                    <a href="/">
                        <FiFacebook className = "icon" />
                    </a>
                    <a href="/">
                        <FiInstagram className = "icon" />
                    </a>
                    <a href="/">
                        <FiTwitter className = "icon" />
                    </a>
                    <a href="/">
                        <BsWhatsapp className = "icon" />
                    </a>
                    <a target='_blank' href="https://razomforukraine.org/">
                        <img className = "icon-img" src={Ukraine} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </header>

    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />}></Route>
            <Route path = '/about' element = {<About/>}></Route>
            <Route path = '/blog' element = {<Blog />}></Route>
            <Route path='/galery' element = {<Galery/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Header;