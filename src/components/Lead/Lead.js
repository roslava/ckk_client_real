import React from 'react'
import classes from './Lead.module.scss'

const Lead = (props) => {
    const cls = [classes.Lead, classes[props.leadType]]
    return(
        <p
        dangerouslySetInnerHTML = {{__html:props.children}}
        className = {cls.join(' ')}>
           
        </p>
    )
}

export default Lead