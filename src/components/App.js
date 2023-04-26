import React, { useState, useEffect } from 'react';
import NavBar  from '../widget/Navbar.js';
import { Footer } from '../widget/Footer.js';
import { Landing } from './LandingPage.js';
import './../stylesheets/App.css';

function App() {

  const [loginStatus, setLoginStatus] = useState(false);
    
  return (
    <div className="App">
      <header>
        <NavBar loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      </header>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
