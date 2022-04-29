import React from 'react'
import './navbar.css';
const Navbar = () => {
    const pages=["Services","Projects","About"]; 
  return (
    <div className='navbar'>
        <h2>LOGOBAKERY</h2>
        <div className="nav-elements">
        {pages.map((pages)=>navLinks(pages))}
        </div>
        <button className="contact">Contact</button>
    </div>
  )
}

function navLinks(pages){
    return(
        <ul>
            <a><li>{pages}</li></a>
        </ul>
    )
}
export default Navbar