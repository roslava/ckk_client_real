import React from 'react'
import classes from './Logo.module.scss'

const Logo = (props) =>{
    
    return(
        <React.Fragment>
              <div className = {classes.Logo}>
                  <div className = {classes[props.logoColorType]}></div>  
              </div>
        </React.Fragment>
    )
}

export default Logo