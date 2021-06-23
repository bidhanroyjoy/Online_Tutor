import React from 'react'
import './Showcase.css'

const Showcase = () => {
     return (
                 
          <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
             <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                         <div>
                              <h1>Become a <span className="text-warning">Software Engineer</span></h1>
                              <p class="lead my-4">
                              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
                              </p>
                              <button className="btn btn-primary btn-lg" 
                              data-bs-toggle="modal"
                              data-bs-target="#enroll"
                              >
                                   start the enrollment 
                              </button>
                         </div>
                    </div>
                  </div>  
          </section>
         
     )
}

export default Showcase
