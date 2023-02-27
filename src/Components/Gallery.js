import React from 'react'
import logo from './Hazard.jpg'

export default function Gallery() {
  return (
    <div style={{ marginLeft:'5rem', marginRight:'5rem', marginTop:'5rem'}}>
    <center>
      <div className="gallery" >
        <h1>GALLERY</h1>
  <img src={logo}/>
  <img src={logo}/>
  <img src={logo}/>
  <img src={logo}/>
  <img src={logo}/>
  <img src={logo}/>
</div>
    </center>
    </div>

  )
}
