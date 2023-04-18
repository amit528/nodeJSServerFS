import React from 'react'
import Slider from './Components/Carousel';
import RegForm from './Components/RegForm';

function Home() {
  return (
    <div>
     <div style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
     <Slider />
     </div>
     <RegForm />
    </div>
  )
}

export default Home