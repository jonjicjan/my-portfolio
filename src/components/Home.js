import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle button click and navigate to /contact
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <section id="home" className="dark_bg">
        <div id="particles-js"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="banner_content">
                <h3>Hi There,</h3>
                <h1 className="cd-headline clip">
                  <span className="fw_600">I Am </span>
                  <span className="cd-words-wrapper">
                    <b className="is-visible fw_600">Mohammad Umar Khan. </b>
                    <br />
                    <b className="fw_600">Software Developer</b>
                  </span>
                </h1>
                <p>
                  I'm a Software Developer with extensive experience for over 2 years. My expertise is to create and Websites design, Manage backend, and many more...
                </p>
                <button onClick={handleContactClick} className="btn btn-secondary banner_btn">
                  Contact me
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="banner-images">
                <img
                  src="https://w0.peakpx.com/wallpaper/123/322/HD-wallpaper-programmer-code-coding-dark-program-thumbnail.jpg"
                  alt="Programmer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

	  <footer className="footer dark_bg_menu">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Mohammad Umar Khan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;
