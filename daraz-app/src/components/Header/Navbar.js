import React from 'react'
// import navbar from '../scss/Navbar' 

export default function  () {
  return (
    <div className='navbar'>
    <div className="container">
      <a className="m-0"><img src="data:image/png;base64,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" width="40%" height="20%" alt="" srcset="" /></a>
    <div className='text-center  border:none'><input type="search" placeholder='Search in Daraz' label="search" width="100%" /><button>search</button></div>
      </div>
    </div>
  
  )
}
