import React from "react";

const Section = () => {
  return (
    <section id="learn" class="p-4">
      {/* <div class="container"> */}
        <div className="row align-items-center justify-content-between ">
          <div className="col-md">
            <img src="img/fundamentals.svg" class="img-fluid" alt="" />
          </div>
          <div class="col-md p-5">
            <h2>Learn The Fundamentals</h2>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <a href="#" className="btn btn-light mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
        </div>

        <div className="row align-items-center justify-content-between bg-dark text-light">
        <div className="col-md">
            <h2>Learn React</h2>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>  
            <a href="#" class="btn btn-light mt-2">
              <i className="bi bi-chevron-right"></i> Read More
            </a> 
          </div>
          <div class="col-md">
            <img src="img/react.svg" class="img-fluid" alt="" />
          </div>
             </div>
      {/* </div> */}
    </section>
    
  );
};

export default Section;
