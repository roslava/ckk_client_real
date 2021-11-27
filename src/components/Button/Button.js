import React from 'react'
import classes from './Button.module.scss'

const Button = (props) => {


    const type = props.type
    const HorAlign = props.HorAlign 
    const cls = [classes.Button, classes[type], classes[HorAlign]]
    

    return(
        


            <input type="submit"
            className = {cls.join(' ')}
            onClick = {props.onclick}  
            value = {props.name}         
            
            />
        
    )
}

export default Button 