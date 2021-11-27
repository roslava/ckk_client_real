import classes from './Documents.module.scss'
import React from 'react'
import Lottie from 'react-lottie'
import animationData from './assets/forAE.json'
import UndertitleAbout from '../UndertitleAbout/UndertitleAbout'

// import Scheme from './assets/SVG/scheme_docs.svg'
const Documents = () =>{

    const defaultOptions = {
        loop: true,
        autoplay: true,
        renderer: 'svg',
        // renderer: 'canvas',
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        } 
    }

    return(
<div className = {classes.Documents}>
   
    <UndertitleAbout>ЦКК работает по нормативным  документам,<br />в которых прописаны:</UndertitleAbout>

        <div className = {classes.Holder}>
            {/* <img src={Scheme} alt=""/> */}


            <div>
       
       
        <Lottie options={defaultOptions}
            //   height={400}
            //   width='100%'
            resizeMode="cover"
        />
      </div>


           
        </div>
</div>
    )
}
export default Documents