import React from 'react'
import classes from './Legal.module.scss'


const Legal = (props) => {
    
    return(
        <div className = {classes.Legal}>
            
            <p>{props.children}</p>
            
        </div>
    )
}

export default Legal