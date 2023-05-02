import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar(props) {
  const navigate = useNavigate();

  const handleStatusClick = () => {
    if (!props.loginStatus) {
      navigate("/signin");
    } else {
      props.setLoginStatus(false);
      navigate("/");
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-landing d-flex justify-content-start`}>
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
        <div className="fw-bold align-self-left"><span id="product-name">Hobbio</span></div>
      </Link>
    </nav>
  )
}

export default NavBar;