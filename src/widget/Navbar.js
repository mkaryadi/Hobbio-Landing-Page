import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-landing d-flex justify-content-start`}>
     <div className="d-flex navbar-logo" style={{marginTop: "1em"}}>
        <Link to="/">
          <img src={require("../img/navbar-white.png")} alt="hobbio" className="navbar-logo-img"></img>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;