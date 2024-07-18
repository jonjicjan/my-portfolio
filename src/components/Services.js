import React from 'react';
import '../App.css'; // Ensure this path is correct

const services = [
  {
    title: "Web Development",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8j774O0ujbTqYX2-A-UICjiYP7rcsQ8lAg&s",
    alt: "https://www.w3schools.com/whatis/",
    delay: "0.6s"
  },
  {
    title: "Database Management System",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeP-YY7fc4qXWIXE7lwfmQJPAD0ZY7T2gpXQ&s",
    alt: "https://www.w3schools.com/mongodb/",
    delay: "0.9s"
  },
  {
    title: "DevOps",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMc-v6cOZPw0dktIr881fiSQvACBzd7pjDuw&s",
    alt: "https://www.w3schools.com/aws/aws_devops.php",
    delay: "0.9s"
  },
  {
    title: "Data Analytics",
    imgSrc: "https://4kwallpapers.com/images/wallpapers/python-futuristic-3840x2160-15994.png",
    alt: "https://www.w3schools.com/bootcamp/bootcamp_python.php",
    delay: "0.9s"
  },
  {
    title: "AI & ML",
    imgSrc: "https://static.vecteezy.com/system/resources/previews/024/820/398/non_2x/robot-man-artificial-intelligence-with-a-beautiful-face-look-at-logo-ai-on-hand-in-blue-circuit-bokeh-blur-virtual-cyberspace-futuristic-technology-vector.jpg",
    alt: "https://www.w3schools.com/ai/ai_whatis.asp",
    delay: "0.9s"
  }
];

const Services = () => {
  return (
    <section id="services" className="dark_bg services section-padding">

      <div className="container">
        <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
         My <span>Skills</span>
        </h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-xs-12">
              <div className={`services-item wow fadeInDown`} data-wow-delay={service.delay}>
                <div className="icon">
                  <img src={service.imgSrc} alt={service.alt} />
                </div>
                <div className="services-content">
                  <h3><a href={service.alt}>{service.title}</a></h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
