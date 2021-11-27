import React from 'react'
import  PreloaderGif  from './assets/150x150.gif'

const Preloader = () => {
    return(
     <div style={{width:"100%",height:"100vh",display:"flex", alignItems:"center", justifyContent:"center"}}>
          <img src={PreloaderGif} alt=""/>
     </div> 
    )
}

export default Preloader