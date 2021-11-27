import React from 'react'
import classes from './ModalPhoto.module.scss'
import Cancel from './assets/cancel.svg'
import sertBase from '../../base_fake/certificate/sert'
import Radium from 'radium'

const ModalPhoto = (props) => {
const _sertImg = sertBase[1]
console.log(_sertImg)
 

 
    return(
        
        <div  className = {classes.ModalBackground}>


<div className={classes.ModalWrapper}>


            <div className={classes.ModalimgHolder}>
               
               
               <img  className={classes.ModalimgHolderBigImg}   src={_sertImg[0].sertImg}  alt=""/> 
               
                              <img
               onClick={() => props.DivDisplayChanger()}
               className={classes.ModalCloseButton}
               src={Cancel} alt="Закрыть"
               style = {{
                cursor:'pointer',
                opacity: '0.5',
                
                  ':hover':{
                    transition: 'opacity .22s ease-in',
                    opacity: '1'
                  }
              }} 
               />

</div>              
            </div>






        </div>
    )
}


export default Radium (ModalPhoto)