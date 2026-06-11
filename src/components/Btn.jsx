import React from 'react'
import { Link } from 'react-router-dom'

export default function Btn({btnname,link}) {
  return (<>
  
  <div className='allbtn' >
    <Link to={link}>{btnname}</Link>
  </div>
  
  
  </>  )
}
