import React from 'react';
import '../App.css'; // Ensure correct path to CSS

const Blog = () => {
  return (
    <>
      <div id="blog" className="dark_bg blog-area section-padding">
        <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
          My <span>Projects</span>
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInLeft">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>"Project First"</h4>
                    </a>
                    <span>  <i className="fa fa-clock-o"></i> Dec 10, 2022| Amine World</span>
                    <div className="icon">
                      <img
                        src="https://github.com/jonjicjan/freeanime/blob/main/Anm1.jpg?raw=true"
                        alt="loading.img "
                      />
                    </div>
                    <a href="https://jonjicjan.github.io/freeanime/" className="btn blog_btn btn-secondary">
                      View now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInUp">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>"Project Second"</h4>
                    </a>
                    <span>  <i className="fa fa-clock-o"></i> May 15, 2023| Texteditor</span>
                    <div className="icon">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw8udcx1gMg-6BzVStQqep5lbBs_RVdabZw&s"
                        alt=" "
                      />
                    </div>
                    <a href="#" className="btn blog_btn btn-secondary">
                     <del>Currently Unavailable</del>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>"Project Third"</h4>
                    </a>
                    <span>  <i className="fa fa-clock-o"></i> Dec 25, 2023| News App</span>
                    <div className="icon">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw8udcx1gMg-6BzVStQqep5lbBs_RVdabZw&s"
                        alt=" "
                      />
                    </div>
                    <a href="#" className="btn blog_btn btn-secondary">
                    <del>Currently Unavailable</del>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInLeft">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>"Project Fourth"</h4>
                    </a>
                    <span><i className="fa fa-clock-o"></i> Jan 10, 2024| My Notes</span>
                    <div className="icon">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw8udcx1gMg-6BzVStQqep5lbBs_RVdabZw&s"
                        alt=" "
                      />
                    </div>
                    <a href="#" className="btn blog_btn btn-secondary">
                    <del> Currently Unavailable</del>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInUp">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>"Project Fifth"</h4>
                    </a>
                    <span><i className="fa fa-clock-o"></i> Mar 30, 2024| A.I Assistant </span>
                    <div className="icon">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw8udcx1gMg-6BzVStQqep5lbBs_RVdabZw&s"
                        alt=" "
                      />
                    </div>
                    <a href="#" className="btn blog_btn btn-secondary">
                    <del>Currently Unavailable</del>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>"Project Sixth"</h4>
                    </a>
                    <span> <i className="fa fa-clock-o"></i> July 20, 2024| My Portfolio</span>
                    <div className="icon">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gw5I5PxtuFqjMlyr4O0o-iiW6zFMDnryIA&s"
                        alt=" "
                      />
                    </div>
                    <a href="https://jonjicjan.github.io/My-Portfolio/" className="btn blog_btn btn-secondary">
                      View now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
