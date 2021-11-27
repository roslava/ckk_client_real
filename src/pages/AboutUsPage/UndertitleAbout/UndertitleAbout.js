import React from 'react'
import classes from './UndertitleAbout.module.scss'
import ChevronIcon from './assets/chevrono.svg'



const UndertitleAbout = (props) =>{
    return(
<div className = {classes.UndertitleAbout}>
    <div className={classes.ImgHolder}>
        <img src={ChevronIcon} alt=""/>
    </div>
    
    <h3>{props.children}</h3>
    
</div>
    )
}
export default UndertitleAbout