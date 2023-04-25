import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export function Landing() {
  return (
    <div id="landing-page">
      {/* Hero text and image */}
      <div className="d-flex" id="landing-container">
        <div className="d-flex flex-column hero-text">
          <h1>Ready to learn?</h1>
          <p>Hobbio is a free platform where you can learn, teach, and share
            your hobbies and passions.
          </p>
          <button type="button" className="btn btn-warning mt-3 px-5">Try it out!</button>
        </div>
        <div className="hero-image-container">
          <img src={require('../img/hero-img.png')} alt="landing page" className="hero-image"></img>
        </div>
      </div>
      
          
      {/* About */}
          <div className="d-flex flex-column text-center" id="project-goal">
            <h2>About</h2>
            <p className="about-text"> Welcome to Hobbio! We’re dedicated to helping people discover new hobbies and connect with others who share similar interests. Whether you're a beginner or a seasoned hobbyist, Hobbio offers a range of classes across various interests, from cooking and gardening to painting and photography. We recognize the challenges that come with learning a hobby alone, so we created Hobbio to alleviate those pain points. We believe that hobbies can be a powerful tool for personal development and building meaningful connections with others. That's why we're committed to fostering a welcoming and inclusive environment that encourages knowledge sharing and collaboration. Join us and embark on a journey of self-discovery, creativity, and connection!
            </p>  
          </div>
      {/* What we do */}
      <div className="d-flex flex-column text-center" id="project-goal">
        <h2>What we do</h2>
        <p className="goal-text">We value shared knowledge here. This is why Hobbio is all about sharing
          and learning about hobbies that interest you.
        </p>
        <div className="d-flex flex-row mt-4 mb-4">
          <div className="d-flex flex-column text-center align-items-center purpose-container">
            <img src={require('../img/painting.png')} alt="painting" className='purpose-img'></img>
            <h3 className="purpose-heading">Learn</h3>
            <p className="purpose-text">Want to learn photography? Take classes with certified teachers in your community </p>
          </div>
          <div className="d-flex flex-column text-center align-items-center purpose-container">
            <img src={require('../img/apple.png')} alt="apple" className='purpose-img'></img>
            <h3 className="purpose-heading">Teach</h3>
            <p className="purpose-text">Feel like you mastered rock climbing? Become a teacher and share your passion with others!</p>
          </div>
          <div className="d-flex flex-column text-center align-items-center purpose-container">
            <img src={require('../img/handshake.png')} alt="handshake" className='purpose-img'></img>
            <h3 className="purpose-heading">Connect</h3>
            <p className="purpose-text">Just moved to a new city? Connect with others over a shared hobby!</p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="d-flex flex-row align-items-center" id="tutorial">
        <div className="d-flex flex-column tutorial-container">
          <h2>How it works</h2>
          <p className="tutorial-text">When you sign up for Hobbio, you're automatically a learner. If you feel passionate about a specific hobby, you can apply to be a teacher through a simple form. </p>
        </div>
        <div className="d-flex flex-row users-container justify-content-end">
          <div className="d-flex flex-column text-center user-container">
            <img src={require('../img/rockclimbing.jpg')} alt="rock climbing" className="user-image"></img>
            <p className="user-heading">As a Learner</p>
            <p className="user-text">By using our catalog database, find certified teachers in your community that teach your hobby of interest. One you find someone, you can set up a time to meet through their profile and be one step closer to mastering a certain skill. </p>
          </div>
          <div className="d-flex flex-column text-center user-container">
            <img src={require('../img/paintbrush.jpg')} alt="rock climbing" className="user-image"></img>
            <p className="user-heading">As a Teacher</p>
            <p className="user-text">Teach learners about a hobby you're passionate about and connect with people in your community. You will need to fill out a simple application and get approved before starting your teaching journey.</p>
            <button className="astext align-self-end mb-3 learn-more-btn">Learn More →</button>
          </div>
        </div>
      </div>
          
      {/* Demo Video */}
      <div className="d-flex flex-column text-center" id="demo">
          <h2>Demo Video</h2>
            Put video here
      </div>
          
      {/* Meet the Team */}
      <div className="d-flex flex-column text-center" id="team">
        <h2>Our Team</h2>
          <em>Professionals have standards.</em>
      </div>
    </div>
      
  )
}