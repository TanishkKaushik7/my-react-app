import React from 'react';
import img1 from '../assets/herosection.png';
import img2 from '../assets/workshop.png';
import '../cssfiles/landing.css';


const LandingPage = () => {
  return (
    <div>
      <div className="container">
        <div className="text-container">
          <p>Empowering the Future of Education!</p>
          <h2>Get the Competitive Edge!!</h2>
          <p>Learn In-Demand Management Skills with KaizenYou</p>
          <div className="button-container">
            <button className="bn-1">Get Started</button>
          </div>
        </div>
        <div className="image-container">
          <img src={img1} alt="Hero Section" />
        </div>
      </div>
      <div className="sliding-text-container">
        <h1 className="sliding-text">Who are we?</h1>
      </div>
      <div className="info-section">
        <h2>
          KaizenYou is an online training and learning platform
          created specifically for school students from the field of Commerce.
        </h2>
        <p>
          Through training sessions and workshops, we assist individuals in learning several
          departments inside an organization.
        </p>
      </div>
      <div className='im-2'>
        <img src={img2} alt="workshop" className='im'></img>
        <span className='txt'>We go beyond traditional<br></br> learning by offering dynamic <br></br>training sessions and<br></br> workshops.
        <p className='tx'>Our platform also provides exclusive mentoring sessions <br></br>with seasoned professionals, each boasting over five years of<br></br> industry experience, to guide and inspire students towards their<br></br> career goals.</p></span>
      </div>
      <div className='head-container'>
       <h1 className='choose'>Why Choose Us?</h1>
      
      </div>
    </div>
  );
};

export default LandingPage;
