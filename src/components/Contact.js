import React from 'react'

const Contact = () => {
     return (
          <div className="section">
                <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> West Rampura
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span> +8801686268989
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> +8801986268989
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email:</span> +8801386268989
                roy@gmail.com
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email:</span>
                shib@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
          </div>
     )
}

export default Contact
