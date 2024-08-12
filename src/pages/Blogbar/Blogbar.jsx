import React from 'react'
import './Blogbar.css'
import logo from './ndslogo.png'
import profile from './profile.jpg'
import {Link,useNavigate } from 'react-router-dom';

const Blogbar = () => {

  const user = true;

     
  
  return (
  
       
    <aside className="sidebar">
    <div className="sidebar-header">
    <Link to='/posts' > <img src={logo} alt="logo" /></Link>
      

    </div>
    <ul className="sidebar-links">
      <h4>
        <span>Main Menu</span>
        <div className="menu-separator"></div>
      </h4>

      <li>
        <a href="/posts">
          <span className="material-symbols-outlined"> dashboard </span><Link to= '/posts' >Home</Link></a>
      </li>

      <li>
        <a href="/write"><span className="material-symbols-outlined"> overview </span><Link to= '/write'>Create</Link></a>
      </li>
      <li>
        <a href="/settings"><span className="material-symbols-outlined"> settings </span><Link to="/settings">Settings</Link></a>
      </li>
      
      
      <h4>
        <span>Account</span>
        <div className="menu-separator"></div>
      </h4>
     
      
      <li>
        <a href="/inputs"><span className="material-symbols-outlined"> logout </span><Link>Login </Link></a>
      </li>
    </ul>
    <div className="user-account">
      <div className="user-profile">
        <img src={profile} alt="phto" srcset="" />
        <div className="user-detail">
          <h3>Sulab Nepal</h3>
          <span>Student</span>
        </div>
      </div>

    </div>
    
  </aside>


  )
}

export default Blogbar
