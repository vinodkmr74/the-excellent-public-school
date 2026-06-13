import React from 'react'

export default function AllPageheding({heading,text,image}) {
  return (
    <>
    <div className='allPagehedingsection'>
              <img src={image} alt="image" />

    <div className='allPagehedingsection-in'>
        <h2>{heading}</h2>
        <p>{text}</p>



    </div>
    </div>
    </>
  )
}
