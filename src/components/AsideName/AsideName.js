import React from 'react'
import classes from './AsideName.module.scss'
import {NavLink} from 'react-router-dom'
import Radium from 'radium'
import press_img from './assets/press_img.png'


const AsideName = (props) => {
    const cls = [classes.AsideName, classes[props.asideNameType]]
    
    
    return(
        props.link ?
       
        <NavLink
            to={'/'+props.to} 
            title={props.asideName} 
            exact = {true} 
            style={{ textDecoration: 'none' }}
            
        >
            
            <div
        style = {{
            opacity:'1',
            ':hover':{
                opacity:'.8', 
                transition: 'opacity .3s ease-in-out',
            }
        }}
        className={cls.join(' ')}>{props.asideName}
        
        <div>
            <img src={press_img} alt=""/>
        </div>
        </div>
        </NavLink>
       
        :
        <div className={cls.join(' ')}>{props.asideName}</div>
    )
    
   
    
  
}

export default Radium (AsideName)







