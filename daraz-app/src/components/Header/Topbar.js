import React from 'react'

export default function Topbar() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary mb-1 py-0 border-none">
    <div className="container">
      <a className="text-danger" >save more on app</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       
      </button>
      &nbsp;
      &nbsp;
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-3 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active text-black" aria-current="page">Daraz AFFILIATE PROGRAM</a>
          </li>&nbsp;
          &nbsp;
          <li className="nav-item">
            <a className="text-black nav-a">SELL ON DARAZ</a>
          </li>
          &nbsp;
          &nbsp;
          <li class="nav-item dropdown">
          <a class="text-black nav-a dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          CUSTOMER CARE
          </a>
          &nbsp;
          &nbsp;
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Help center</a></li>
          <li><a class="dropdown-item" href="#">Daraz AFFILIATE PROGRAM</a></li>
            <li><a class="dropdown-item" href="#">chat with us</a></li>
            <li><a class="dropdown-item" href="#">order</a></li>
            <li><a class="dropdown-item" href="#">payment</a></li>
            <li><a class="dropdown-item" href="#">Return & Refund</a></li>
            <li><a class="dropdown-item" href="#">Purchace Protection</a></li>
          </ul>
        </li>
          <li className="nav-item">
            <a className="text-black nav-a" to="/TRACK MY ORDER">TRACK MY ORDER</a>
          </li>
          &nbsp;
          &nbsp;
          <li className="nav-item">
            <a className="text-black nav-a" to='/Login'>LOGIN</a>
          </li>
          &nbsp;
          &nbsp;
          <li className="nav-item">
            <a className="text-black nav-a" to='/SIGNUP'>SIGNUP</a>
          </li>
          &nbsp;
          &nbsp;
          <li className="nav-item">
            <a className="text-black nav-a" to="/>زبان تبدیل کری">زبان تبدیل کریں</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}
