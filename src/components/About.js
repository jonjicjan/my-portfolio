import React from 'react';
import '../App.css'; // Ensure the path is correct

const socialLinks = [
  { name: 'LinkedIn', url: 'http://www.linkedin.com/in/mohammad-umar-khan-softwaredeveloper', iconClass: 'fa-brands fa-linkedin' },
  { name: 'GitHub', url: 'https://github.com/jonjicjan', iconClass: 'fa-brands fa-github' },
  { name: 'Twitter', url: 'https://x.com/PATHAN10662951', iconClass: 'fa-brands fa-twitter' },
  { name: 'Instagram', url: 'https://www.instagram.com/_pathan.official_?igsh=MW85bW0zdzNpa283cQ%3D%3D&utm_source=qr', iconClass: 'fa-brands fa-instagram' },
  // Add more social links as needed
];

const certifications = [
  { name: 'Certified Web Developer', issuer: 'Infosys Springboard', year: 2023 },
  { name: 'Junior Software Developer', issuer: 'NSDC by goverment', year: 2024 },
  { name: 'Introduction of Cybersecurity', issuer: 'Cisco Networking Academy', year: 2024 },

  // Add more certifications as needed
];

const collegeDetails = {
  name: 'The Oxford Polytechnic',
  degree: 'Diploma in Computer Science',
  graduationYear: 2025,
  location: 'Banglore, India'
};

const About = () => {
  return (
    <section id="about" className="section-padding dark_bg">
      <div className="container">
        <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
          About <span>Me</span>
        </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="about-content text-center">
              <p>
                Hello! I'm Mohammad, a passionate developer with expertise in web development, database management, DevOps, data analytics, and AI development. I love creating solutions that make a difference.
              </p>
              <div className="resume-link">
                <a href="http://www.linkedin.com/in/mohammad-umar-khan-softwaredeveloper" target="_blank" rel="noopener noreferrer" className="btn btn-common">
                  View My LinkedIn Profile
                </a>
            {  /*
              <a href="/umarresume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-common">
                  Download My Resume
                </a>  */ }
              </div>
              <div className="college-details">
                <h3>Currently Study :</h3>
                <p><strong>College:</strong> {collegeDetails.name}</p>
                <p><strong>Degree:</strong> {collegeDetails.degree}</p>
                <p><strong>Graduation Year:</strong> {collegeDetails.graduationYear}</p>
                <p><strong>Location:</strong> {collegeDetails.location}</p>
              </div>
              <div className="certifications">
                <h3><u>Certifications</u></h3>
                <ul>
                  {certifications.map((cert, index) => (
                    <li key={index}>
                      <strong>{cert.name}</strong> - {cert.issuer}, {cert.year}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className={link.iconClass}></i> {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
