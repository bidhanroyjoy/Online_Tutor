import React from 'react'

const Footer = () => {
     return (
          <div>
               <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <p className="lead"> Bidhan Roy; 2021 </p>

        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>

        <div
      className="modal fade"
      id="enroll"
      tabindex="-1"
      aria-labelledby="enrollLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="enrollLabel">Enrollment</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="lead">Fill out this form and we will get back to you</p>
            <form>
              <div className="mb-3">
                <label for="first-name" className="col-form-label">
                  First Name:
                </label>
                <input type="text" className="form-control" id="first-name" />
              </div>
              <div className="mb-3">
                <label for="last-name" className="col-form-label">Last Name:</label>
                <input type="text" className="form-control" id="last-name" />
              </div>
              <div className="mb-3">
                <label for="email" className="col-form-label">Email:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label for="phone" className="col-form-label">Phone:</label>
                <input type="tel" className="form-control" id="phone" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js"></script>

    {/* <script>
      mapboxgl.accessToken =
        'pk.eyJ1IjoiYnRyYXZlcnN5IiwiYSI6ImNrbmh0dXF1NzBtbnMyb3MzcTBpaG10eXcifQ.h5ZyYCglnMdOLAGGiL1Auw'
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.060982, 42.35725],
        zoom: 18,
      })
    </script> */}
      </div>
    </footer>
          </div>
     )
}

export default Footer
