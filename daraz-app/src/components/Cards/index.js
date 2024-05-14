import React from 'react'

export const Card= (props) => {
  return (
<>
          <div><img src={props.src} style={{width:"188px" ,height:"188px"}}/> <br /> {props.price} <br /><button className='btn btn-sm btn-primary text-center'>{props.text}</button></div>
</>
  )
}
