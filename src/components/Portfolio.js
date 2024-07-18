import React from 'react';
import '../App.css'; // Ensure correct path to CSS

const portfolioItems = [
  {
    category: "design",
    imgSrc: "https://via.placeholder.com/300x200?text=Design+1",
    title: "Design Project 1",
    description: "A brief description of the design project.",
    previewLink: "#",
    moreLink: "#"
  },
  {
    category: "development",
    imgSrc: "https://via.placeholder.com/300x200?text=Development+1",
    title: "Development Project 1",
    description: "A brief description of the development project.",
    previewLink: "#",
    moreLink: "#"
  },
  {
    category: "print",
    imgSrc: "https://via.placeholder.com/300x200?text=Print+1",
    title: "Print Project 1",
    description: "A brief description of the print project.",
    previewLink: "#",
    moreLink: "#"
  },
  // Add more items as needed
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="dark_bg section-padding">
        <div className="container">
          <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
            My <span>Portfolio</span>
          </h2>
          <div className="row">
            <div className="col-md-12">
              <div className="controls text-center">
                <a className="filter active btn btn-common mx-3" data-filter="all">
                  All
                </a>
                <a className="filter btn btn-common mx-3" data-filter=".design">
                  Design
                </a>
                <a className="filter btn btn-common mx-3" data-filter=".development">
                  Development
                </a>
                <a className="filter btn btn-common mx-3" data-filter=".print">
                  Print
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="portfolio-items my-5 ">
                {portfolioItems.map((item, index) => (
                  <div key={index} className={`col-lg-4 col-md-6 mix ${item.category}`}>
                    <div className="shot-item">
                      <div className="portfolio-img">
                        <img src={item.imgSrc} alt={item.title} />
                        <div className="overlay">
                          <a className="icons preview" href={item.previewLink}>
                            <i className="fa fa-eye"></i>
                          </a>
                          <a className="icons link" href={item.moreLink}>
                            <i className="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div className="shot-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
