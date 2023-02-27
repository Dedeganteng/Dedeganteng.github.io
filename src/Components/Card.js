import React from 'react'
import './Card.js'
import logo1 from './alien.jpg'
import logo2 from './Hazard.jpg'

export default function Card() {
  return (
    <div style={{ marginLeft:'5rem', marginRight:'5rem', marginTop:'5rem'}}>
    <div className="container" style={{ marginTop: 30 }}>
  <div className="row">
    <div className="col-12">
      <div className="title-heading"></div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Apa itu M.A.G.M.A</h4>
          <div className="card-image" style={{ color: "#213661" }}>
          <img
          className="card-image"
          src={logo1}
          alt="First slide"
        />
            <i className="fas fa-laptop-code fa-5x" />
          </div>
          <p className="card-text ">
            M.A.G.M.A adalah sebuah ORGANISASI yang akan mengembangkan TEKNOLOGI dan menyatukan MANUSIA dengan ROBOT
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Untuk Apa M.A.G.M.A</h4>
          <div className="card-image" style={{ color: "#5e371b" }}>
            <i className="fas fa-chalkboard-teacher fa-5x" />
            <img
          className="card-image"
          src={logo1}
          alt="First slide"
        />
          </div>
          <p className="card-text">
            Kami bertujuan agar <b>PERANG DUNIA</b> yang terjadi dapat dengan mudah diakhiri tanpa banyak kerusakan
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  )
}
