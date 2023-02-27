import React from 'react'
import './Navbar.css'

export default function () {
  return (
    <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title"><b>M.A.G.M.A</b></div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span />
      <span />
      <span />
    </label>
  </div>
  <div className="nav-links">
    <a href="#" target="_blank">
      <b>Beranda</b>
    </a>
    <a href="#">
      Visi
    </a>
    <a href="#" target="_blank">
      Misi
    </a>
    <a href="#">
      Tentang
    </a>
    <a href="#">
      Contact
    </a>
  <a href="#" class="btn">Login</a>
  </div>
</div>
  )
}
